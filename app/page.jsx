'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect } from 'react';
import QuoteForm from '@/components/QuoteForm';
import {
  SERVICE_ICONS,
  IconCheck,
  IconShield,
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconArrowRight
} from '@/components/ServiceIcons';

const HeroSlideshow = dynamic(() => import('@/components/HeroSlideshow'), { ssr: false });

const SERVICES = [
  {
    slug: 'pompe-a-chaleur',
    title: 'Pompe à chaleur',
    desc: 'PAC air/eau ou air/air. Installation complète avec jusqu\'à 15 000 € d\'aides cumulables.'
  },
  {
    slug: 'ballon-thermodynamique',
    title: 'Ballon thermodynamique',
    desc: 'Remplacez votre cumulus. Économies de 70 % sur votre eau chaude sanitaire.'
  },
  {
    slug: 'isolation-interieure',
    title: 'Isolation intérieure',
    desc: 'Combles, murs, planchers. Travaux éligibles MaPrimeRénov\' et CEE.'
  },
  {
    slug: 'isolation-exterieure',
    title: 'Isolation extérieure',
    desc: 'Façade sans perte de surface. Jusqu\'à 15 000 € d\'aides disponibles.'
  },
  {
    slug: 'vmc',
    title: 'VMC',
    desc: 'Simple flux, double flux ou hygroréglable. Air sain et facture réduite.'
  },
  {
    slug: 'systeme-solaire-combine',
    title: 'Solaire combiné',
    desc: 'Chauffage et eau chaude solaire. Couvrez une grande partie de vos besoins.'
  },
  {
    slug: 'chaudiere-gaz',
    title: 'Chaudière à gaz',
    desc: 'Condensation haute performance. Éligible aux certificats CEE.'
  },
  {
    slug: 'renovation-globale',
    title: 'Rénovation globale',
    desc: 'MPR Ampleur jusqu\'à 70 000 €. Nous coordonnons l\'ensemble du chantier.'
  },
];

const REVIEWS = [
  {
    name: 'Laurent M.',
    loc: 'Île-de-France',
    service: 'Pompe à chaleur',
    text: 'Installation rapide, dossier MaPrimeRénov\' géré de A à Z. Équipe sérieuse, je recommande.',
    init: 'LM'
  },
  {
    name: 'Sylvie B.',
    loc: 'Seine-et-Marne',
    service: 'Isolation extérieure',
    text: 'Isolation impeccable. Économies visibles dès le premier mois. Chantier propre et respectueux.',
    init: 'SB'
  },
  {
    name: 'Mohamed K.',
    loc: "Val-d'Oise",
    service: 'Rénovation globale',
    text: 'Ils ont géré toutes les aides, je n\'ai rien eu à faire. Résultat au rendez-vous, dans les délais.',
    init: 'MK'
  },
];

function useRevealAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

function useCounterAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const el = entry.target;
          const target = parseFloat(el.dataset.counter);
          const suffix = el.dataset.suffix || '';
          const duration = 1600;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-counter]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export default function HomePage() {
  useRevealAnimation();
  useCounterAnimation();

  return (
    <>
      {/* Hero Section with Image Slideshow */}
      <section className="hero" id="accueil">
        <HeroSlideshow />
      </section>

      {/* Aide Banner */}
      <div className="aide-banner">
        <div className="container">
          <div className="aide-banner-inner">
            <p className="aide-banner-text">
              <strong>MaPrimeRénov&apos; + CEE</strong> — Jusqu&apos;à 70 % de vos travaux couverts.
              On monte le dossier pour vous.
            </p>
            <Link href="/aides-financement" className="aide-banner-cta">
              Comment ça marche <IconArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section section" id="services">
        <div className="container">
          <div className="services-header">
            <span className="eyebrow">Nos prestations</span>
            <h2 className="display-md reveal">
              8 travaux éligibles aux{' '}
              <span className="accent">aides de l&apos;État</span>
            </h2>
            <p className="body-lg reveal" style={{ marginTop: '1rem' }}>
              Chaque intervention est réalisée par nos artisans certifiés RGE.
              Vos aides sont intégrées directement au devis.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className={`service-card reveal reveal-delay-${(index % 4) + 1}`}
                >
                  <div className="service-card-icon">{Icon && <Icon />}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="service-card-link">
                    En savoir plus <IconArrowRight style={{ width: 14, height: 14 }} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="before-after-section section">
        <div className="container">
          <div className="before-after-header reveal">
            <span className="eyebrow">Avant / Après</span>
            <h2 className="display-md">
              Des chantiers visibles, des résultats concrets
            </h2>
            <p className="body-lg">
              Nos équipes interviennent avec une tenue identifiable Ateliers Haussmann,
              des finitions propres et un suivi complet jusqu&apos;aux aides.
            </p>
          </div>

          <div className="before-after-grid">
            {[
              {
                image: '/images/before-after-exterior-renovation.png',
                title: 'Rénovation extérieure',
                desc: 'Façade isolée, finition propre et meilleur confort thermique.',
                badge: 'ITE + façade'
              },
              {
                image: '/images/before-after-interior-insulation.png',
                title: 'Confort intérieur',
                desc: 'Pièce assainie, isolation renforcée et chauffage modernisé.',
                badge: 'Isolation + PAC'
              },
              {
                image: '/images/worker-pac-ateliers-haussmann.png',
                title: 'Équipe identifiable',
                desc: 'Techniciens en T-shirt Ateliers Haussmann sur chantier.',
                badge: 'QualiPAC'
              },
              {
                image: '/images/worker-insulation-ateliers-haussmann.png',
                title: 'Pose professionnelle',
                desc: 'Travail soigné sur isolation extérieure et rénovation globale.',
                badge: 'Artisan RGE'
              },
            ].map((item, index) => (
              <article
                className={`before-after-card reveal reveal-delay-${(index % 4) + 1}`}
                key={item.title}
              >
                <div
                  className="before-after-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-label={item.title}
                  role="img"
                />
                <div className="before-after-content">
                  <span>{item.badge}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Aide Section */}
      <section className="aide-section section">
        <div className="container">
          <div className="aide-steps-grid">
            <div className="reveal-left">
              <span className="eyebrow eyebrow-white">Aides et financement</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: 'white',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                On gère le dossier,
                <br />
                vous signez
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.55)',
                  maxWidth: '44ch',
                  marginBottom: '2rem',
                }}
              >
                Pas de paperasse, pas de stress. Nos équipes s&apos;occupent de
                l&apos;éligibilité, du montage du dossier et de la déduction sur
                facture.
              </p>
              <Link href="/aides-financement" className="btn btn-primary">
                Voir les aides disponibles
              </Link>
            </div>

            <div className="reveal-right">
              {[
                {
                  n: '01',
                  title: 'Étude gratuite',
                  desc: "On vérifie votre éligibilité MaPrimeRénov' et CEE. Réponse sous 24h.",
                },
                {
                  n: '02',
                  title: 'Montage du dossier',
                  desc: "On remplit et soumet tout. Vous signez, on s'occupe du reste.",
                },
                {
                  n: '03',
                  title: 'Déduction sur facture',
                  desc: 'Les aides sont déduites directement. Vous ne payez que le reste à charge.',
                },
              ].map((step) => (
                <div key={step.n} className="aide-step-card">
                  <div className="aide-step-num">{step.n}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aide-programs">
            {[
              {
                badge: 'Aide principale',
                title: "MaPrimeRénov'",
                amount: "Jusqu'à 70 000 €",
                desc: 'Pour propriétaires occupants et bailleurs. Cumulable avec les CEE.',
              },
              {
                badge: 'Cumulable',
                title: "CEE — Certificats d'Économies d'Énergie",
                amount: 'Variable',
                desc: 'Selon les travaux et votre zone climatique. Pas de plafond fixe.',
              },
            ].map((program, index) => (
              <div
                key={index}
                className={`aide-program-card reveal reveal-delay-${index + 1}`}
              >
                <span className="aide-program-badge">{program.badge}</span>
                <h3>{program.title}</h3>
                <p>{program.desc}</p>
                <span className="aide-amount">{program.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section section">
        <div className="container">
          <div className="why-grid">
            <div className="reveal-left" style={{ position: 'relative' }}>
              <div className="why-visual">
                <div className="why-visual-overlay" />
                <div className="why-visual-content">
                  <div className="why-visual-num">
                    500<span>+</span>
                  </div>
                  <div className="why-visual-label">chantiers réalisés</div>
                  <div className="why-visual-sub">sur toute la France</div>
                </div>
              </div>
              <div className="why-badge-float">
                <div className="num">4</div>
                <div className="lbl">
                  Certifications
                  <br />
                  RGE
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <span className="eyebrow">Pourquoi nous choisir</span>
              <h2 className="display-md" style={{ marginBottom: '1rem' }}>
                Un artisan qui prend tout en charge
              </h2>
              <p
                className="body-md"
                style={{ maxWidth: '50ch', marginBottom: '2rem' }}
              >
                Chez Ateliers Haussmann, de l&apos;étude initiale au versement
                des aides, nos équipes coordonnent chaque étape. Vous n&apos;avez
                qu&apos;à valider.
              </p>

              {[
                {
                  icon: IconShield,
                  title: '4 certifications RGE',
                  desc: 'Quali PAC, Quali Bois, Quali Bat, Quali Sol — les labels qui ouvrent droit aux aides.',
                },
                {
                  icon: IconCheck,
                  title: 'Dossiers pris en charge',
                  desc: "MaPrimeRénov', CEE, Eco-PTZ — on monte et suit tous vos dossiers.",
                },
                {
                  icon: IconMapPin,
                  title: 'Toute la France',
                  desc: "Nos équipes interviennent sur l'ensemble du territoire.",
                },
                {
                  icon: IconClock,
                  title: 'Devis sous 24h',
                  desc: 'Réponse garantie. Gratuit, sans engagement.',
                },
              ].map((feature) => (
                <div key={feature.title} className="why-feature">
                  <div className="why-feature-icon">
                    <feature.icon />
                  </div>
                  <div className="why-feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section section">
        <div className="container">
          <div className="reviews-header">
            <span className="eyebrow">Avis clients</span>
            <h2 className="display-md reveal">Ce que disent nos clients</h2>
            <div className="reviews-rating reveal">
              <span className="reviews-rating-stars">★★★★★</span>
              <span>
                <strong>4,9/5</strong> — 87 avis Google
              </span>
            </div>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map((review, index) => (
              <div
                key={review.name}
                className={`review-card reveal reveal-delay-${index + 1}`}
              >
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-author">
                  <div className="review-avatar">{review.init}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-location">
                      {review.loc} · {review.service}
                    </div>
                    <div className="review-source">Avis Google</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <span className="eyebrow">Certifications</span>
          <h2 className="display-md reveal" style={{ marginBottom: 0 }}>
            Reconnu Garant de l&apos;Environnement
          </h2>
          <div className="certs-wrapper">
            {[
              { code: 'PAC', name: 'Quali PAC', spec: 'Pompes à chaleur' },
              { code: 'BOIS', name: 'Quali Bois', spec: 'Chauffage bois' },
              { code: 'BAT', name: 'Quali Bat', spec: 'Isolation · VMC' },
              { code: 'SOL', name: 'Quali Sol', spec: 'Solaire thermique' },
            ].map((cert, index) => (
              <div
                key={cert.code}
                className={`cert-item reveal reveal-delay-${index + 1}`}
              >
                <div className="cert-logo">
                  QUALI
                  <br />
                  {cert.code}
                </div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-spec">{cert.spec}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote Section */}
      <section className="quote-section section" id="contact">
        <div className="container">
          <div className="quote-grid">
            <div className="reveal-left">
              <span className="eyebrow eyebrow-white">Devis gratuit</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: 'white',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Obtenez votre devis
                <br />
                personnalisé
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.55)',
                  maxWidth: '44ch',
                  marginBottom: '2rem',
                }}
              >
                Remplissez le formulaire — nous vous rappelons sous 24h avec le
                calcul exact de vos aides.
              </p>

              <div className="quote-perks">
                {[
                  '100 % gratuit, sans engagement',
                  'Réponse garantie sous 24h',
                  'Calcul précis de vos aides MPR + CEE',
                  'Artisan RGE Quali PAC · Bois · Bat · Sol',
                ].map((perk) => (
                  <div key={perk} className="quote-perk">
                    <IconCheck />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="quote-phone-box">
                <p>Préférez-vous appeler ?</p>
                <a href="tel:0180892458" className="btn btn-primary">
                  <IconPhone style={{ width: 16, height: 16 }} />
                  01 80 89 24 58
                </a>
              </div>
            </div>

            <div className="quote-form-card reveal-right">
              <div className="quote-form-header">
                <h3 className="quote-form-title">Demande de devis</h3>
                <p className="quote-form-subtitle">
                  Réponse personnalisée sous 24h
                </p>
              </div>
              <QuoteForm variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
