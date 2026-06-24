'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconPhone } from '@/components/ServiceIcons';

// Use Next.js dynamic routing-compatible components
import LinkComponent from 'next/link';

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
      className="hero-slideshow"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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

      {/* Foreground Container for the actual Poster */}
      <div className="hero-poster-container">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={`fg-${slide.id}`}
            className="hero-poster-wrapper"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* The main poster image */}
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="hero-poster-img"
              draggable="false"
            />

            {/* Clickable transparent buttons */}
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

            {/* Fallback overlay (makes the rest of the poster clickable to its primary link) */}
            <LinkComponent
              href={slide.fallbackLink}
              className="hero-poster-fallback-link"
              title={slide.alt}
              aria-label={slide.alt}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        className="hero-nav-arrow hero-nav-prev"
        onClick={prevSlide}
        aria-label="Image précédente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="hero-nav-arrow hero-nav-next"
        onClick={nextSlide}
        aria-label="Image suivante"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="hero-indicators">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller à l'image ${index + 1}`}
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

      {/* Styles */}
      <style jsx global>{`
        .hero-slideshow {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #0b110e;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Background blur styles */
        .hero-slide-bg {
          position: absolute;
          inset: -30px;
          background-size: cover;
          background-position: center;
          filter: blur(25px) brightness(0.35);
          z-index: 1;
          pointer-events: none;
          transform: scale(1.05);
        }

        .hero-slide-bg-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(13, 22, 18, 0.2) 0%, rgba(11, 17, 14, 0.8) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Foreground poster styles */
        .hero-poster-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 1400px;
          padding: 100px 2.5rem 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-poster-wrapper {
          position: relative;
          width: min(calc(100% - 5rem), calc((100vh - 200px) * 1.5));
          aspect-ratio: 1024 / 683;
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-poster-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
        }

        /* Clickable transparent buttons */
        .hero-poster-link-overlay {
          position: absolute;
          z-index: 10;
          cursor: pointer;
          background: transparent;
          transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
          border-radius: 9999px;
          border: 1.5px solid transparent;
        }

        .hero-poster-link-overlay:hover {
          background-color: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.02);
        }

        .hero-poster-link-overlay:active {
          transform: scale(0.98);
        }

        /* Fallback link covers the rest of the poster */
        .hero-poster-fallback-link {
          position: absolute;
          inset: 0;
          z-index: 5;
          cursor: pointer;
        }

        /* Navigation Arrows */
        .hero-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-nav-arrow:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          scale: 1.1;
        }

        .hero-nav-prev {
          left: 2rem;
        }

        .hero-nav-next {
          right: 2rem;
        }

        /* Indicators */
        .hero-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 0.75rem;
        }

        .hero-dot {
          width: 40px;
          height: 3px;
          background: rgba(255, 255, 255, 0.25);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: background 0.3s ease;
        }

        .hero-dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .hero-dot.active {
          background: rgba(255, 255, 255, 0.35);
        }

        .hero-dot-progress {
          position: absolute;
          inset: 0;
          background: #c45c3d;
          transform-origin: left;
        }

        /* Responsive Layout fixes */
        @media (max-width: 1200px) {
          .hero-poster-container {
            max-width: 950px;
          }
        }

        @media (max-width: 992px) {
          .hero-poster-container {
            max-width: 720px;
            padding: 90px 1.5rem 50px;
          }
          .hero-nav-arrow {
            width: 40px;
            height: 40px;
          }
          .hero-nav-prev {
            left: 1rem;
          }
          .hero-nav-next {
            right: 1rem;
          }
        }

        @media (max-width: 768px) {
          /* Force auto-height for hero section on mobile devices to fit the 3:2 aspect ratio of the poster perfectly */
          .hero {
            min-height: auto !important;
            height: auto !important;
            padding-top: calc(var(--rge-height, 36px) + var(--nav-height, 68px)) !important;
            display: block !important;
          }

          .hero-slideshow {
            height: auto !important;
            aspect-ratio: 1024 / 683 !important;
          }

          .hero-poster-container {
            padding: 0 !important;
            max-width: 100% !important;
          }

          .hero-poster-wrapper {
            border-radius: 0;
            border: none;
            box-shadow: none;
          }

          .hero-nav-arrow {
            display: none; /* Hide arrows on mobile to prevent overlap with poster text */
          }

          .hero-indicators {
            bottom: 0.75rem;
          }
          
          .hero-dot {
            width: 25px;
            height: 2px;
          }
        }
      `}</style>
    </div>
  );
}
