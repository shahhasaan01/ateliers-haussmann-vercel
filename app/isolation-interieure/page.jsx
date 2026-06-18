import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Isolation Intérieure (ITI) — Artisan RGE | Ateliers Haussmann",
  description:
    "Isolation thermique intérieure (ITI) par artisan RGE en Île-de-France. Combles, murs et planchers. Jusqu'à 10 000 € d'aides MaPrimeRénov'. Devis gratuit.",
};

export default function IsolationInterieurePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Isolation Intérieure</span>
          </nav>
          <h1>Isolation Intérieure (ITI) — Artisan RGE</h1>
          <p className="page-hero-desc">
            Stoppez les déperditions thermiques de votre logement grâce à une isolation intérieure
            performante. Combles, murs et planchers traités par nos artisans RGE. Éligible
            MaPrimeRénov&apos; jusqu&apos;à 10 000 €, dossier géré de A à Z.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 Jusqu&apos;à 10 000 € d&apos;aides</span>
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
              💶 <strong>MaPrimeRénov&apos; :</strong> Jusqu&apos;à 10 000 € d&apos;aide pour votre isolation intérieure
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
                L&apos;isolation intérieure : le premier geste pour économiser l&apos;énergie
              </h2>
              <p>
                L&apos;isolation thermique par l&apos;intérieur (ITI) est la technique la plus répandue pour
                améliorer les performances énergétiques d&apos;un logement. Elle consiste à poser un
                complexe isolant sur les parois intérieures (murs, planchers, rampants de toiture)
                afin de réduire drastiquement les ponts thermiques et les pertes de chaleur. Une
                bonne isolation peut réduire la consommation de chauffage de 25 à 40 %.
              </p>
              <p style={{ marginTop: '1rem' }}>
                MaPrimeRénov&apos; finance jusqu&apos;à 10 000 € pour les travaux d&apos;isolation, selon votre
                profil de revenus et le type de paroi isolée. Les CEE (Certificats d&apos;Économies
                d&apos;Énergie) complètent ces aides. Nos artisans RGE RGE QualiRenov réalisent un audit
                thermique préalable, sélectionnent les isolants adaptés à votre logement et gèrent
                l&apos;intégralité de votre dossier de financement.
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
                Nos prestations isolation intérieure
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">🏔️</span>
                  <div className="sfi-text">
                    <h4>Isolation des combles</h4>
                    <p>
                      Combles perdus par soufflage de ouate de cellulose ou laine minérale, combles
                      aménagés par panneaux rigides. Jusqu&apos;à 30 % d&apos;économies sur la facture énergétique.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🧱</span>
                  <div className="sfi-text">
                    <h4>Murs intérieurs</h4>
                    <p>
                      Doublage thermique en laine de roche, laine de verre ou isolants biosourcés
                      (chanvre, liège). Suppression des parois froides et élimination des condensations.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔲</span>
                  <div className="sfi-text">
                    <h4>Planchers bas</h4>
                    <p>
                      Isolation sous vide sanitaire ou plancher sur terre-plein par injection de mousse
                      polyuréthane ou pose de panneaux PSE. Confort au sol immédiatement amélioré.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🌿</span>
                  <div className="sfi-text">
                    <h4>Isolants naturels</h4>
                    <p>
                      Nous proposons une gamme complète d&apos;isolants biosourcés : chanvre, liège expansé,
                      ouate de cellulose, laine de mouton. Performances thermiques et acoustiques
                      excellentes, empreinte carbone réduite.
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
                  <span className="amount">10 000 €</span>
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
                Obtenez votre devis isolation intérieure gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Isolation Intérieure (ITI)" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
