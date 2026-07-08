import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import PhoneLink from '@/components/PhoneLink';

export const metadata = {
  title: 'Offre PAC Air/Eau 1€* + Monosplit OFFERT | Ateliers Haussmann',
  description:
    "Pompe à chaleur Air/Eau à 1€* avec les aides. Monosplit offert pour les clients éligibles. Artisan RGE — Paris & Île-de-France.",
};

export default function OffrePacAirEauPage() {
  return (
    <>
      <section className="offer-min-hero">
        <div className="container offer-min-hero-grid">
          <div className="offer-min-hero-text">
            <p className="offer-min-eyebrow">Offre limitée</p>
            <h1>
              PAC Air/Eau <span>1€*</span>
              <br />
              Monosplit <em>offert</em>
            </h1>
            <p className="offer-min-lead">
              Chauffage performant + clim réversible. Aides gérées par nos équipes RGE.
            </p>
            <div className="offer-min-cta">
              <Link href="#devis" className="btn btn-primary btn-lg">
                Étude gratuite
              </Link>
              <PhoneLink source="offer_hero" className="btn btn-copper-outline btn-lg">
                01 80 89 24 58
              </PhoneLink>
            </div>
          </div>
          <div className="offer-min-hero-visual">
            <Image
              src="/images/poster-pac.jpg"
              alt="Pompe à chaleur Air/Eau — Ateliers Haussmann"
              width={1024}
              height={682}
              priority
              className="offer-min-hero-img"
            />
          </div>
        </div>
      </section>

      <section className="offer-min-points">
        <div className="container offer-min-points-grid">
          <div className="offer-min-point">
            <Image
              src="/images/worker-pac-ateliers-haussmann.png"
              alt="Installation pompe à chaleur"
              width={480}
              height={320}
              className="offer-min-point-img"
            />
            <h2>PAC Air/Eau</h2>
            <p>À partir de 1€* avec MaPrimeRénov&apos; et CEE.</p>
          </div>
          <div className="offer-min-point offer-min-point--accent">
            <Image
              src="/images/realisation-climatisation.png"
              alt="Monosplit climatisation offert"
              width={480}
              height={320}
              className="offer-min-point-img"
            />
            <h2>Monosplit offert*</h2>
            <p>Inclus pour les clients éligibles à la PAC.</p>
          </div>
        </div>
      </section>

      <section id="devis" className="quote-section section">
        <div className="container">
          <div className="quote-grid">
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem,3vw,2.2rem)',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                }}
              >
                Demandez votre devis
              </h2>
              <p style={{ color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>
                Réponse sous 24 h — sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Pompe à Chaleur" />
            </div>
          </div>
        </div>
      </section>

      <section className="offer-legal">
        <div className="container">
          <p>
            *Sous conditions de revenus et d&apos;éligibilité aux aides. Ateliers Haussmann — RGE QualiPac,
            19 rue Gambetta, 93240 Stains.
          </p>
        </div>
      </section>
    </>
  );
}
