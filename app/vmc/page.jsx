import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Installation VMC — Ventilation Mécanique Contrôlée | Ateliers Haussmann",
  description:
    "Installation VMC simple flux, double flux et hygroréglable par artisan RGE en Île-de-France. Jusqu'à 2 500 € d'aides MaPrimeRénov'. Qualité de l'air garantie. Devis gratuit.",
};

export default function VmcPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">VMC</span>
          </nav>
          <h1>Installation VMC — Ventilation Mécanique Contrôlée</h1>
          <p className="page-hero-desc">
            Une bonne ventilation est indispensable à la santé et à la durabilité de votre logement.
            Nos artisans RGE installent votre VMC selon les normes en vigueur. Éligible MaPrimeRénov&apos;
            jusqu&apos;à 2 500 €, dossier entièrement pris en charge.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 Jusqu&apos;à 2 500 € d&apos;aides</span>
            <span className="meta-badge">📋 MaPrimeRénov&apos; géré</span>
            <span className="meta-badge">🔒 Devis gratuit</span>
          </div>
        </div>
      </section>

      {/* Aide banner */}
      <div className="aide-banner">
        <div className="container">
          <div className="aide-banner-inner">
            <p className="aide-banner-text">
              💶 <strong>MaPrimeRénov&apos; :</strong> Jusqu&apos;à 2 500 € d&apos;aide pour votre VMC
            </p>
            <Link href="/aides-financement" className="aide-banner-cta">
              Vérifier mon éligibilité →
            </Link>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div className="service-details-grid">
            <div className="service-main">
              <h2 className="section-heading">
                Pourquoi installer ou rénover votre VMC ?
              </h2>
              <p>
                La ventilation mécanique contrôlée (VMC) est obligatoire dans tout logement depuis
                1982 et indispensable pour garantir une qualité d&apos;air intérieure saine. Sans
                renouvellement d&apos;air suffisant, un logement accumule humidité, polluants et CO₂ —
                sources de pathologies respiratoires et de dégradations structurelles (moisissures,
                condensation). Une VMC performante complémente parfaitement vos travaux d&apos;isolation
                pour éviter tout risque de surchauffe en été.
              </p>
              <p style={{ marginTop: '1rem' }}>
                MaPrimeRénov&apos; prend en charge jusqu&apos;à 2 500 € pour l&apos;installation ou le
                remplacement d&apos;une VMC performante, notamment la VMC double flux qui récupère jusqu&apos;à
                90 % de la chaleur de l&apos;air extrait avant de le rejeter. Nos techniciens certifiés
                dimensionnent votre installation selon la surface et la configuration de votre
                logement et gèrent votre dossier MPR.
              </p>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                }}
              >
                Nos prestations VMC
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">💨</span>
                  <div className="sfi-text">
                    <h4>VMC Simple Flux</h4>
                    <p>
                      Extraction mécanique de l&apos;air vicié dans les pièces humides (cuisine, salle de
                      bain, WC). Entrée d&apos;air frais par des grilles dans les pièces de vie. Solution
                      économique et fiable pour les logements bien isolés.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔄</span>
                  <div className="sfi-text">
                    <h4>VMC Double Flux</h4>
                    <p>
                      Récupération de 70 à 90 % de la chaleur de l&apos;air extrait avant rejet. L&apos;air
                      entrant est préchauffé en hiver et rafraîchi en été via un échangeur thermique.
                      Idéal pour les maisons BBC et passives.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">💧</span>
                  <div className="sfi-text">
                    <h4>VMC Hygroréglable A</h4>
                    <p>
                      Les bouches d&apos;extraction auto-réglables varient en fonction du taux d&apos;humidité.
                      Débit fixe en entrée d&apos;air, modulable en extraction. Consommation électrique très
                      réduite, entretien minimal.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🌡️</span>
                  <div className="sfi-text">
                    <h4>VMC Hygroréglable B</h4>
                    <p>
                      Bouches d&apos;entrée et d&apos;extraction toutes deux hygroréglables. Adaptation
                      permanente aux besoins réels du logement — la solution la plus performante en
                      simple flux, recommandée pour les logements en rénovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="service-sidebar">
              <div className="sidebar-card">
                <h3 className="sidebar-title">💰 Vos aides</h3>
                <div className="sidebar-aide">
                  <span className="amount">2 500 €</span>
                  <span className="amount-label">maximum d&apos;aide MaPrimeRénov&apos;</span>
                </div>
                <div style={{ display: 'grid', gap: '.5rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>✅ Étude gratuite</span>
                  <span style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>📋 Dossier MPR géré</span>
                  <span style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>💡 CEE inclus</span>
                </div>
                <a
                  href="tel:0180892458"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '.75rem' }}
                >
                  📞 01 80 89 24 58
                </a>
                <Link
                  href="/#contact"
                  className="btn btn-copper-outline"
                  style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                >
                  Demander un devis
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Quote form section */}
      <section className="quote-section section">
        <div className="container">
          <div className="quote-grid">
            <div>
              <span className="eyebrow" style={{ color: 'var(--copper-light)' }}>Devis gratuit</span>
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
                Obtenez votre devis VMC gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="VMC" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
