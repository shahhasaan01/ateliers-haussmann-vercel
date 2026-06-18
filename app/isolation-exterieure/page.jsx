import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Isolation par l'Extérieur (ITE) — RGE Certifié | Ateliers Haussmann",
  description:
    "Isolation thermique par l'extérieur (ITE) par artisan RGE en Île-de-France. Enduit ou bardage. Jusqu'à 15 000 € d'aides MaPrimeRénov'. Devis gratuit.",
};

export default function IsolationExterieurePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Isolation Extérieure</span>
          </nav>
          <h1>Isolation par l&apos;Extérieur (ITE) — RGE Certifié</h1>
          <p className="page-hero-desc">
            L&apos;isolation par l&apos;extérieur est la méthode la plus efficace pour rénover l&apos;enveloppe
            thermique de votre bâtiment sans perdre de surface habitable. Éligible MaPrimeRénov&apos;
            jusqu&apos;à 15 000 €, réalisée par nos artisans certifiés RGE.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 Jusqu&apos;à 15 000 € d&apos;aides</span>
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
              💶 <strong>MaPrimeRénov&apos; :</strong> Jusqu&apos;à 15 000 € d&apos;aide pour votre isolation extérieure
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
                L&apos;ITE : isolation maximale sans réduire votre surface habitable
              </h2>
              <p>
                L&apos;isolation thermique par l&apos;extérieur (ITE) consiste à envelopper le bâtiment d&apos;un
                manteau isolant posé directement sur les facades. Cette technique élimine la quasi-
                totalité des ponts thermiques, améliore le confort été comme hiver et donne un coup
                de neuf esthétique à votre logement — sans empiéter sur votre espace intérieur. Les
                gains énergétiques peuvent dépasser 40 % selon l&apos;état initial du bâti.
              </p>
              <p style={{ marginTop: '1rem' }}>
                MaPrimeRénov&apos; finance jusqu&apos;à 15 000 € pour les travaux d&apos;ITE, particulièrement
                pour les ménages aux revenus modestes et intermédiaires. Nos experts RGE réalisent
                un diagnostic complet de votre façade, dimensionnent l&apos;isolant adapté et s&apos;occupent
                de toutes les démarches administratives — déclaration préalable de travaux et dossier
                MaPrimeRénov&apos; inclus.
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
                Nos prestations isolation extérieure
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">🏗️</span>
                  <div className="sfi-text">
                    <h4>ITE enduit</h4>
                    <p>
                      Système ETICS (enduit sur isolant) : isolant PSE ou laine de roche recouvert d&apos;un
                      enduit de finition. Rendu lisse ou grainé, grande liberté de teintes. Solution la
                      plus économique et la plus répandue.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🪵</span>
                  <div className="sfi-text">
                    <h4>ITE bardage</h4>
                    <p>
                      Bardage bois, composite ou métallique sur ossature. Aspect contemporain,
                      excellente durabilité et ventilation naturelle de la lame d&apos;air pour éviter les
                      problèmes d&apos;humidité.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🏔️</span>
                  <div className="sfi-text">
                    <h4>Isolation des combles</h4>
                    <p>
                      Isolation des rampants et des toitures terrasses par l&apos;extérieur pour supprimer
                      les ponts thermiques en tête de mur et optimiser le bilan thermique global du
                      bâtiment.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🏠</span>
                  <div className="sfi-text">
                    <h4>Isolation sous toiture</h4>
                    <p>
                      Sarking : panneau rigide posé sous les tuiles ou ardoises lors d&apos;une réfection de
                      toiture. Performances thermiques maximales et étanchéité à l&apos;air parfaite.
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
                  <span className="amount">15 000 €</span>
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
                Obtenez votre devis isolation extérieure gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Isolation Extérieure (ITE)" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
