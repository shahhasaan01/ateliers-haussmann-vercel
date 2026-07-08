import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import PhoneLink from '@/components/PhoneLink';
import OfferPac3D from '@/components/OfferPac3D';

export const metadata = {
  title: 'Offre Spéciale PAC Air/Eau 1€* + Monosplit OFFERT | Ateliers Haussmann',
  description:
    "Pompe à chaleur Air/Eau à 1€* avec les aides de l'État. Monosplit Air/Air offert pour les clients éligibles. Artisan RGE QualiPac — Paris & Île-de-France.",
};

const OFFER_STEPS = [
  {
    n: '01',
    title: 'Étude gratuite',
    text: 'Nous analysons votre logement, vos revenus et votre chauffage actuel pour calculer vos aides.',
  },
  {
    n: '02',
    title: 'Dossier aides géré',
    text: "MaPrimeRénov' et CEE montés de A à Z par notre équipe RGE — vous touchez le maximum.",
  },
  {
    n: '03',
    title: 'Installation PAC Air/Eau',
    text: 'Remplacement de votre chaudière par une pompe à chaleur performante, installée par nos experts.',
  },
  {
    n: '04',
    title: 'Monosplit OFFERT*',
    text: 'Pour les clients éligibles : un clim monosplit Air/Air installé en cadeau avec votre PAC.',
  },
];

const LEASING_POINTS = [
  {
    icon: '📅',
    title: '3 ans de mensualités lissées',
    text: 'Le financement de l\'équipement, de sa maintenance et de l\'énergie est étalé sur trois ans.',
  },
  {
    icon: '💶',
    title: 'Même budget qu\'aujourd\'hui',
    text: 'Vous continuez de payer un montant proche de votre facture gaz ou fioul actuelle pendant 3 ans.',
  },
  {
    icon: '📉',
    title: 'Facture divisée par 2',
    text: 'Au bout des trois ans, votre facture de chauffage devrait être nettement réduite selon le gouvernement.',
  },
  {
    icon: '🗓️',
    title: 'Lancement le 1er octobre',
    text: 'Le leasing social PAC air-eau sera porté par des opérateurs privés désignés le 15 septembre.',
  },
];

export default function OffrePacAirEauPage() {
  return (
    <>
      {/* Hero */}
      <section className="offer-hero">
        <OfferPac3D />
        <div className="offer-hero-overlay" />
        <div className="container offer-hero-content">
          <nav className="breadcrumb breadcrumb--light">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Offre PAC Air/Eau</span>
          </nav>
          <span className="offer-hero-badge">Offre exceptionnelle — places limitées</span>
          <h1 className="offer-hero-title">
            PAC <span className="offer-highlight-gold">AIR/EAU 1€*</span>
            <br />
            + Monosplit <span className="offer-highlight-terra">OFFERT !</span>
          </h1>
          <p className="offer-hero-desc">
            Passez au confort et aux économies. Chauffez votre maison, réduisez vos factures — et recevez
            un monosplit Air/Air offert* pour le rafraîchissement estival.
          </p>
          <div className="offer-hero-pills">
            <span className="offer-pill">Jusqu&apos;à 10 000 € MaPrimeRénov&apos;*</span>
            <span className="offer-pill">Jusqu&apos;à 5 000 € CEE*</span>
            <span className="offer-pill">RGE QualiPac</span>
            <span className="offer-pill">Déplacement offert</span>
          </div>
          <div className="offer-hero-cta">
            <Link href="#devis" className="btn btn-primary btn-lg">
              Demander mon étude gratuite
            </Link>
            <PhoneLink source="offer_hero" className="btn btn-copper-outline btn-lg">
              01 80 89 24 58
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* Dual offer cards */}
      <section className="section offer-cards-section">
        <div className="container">
          <div className="offer-cards-grid">
            <article className="offer-card offer-card--primary">
              <span className="offer-card-tag">Offre principale</span>
              <h2>Pompe à chaleur Air/Eau</h2>
              <p className="offer-card-price">
                À partir de <strong>1€*</strong>
              </p>
              <p>
                Remplacez votre chaudière gaz ou fioul par une PAC air-eau réversible. Chauffage,
                eau chaude et économies d&apos;énergie toute l&apos;année.
              </p>
              <ul className="offer-card-list">
                <li>COP jusqu&apos;à 4,5 — facture divisée par 2*</li>
                <li>Compatible radiateurs &amp; plancher chauffant</li>
                <li>Dossier MaPrimeRénov&apos; + CEE géré pour vous</li>
              </ul>
            </article>
            <article className="offer-card offer-card--gift">
              <span className="offer-card-tag offer-card-tag--gift">🎁 Cadeau</span>
              <h2>Monosplit Air/Air OFFERT*</h2>
              <p className="offer-card-price">
                Valeur <strong>offerte</strong>
              </p>
              <p>
                Pour les clients éligibles à la PAC Air/Eau : un monosplit clim réversible installé
                gratuitement — confort été comme hiver.
              </p>
              <ul className="offer-card-list">
                <li>Installation salon ou chambre au choix</li>
                <li>Rafraîchissement performant en canicule</li>
                <li>Offert* avec votre pompe à chaleur Air/Eau</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Aides banner */}
      <div className="aide-banner">
        <div className="container">
          <div className="aide-banner-inner">
            <p className="aide-banner-text">
              💶 <strong>Profitez des aides de l&apos;État :</strong> jusqu&apos;à 15 000 €* (MaPrimeRénov&apos; + CEE)
              — sous conditions de revenus
            </p>
            <Link href="/aides-financement" className="aide-banner-cta">
              Vérifier mon éligibilité →
            </Link>
          </div>
        </div>
      </div>

      {/* Leasing social — BFMTV / Bercy content */}
      <section className="section offer-leasing-section">
        <div className="container">
          <div className="offer-leasing-header">
            <span className="eyebrow">Plan d&apos;électrification — juillet 2026</span>
            <h2 className="section-heading">Leasing social PAC : payez 3 ans, puis économisez</h2>
            <p className="section-intro">
              Le gouvernement a dévoilé les grandes lignes du <strong>leasing social</strong> sur les
              pompes à chaleur air-eau : un dispositif pour étaler sur trois ans le financement de
              l&apos;équipement, de sa maintenance et de l&apos;énergie, avec un lancement prévu au{' '}
              <strong>1er octobre 2026</strong>.
            </p>
          </div>
          <div className="offer-leasing-grid">
            {LEASING_POINTS.map((item) => (
              <div key={item.title} className="offer-leasing-card">
                <span className="offer-leasing-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="offer-leasing-detail">
            <h3>Comment ça marche concrètement ?</h3>
            <p>
              Un foyer actuellement chauffé au gaz ou au fioul continuera de payer pendant trois ans un
              montant similaire à sa facture actuelle, afin d&apos;amortir la pompe à chaleur. Au bout de
              ces trois ans, la facture de chauffage devrait être <strong>« divisée par deux »</strong>{' '}
              selon Bercy. Le dispositif vise notamment les PAC air-eau réversibles et pourrait
              concerner jusqu&apos;à 25 000 ménages.
            </p>
            <p>
              Des opérateurs privés (IZI par EDF, Octopus Energy, Effy…) seront désignés le{' '}
              <strong>15 septembre</strong> pour porter ce leasing. Par ailleurs, le gouvernement prévoit
              un décret pour abaisser la TVA des PAC air-air à <strong>5,5 %</strong>.
            </p>
            <p className="offer-source">
              Source : plan d&apos;électrification du gouvernement —{' '}
              <a
                href="https://www.bfmtv.com/immobilier/payer-durant-trois-ans-sa-pompe-a-chaleur-avant-d-avoir-sa-facture-divisee-par-deux-bercy-devoile-les-grandes-lignes-de-son-plan-d-electrification-ce-mardi_AD-202607070503.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BFMTV, 7 juillet 2026
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Comment profiter de l&apos;offre ?
          </h2>
          <div className="offer-steps-grid">
            {OFFER_STEPS.map((step) => (
              <div key={step.n} className="offer-step-card">
                <span className="offer-step-num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section offer-trust-section">
        <div className="container">
          <div className="offer-trust-grid">
            <div className="offer-trust-item">
              <span>💰</span>
              <strong>Économies d&apos;énergie</strong>
              <p>Jusqu&apos;à 70 % sur votre facture*</p>
            </div>
            <div className="offer-trust-item">
              <span>🏠</span>
              <strong>Confort thermique</strong>
              <p>Chauffage hiver + fraîcheur été</p>
            </div>
            <div className="offer-trust-item">
              <span>🔧</span>
              <strong>Experts RGE QualiPac</strong>
              <p>Installation certifiée</p>
            </div>
            <div className="offer-trust-item">
              <span>🛡️</span>
              <strong>Matériel garanti</strong>
              <p>Haute performance &amp; SAV</p>
            </div>
            <div className="offer-trust-item">
              <span>🤝</span>
              <strong>Accompagnement</strong>
              <p>De A à Z, sans stress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="devis" className="quote-section section">
        <div className="container">
          <div className="quote-grid">
            <div>
              <span className="eyebrow" style={{ color: 'var(--copper-light)' }}>
                Étude gratuite — déplacement offert
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem,3vw,2.5rem)',
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1.1,
                  marginBottom: '1.25rem',
                }}
              >
                Demandez votre offre PAC Air/Eau 1€* + Monosplit OFFERT
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Réponse sous 24 h. Nous calculons vos aides et vérifions votre éligibilité à l&apos;offre
                exceptionnelle.
              </p>
              <PhoneLink source="offer_form" style={{ color: 'var(--terracotta-light)', fontWeight: 600, fontSize: '1.1rem' }}>
                📞 01 80 89 24 58
              </PhoneLink>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Pompe à Chaleur" />
            </div>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="offer-legal">
        <div className="container">
          <p>
            *PAC Air/Eau à 1€ et monosplit Air/Air offert sous conditions de revenus et d&apos;éligibilité
            aux aides MaPrimeRénov&apos; et CEE. Montants indicatifs selon profil du ménage (jusqu&apos;à
            10 000 € MaPrimeRénov&apos; + 5 000 € CEE). Sous réserve d&apos;acceptation du dossier par
            l&apos;ANAH et les obligés CEE. Leasing social : dispositif gouvernemental annoncé le 7 juillet
            2026, entrée en vigueur prévue au 1er octobre 2026 — informations susceptibles d&apos;évoluer.
            Ateliers Haussmann — Artisan RGE QualiPac, 19 rue Gambetta, 93240 Stains.
          </p>
        </div>
      </section>
    </>
  );
}
