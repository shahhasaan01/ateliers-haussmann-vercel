'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IconPhone, IconMapPin, IconMail, IconClock, IconArrowRight } from '@/components/ServiceIcons';

// Public assets are checked in so static Vercel exports can serve them reliably.
const SLIDES = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    imagePosition: 'center',
    alt: 'Maison rénovée avec pompe à chaleur',
    tagline: 'Artisan RGE Certifié',
    headline: 'Rénovez votre logement',
    subheadline: 'jusqu\'à 70% de moins',
    description: 'Pompe à chaleur, isolation, VMC. On gère votre dossier MaPrimeRénov\' et CEE.',
    cta: 'Demander un devis',
    secondaryCta: 'Nos services',
    stat: '500+',
    statLabel: 'chantiers réalisés'
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    imagePosition: 'center 42%',
    alt: 'Installation pompe à chaleur',
    tagline: 'QualiPAC Certifié',
    headline: 'Pompe à chaleur',
    subheadline: 'air/eau & air/air',
    description: 'Installation professionnelle avec jusqu\'à 15 000€ d\'aides cumulables.',
    cta: 'En savoir plus',
    secondaryCta: 'Voir les aides',
    stat: '70%',
    statLabel: 'd\'économies d\'énergie'
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    imagePosition: 'center',
    alt: 'Isolation extérieure ITE',
    tagline: 'Isolation performante',
    headline: 'Isolation intérieure',
    subheadline: '& extérieure',
    description: 'Combles, murs, planchers. Éligible MaPrimeRénov\' et CEE.',
    cta: 'Découvrir',
    secondaryCta: 'Nos réalisations',
    stat: '10 000€',
    statLabel: 'd\'aides disponibles'
  },
  {
    id: 4,
    image: '/images/hero-4.jpg',
    imagePosition: 'center 45%',
    alt: 'Maison éco-rénovée',
    tagline: 'Rénovation globale',
    headline: 'MPR Ampleur',
    subheadline: 'jusqu\'à 70 000€',
    description: 'Coordination complète de votre chantier. Une seule entreprise, un seul interlocuteur.',
    cta: 'Étude gratuite',
    secondaryCta: 'Comment ça marche',
    stat: '24h',
    statLabel: 'délai de réponse'
  },
  {
    id: 5,
    image: '/images/hero-5.jpg',
    imagePosition: 'center',
    alt: 'Ballon thermodynamique',
    tagline: 'Eau chaude sanitaire',
    headline: 'Ballon thermodynamique',
    subheadline: 'économies garanties',
    description: 'Remplacez votre cumulus. 70% d\'économies sur votre eau chaude.',
    cta: 'Devis gratuit',
    secondaryCta: 'Nos produits',
    stat: '70%',
    statLabel: 'd\'économies ECS'
  },
  {
    id: 6,
    image: '/images/hero-6.jpg',
    imagePosition: 'center 38%',
    alt: 'Équipe Ateliers Haussmann',
    tagline: 'Toute la France',
    headline: 'Ateliers Haussmann',
    subheadline: 'votre artisan RGE',
    description: '19 rue Gambetta, Stains. Intervention sur tout le territoire national.',
    cta: 'Nous contacter',
    secondaryCta: '01 80 89 24 58',
    stat: '4',
    statLabel: 'certifications RGE'
  }
];

// Ken Burns animation variants
const imageVariants = {
  enter: {
    scale: 1.15,
    x: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    scale: 1.05,
    x: -30,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const textVariants = {
  enter: {
    y: 60,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const statVariants = {
  enter: {
    scale: 0.8,
    opacity: 0,
    y: 20,
  },
  center: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
    },
  },
};

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

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
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <div className="hero-slideshow">
      {/* Background Images with Ken Burns effect */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          className="hero-slide-image"
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.imagePosition,
          }}
        />
      </AnimatePresence>

      {/* Dark overlay gradient */}
      <div className="hero-overlay-gradient" />

      {/* Grain texture */}
      <div className="hero-grain" />

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="container hero-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="hero-content-grid"
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Left: Text Content */}
              <div className="hero-text-content">
                <motion.span
                  className="hero-tagline"
                  variants={textVariants}
                >
                  {slide.tagline}
                </motion.span>

                <motion.h1 className="hero-headline" variants={textVariants}>
                  {slide.headline}
                  <br />
                  <em className="hero-subheadline">{slide.subheadline}</em>
                </motion.h1>

                <motion.p className="hero-description" variants={textVariants}>
                  {slide.description}
                </motion.p>

                <motion.div className="hero-cta-group" variants={textVariants}>
                  <Link href="/#contact" className="hero-btn hero-btn-primary">
                    {slide.cta}
                    <IconArrowRight style={{ width: 18, height: 18 }} />
                  </Link>
                  <Link href="/#services" className="hero-btn hero-btn-secondary">
                    {slide.secondaryCta}
                  </Link>
                </motion.div>

                {/* Contact info - mobile optimized */}
                <motion.div className="hero-contact-info" variants={textVariants}>
                  <div className="hero-contact-item">
                    <IconPhone style={{ width: 16, height: 16 }} />
                    <span>01 80 89 24 58</span>
                  </div>
                  <div className="hero-contact-item">
                    <IconMapPin style={{ width: 16, height: 16 }} />
                    <span>Toute la France</span>
                  </div>
                </motion.div>
              </div>

              {/* Right: Stat Card */}
              <motion.div className="hero-stat-card" variants={statVariants}>
                <span className="hero-stat-number">{slide.stat}</span>
                <span className="hero-stat-label">{slide.statLabel}</span>
                <div className="hero-stat-divider" />
                <div className="hero-stat-badges">
                  <span className="hero-badge">RGE</span>
                  <span className="hero-badge">QualiPAC</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
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
                transition={{ duration: 6, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Company branding watermark */}
      <div className="hero-watermark">
        <span>ATELIERS HAUSSMANN</span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span>Découvrir</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Mobile Bottom Info Bar */}
      <div className="hero-mobile-info">
        <div className="hero-mobile-contact">
          <a href="tel:0180892458" className="hero-mobile-btn">
            <IconPhone style={{ width: 20, height: 20 }} />
            <span>01 80 89 24 58</span>
          </a>
        </div>
      </div>

      <style jsx global>{`
        .hero-slideshow {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #0d1612;
        }

        .hero-slide-image {
          position: absolute;
          inset: -5%;
          width: 110%;
          height: 110%;
          background-size: cover;
          background-position: center;
          will-change: transform, opacity;
        }

        /* Ken Burns zoom animation on active slide */
        @keyframes kenburns {
          0% {
            transform: scale(1.1) translate(0, 0);
          }
          100% {
            transform: scale(1) translate(-2%, -1%);
          }
        }

        .hero-slide-image {
          animation: kenburns 8s ease-out forwards;
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(13, 22, 18, 0.85) 0%,
            rgba(13, 22, 18, 0.6) 50%,
            rgba(13, 22, 18, 0.75) 100%
          );
          z-index: 1;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 2;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 3;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 120px 0 100px;
          min-height: 100%;
        }

        .hero-container {
          width: 100%;
        }

        .hero-content-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: center;
          min-width: 0;
        }

        .hero-text-content {
          max-width: 600px;
          min-width: 0;
        }

        .hero-tagline {
          display: inline-block;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4a574;
          margin-bottom: 1.25rem;
          padding: 0.5rem 1rem;
          background: rgba(196, 92, 61, 0.15);
          border: 1px solid rgba(196, 92, 61, 0.25);
          border-radius: 4px;
        }

        .hero-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: 1.25rem;
          overflow-wrap: break-word;
          text-wrap: balance;
        }

        .hero-subheadline {
          font-style: italic;
          color: #e07a5f;
        }

        .hero-description {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.125rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          max-width: 480px;
          margin-bottom: 2rem;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
          border: none;
          min-height: 48px;
        }

        .hero-btn-primary {
          background: #c45c3d;
          color: white;
        }

        .hero-btn-primary:hover {
          background: #1a2f1f;
          transform: translateY(-2px);
        }

        .hero-btn-secondary {
          background: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-contact-info {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-contact-item svg {
          color: #d4a574;
        }

        /* Stat Card */
        .hero-stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          min-width: 160px;
        }

        .hero-stat-number {
          display: block;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 3rem;
          font-weight: 600;
          color: #e07a5f;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .hero-stat-label {
          display: block;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-stat-divider {
          width: 40px;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 1rem auto;
        }

        .hero-stat-badges {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .hero-badge {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          background: rgba(196, 92, 61, 0.2);
          padding: 0.25rem 0.5rem;
          border-radius: 3px;
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
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-nav-arrow:hover {
          background: rgba(196, 92, 61, 0.3);
          border-color: rgba(196, 92, 61, 0.5);
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
          bottom: 2.5rem;
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

        /* Watermark */
        .hero-watermark {
          position: absolute;
          top: 50%;
          right: -5%;
          transform: translateY(-50%) rotate(-90deg);
          z-index: 1;
          pointer-events: none;
          opacity: 0.08;
        }

        .hero-watermark span {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: white;
          white-space: nowrap;
        }

        /* Scroll indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          right: 2rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.6875rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-scroll-indicator svg {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(8px);
          }
          60% {
            transform: translateY(4px);
          }
        }

        /* Mobile Info Bar */
        .hero-mobile-info {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: #1a2f1f;
          padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-mobile-contact {
          display: flex;
          justify-content: center;
        }

        .hero-mobile-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.9375rem;
          font-weight: 500;
          color: white;
          text-decoration: none;
          padding: 0.5rem 1.25rem;
          background: #c45c3d;
          border-radius: 4px;
        }

        /* ======================== */
        /* MOBILE RESPONSIVE */
        /* ======================== */
        
        @media (max-width: 1200px) {
          .hero-content-grid {
            gap: 3rem;
          }
          
          .hero-watermark {
            display: none;
          }
        }

        @media (max-width: 992px) {
          .hero-content-wrapper {
            padding: 100px 0 120px;
          }
          
          .hero-content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero-text-content {
            max-width: 100%;
            order: 1;
          }
          
          .hero-headline {
            font-size: clamp(2rem, 8vw, 3rem);
          }
          
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-cta-group {
            justify-content: center;
          }
          
          .hero-contact-info {
            justify-content: center;
          }
          
          .hero-stat-card {
            order: 2;
            margin: 0 auto;
            padding: 1.5rem;
            min-width: 140px;
          }
          
          .hero-stat-number {
            font-size: 2.5rem;
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
          .hero-content-wrapper {
            padding: calc(var(--rge-height, 36px) + var(--nav-height, 80px) + 1.25rem) 0 8.5rem;
            align-items: center;
          }

          .hero-container {
            padding-inline: 1rem;
          }

          .hero-content-grid {
            gap: 1.25rem;
          }

          .hero-text-content {
            width: min(100%, 36rem);
            margin-inline: auto;
          }
          
          .hero-headline {
            font-size: clamp(2rem, 10vw, 2.75rem);
            line-height: 0.98;
            margin-bottom: 1rem;
          }
          
          .hero-description {
            font-size: 0.98rem;
            line-height: 1.55;
            margin-bottom: 1.5rem;
            max-width: 34rem;
          }
          
          .hero-cta-group {
            flex-direction: column;
            gap: 0.75rem;
            width: 100%;
          }
          
          .hero-btn {
            width: 100%;
            justify-content: center;
            padding: 0.875rem 1rem;
          }
          
          .hero-contact-info {
            display: none;
          }
          
          .hero-stat-card {
            display: none;
          }
          
          .hero-nav-arrow {
            display: none;
          }
          
          .hero-indicators {
            bottom: 5.75rem;
            width: calc(100% - 2rem);
            justify-content: center;
          }
          
          .hero-dot {
            width: min(32px, 12vw);
            flex: 0 1 32px;
          }
          
          .hero-scroll-indicator {
            display: none;
          }
          
          .hero-mobile-info {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .hero-content-wrapper {
            padding-top: calc(var(--rge-height, 36px) + var(--nav-height, 68px) + 0.75rem);
          }

          .hero-headline {
            font-size: clamp(1.85rem, 12vw, 2.35rem);
          }
          
          .hero-tagline {
            font-size: 0.6875rem;
            padding: 0.375rem 0.75rem;
          }
          
          .hero-description {
            font-size: 0.9375rem;
          }
          
          .hero-indicators {
            bottom: 5.25rem;
            gap: 0.5rem;
          }

          .hero-mobile-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) {
          .hero-nav-arrow {
            opacity: 0.7;
          }
          
          .hero-nav-arrow:active {
            background: rgba(196, 92, 61, 0.4);
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-slide-image {
            animation: none;
          }
          
          .hero-scroll-indicator svg {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
