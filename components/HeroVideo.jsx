'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Slides showcasing what competitors are missing
// These can be replaced with real chantier photos later
const SLIDES = [
  {
    id: 1,
    // Placeholder: Before/After chantier (will be replaced with real photos)
    bgGradient: 'linear-gradient(135deg, #1a2f1f 0%, #243828 50%, #2d4a35 100%)',
    overlayColor: 'rgba(13, 24, 18, 0.55)',
    tagline: 'Travaux réalisés',
    headline: 'Chantiers réels.',
    subheadline: 'Résultats visibles.',
    description: 'Contrairement à nos concurrents, nous montrons de vrais chantiers. Avant / Après, images de nos équipes sur le terrain.',
    stat: '500+',
    statLabel: 'chantiers terminés',
  },
  {
    id: 2,
    bgGradient: 'linear-gradient(135deg, #c45c3d 0%, #8f4528 50%, #1a2f1f 100%)',
    overlayColor: 'rgba(13, 24, 18, 0.6)',
    tagline: 'Accompagnement complet',
    headline: 'On gère tout.',
    subheadline: 'Vous signez.',
    description: 'Dossier MaPrimeRénov\', primes CEE, déduction sur facture. Zéro paperasse. Zéro stress.',
    stat: '70%',
    statLabel: 'd\'aides cumulables',
  },
  {
    id: 3,
    bgGradient: 'linear-gradient(135deg, #2d4a35 0%, #1a2f1f 50%, #0d1612 100%)',
    overlayColor: 'rgba(13, 24, 18, 0.5)',
    tagline: 'Artisan certifié',
    headline: '4 certifications RGE.',
    subheadline: 'Quali PAC · Bois · Bat · Sol',
    description: 'Qualité vérifiée par des audits indépendants. Garantie décennale. Intervention sur toute la France.',
    stat: '4',
    statLabel: 'certifications actives',
  },
  {
    id: 4,
    bgGradient: 'linear-gradient(135deg, #243828 0%, #c45c3d 30%, #1a2f1f 100%)',
    overlayColor: 'rgba(13, 24, 18, 0.55)',
    tagline: 'Réponse rapide',
    headline: 'Devis sous 24h.',
    subheadline: 'Sans engagement.',
    description: 'Pas de démarchage. Pas de pression. Un devis clair avec calcul précis de vos aides. Vous décidez en toute liberté.',
    stat: '24h',
    statLabel: 'délai garanti',
  },
];

// Ken Burns animation variants
const imageVariants = {
  enter: {
    scale: 1.1,
    x: '-2%',
    opacity: 0,
  },
  center: {
    scale: 1,
    x: '0%',
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scale: 1.05,
    x: '2%',
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants = {
  enter: {
    y: 40,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const statVariants = {
  enter: {
    scale: 0.8,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function HeroVideo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <div className="hero-video-container">
      {/* Background with Ken Burns effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero-video-bg"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            background: slide.bgGradient,
          }}
        >
          {/* Overlay gradient for text readability */}
          <div
            className="hero-video-overlay"
            style={{
              background: `linear-gradient(
                160deg,
                ${slide.overlayColor} 0%,
                rgba(13, 24, 18, 0.4) 50%,
                rgba(13, 24, 18, 0.7) 100%
              )`,
            }}
          />

          {/* Animated grain texture */}
          <div className="hero-video-grain" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="hero-video-content">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="hero-video-text"
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Tagline */}
              <motion.span
                className="hero-video-tagline"
                variants={textVariants}
              >
                {slide.tagline}
              </motion.span>

              {/* Headlines */}
              <motion.h1 className="hero-video-headline" variants={textVariants}>
                {slide.headline}
                <br />
                <em>{slide.subheadline}</em>
              </motion.h1>

              {/* Description */}
              <motion.p className="hero-video-description" variants={textVariants}>
                {slide.description}
              </motion.p>

              {/* Stat box */}
              <motion.div className="hero-video-stat" variants={statVariants}>
                <span className="hero-video-stat-number">{slide.stat}</span>
                <span className="hero-video-stat-label">{slide.statLabel}</span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero-video-indicators">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`hero-video-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className="hero-video-progress"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-video-scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span>Découvrir</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        .hero-video-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #0d1612;
        }

        .hero-video-bg {
          position: absolute;
          inset: -5%;
          width: 110%;
          height: 110%;
          background-size: cover;
          background-position: center;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
        }

        .hero-video-grain {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .hero-video-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          padding-top: calc(76px + 36px); /* nav + rge strip */
        }

        .hero-video-text {
          max-width: 640px;
        }

        .hero-video-tagline {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d4a574;
          margin-bottom: 1.5rem;
          padding: 0.5rem 1rem;
          background: rgba(196, 92, 61, 0.15);
          border: 1px solid rgba(196, 92, 61, 0.25);
          border-radius: 4px;
        }

        .hero-video-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: white;
          margin-bottom: 1.5rem;
        }

        .hero-video-headline em {
          font-style: italic;
          color: #e07a5f;
        }

        .hero-video-description {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.0625rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          max-width: 480px;
          margin-bottom: 2.5rem;
        }

        .hero-video-stat {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
          padding: 1.25rem 1.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .hero-video-stat-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: #e07a5f;
          line-height: 1;
        }

        .hero-video-stat-label {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-video-indicators {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 0.75rem;
        }

        .hero-video-dot {
          width: 48px;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: background 0.3s ease;
        }

        .hero-video-dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .hero-video-dot.active {
          background: rgba(255, 255, 255, 0.3);
        }

        .hero-video-progress {
          position: absolute;
          inset: 0;
          background: #c45c3d;
          transform-origin: left;
        }

        .hero-video-scroll {
          position: absolute;
          bottom: 2.5rem;
          right: 2rem;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-video-scroll svg {
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

        @media (max-width: 768px) {
          .hero-video-headline {
            font-size: 2rem;
          }

          .hero-video-description {
            font-size: 0.9375rem;
          }

          .hero-video-stat-number {
            font-size: 2rem;
          }

          .hero-video-indicators {
            bottom: 1.5rem;
          }

          .hero-video-scroll {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
