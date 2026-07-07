'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import LinkComponent from 'next/link';
const HeroAmbient3D = dynamic(() => import('@/components/HeroAmbient3D'), { ssr: false });

const SLIDES = [
  {
    id: 1,
    image: '/images/poster-pac.jpg',
    alt: 'Divisez Vos Factures de Chauffage par 3 - Pompe à Chaleur - Ateliers Haussmann',
    links: [
      {
        href: '/#contact',
        style: { left: '23.5%', top: '83.2%', width: '53%', height: '7.2%' },
        label: 'Demandez votre devis gratuit et personnalisé'
      },
      {
        href: 'tel:0180892458',
        style: { left: '56%', top: '94.5%', width: '17%', height: '3.5%' },
        label: 'Appeler le 01 80 89 24 58'
      }
    ],
    fallbackLink: '/pompe-a-chaleur'
  },
  {
    id: 2,
    image: '/images/poster-ballon.jpg',
    alt: 'Jusqu\'à 75% d\'Énergie Gratuite pour Votre Eau Chaude - Ateliers Haussmann',
    links: [
      {
        href: '/ballon-thermodynamique',
        style: { left: '24.2%', top: '87.1%', width: '51.8%', height: '5.8%' },
        label: 'Remplacez votre ancien cumulus dès aujourd\'hui'
      }
    ],
    fallbackLink: '/ballon-thermodynamique'
  },
  {
    id: 3,
    image: '/images/poster-ssc.jpg',
    alt: 'Produisez Votre Propre Chauffage Grâce au Soleil - Ateliers Haussmann',
    links: [
      {
        href: '/systeme-solaire-combine',
        style: { left: '16.2%', top: '88.8%', width: '42.8%', height: '6.4%' },
        label: 'Passer à l\'autonomie énergétique'
      },
      {
        href: 'tel:0180892458',
        style: { left: '59.8%', top: '88.8%', width: '23.8%', height: '6.4%' },
        label: 'Appeler nos experts'
      }
    ],
    fallbackLink: '/systeme-solaire-combine'
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const posterRotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);
  const posterRotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [canParallax, setCanParallax] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanParallax(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const slide = SLIDES[currentSlide];

  return (
    <div
      ref={containerRef}
      className="hero-slideshow"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroAmbient3D />

      {/* Background ambient blurred image */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          className="hero-slide-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      </AnimatePresence>

      {/* Dark overlay for ambient background */}
      <div className="hero-slide-bg-overlay" />
      <div className="hero-vignette-radial" aria-hidden="true" />

      {/* Foreground Container for the actual Poster */}
      <div className="hero-poster-container">
        <div className="hero-poster-stage">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={`fg-${slide.id}`}
              className="hero-poster-wrapper"
              custom={direction}
              style={
                canParallax
                  ? { rotateX: posterRotateX, rotateY: posterRotateY }
                  : undefined
              }
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div className="hero-poster-glow" aria-hidden="true" />
              <div className="hero-poster-frame" aria-hidden="true" />

              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-poster-img"
                width={1024}
                height={682}
                draggable="false"
                fetchPriority="high"
              />

              {slide.links.map((link, idx) => (
                <LinkComponent
                  key={idx}
                  href={link.href}
                  className="hero-poster-link-overlay"
                  style={link.style}
                  title={link.label}
                  aria-label={link.label}
                />
              ))}

              <LinkComponent
                href={slide.fallbackLink}
                className="hero-poster-fallback-link"
                title={slide.alt}
                aria-label={slide.alt}
              />
            </motion.div>
          </AnimatePresence>

          <button
            className="hero-nav-arrow hero-nav-prev"
            onClick={prevSlide}
            aria-label="Image précédente"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hero-nav-arrow hero-nav-next"
            onClick={nextSlide}
            aria-label="Image suivante"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <div className="hero-indicators">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller à l'image ${index + 1}`}
                type="button"
              >
                {index === currentSlide && (
                  <motion.div
                    className="hero-dot-progress"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 7, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
