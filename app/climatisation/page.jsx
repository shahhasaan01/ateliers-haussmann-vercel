import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Climatisation Réversible — Confort Thermique | Ateliers Haussmann",
  description:
    "Installation de climatisation réversible (pompe à chaleur air/air) pour un confort thermique optimal en été et en hiver. Prestation de qualité, devis gratuit.",
};

export default function ClimatisationPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Climatisation</span>
          </nav>
          <h1>Climatisation Réversible</h1>
          <p className="page-hero-desc">
            Bénéficiez d'une température idéale toute l'année avec nos systèmes de climatisation réversible. 
            Chauffage performant en hiver et fraîcheur agréable en été.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">❄️ Confort Été / Hiver</span>
            <span className="meta-badge">💡 Financement Direct</span>
            <span className="meta-badge">🔒 Devis gratuit</span>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <div className="aide-banner" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="aide-banner-inner">
            <p className="aide-banner-text" style={{ color: 'white' }}>
              ℹ️ <strong>Financement :</strong> La climatisation réversible est à la charge du client (non éligible aux aides MaPrimeRénov' et CEE).
            </p>
            <Link href="/#contact" className="aide-banner-cta" style={{ color: 'var(--copper-light)' }}>
              Demander un devis personnalisé →
            </Link>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div className="service-details-grid">
            <div className="service-main">
              <h2 className="section-heading">Pourquoi choisir la climatisation réversible ?</h2>
              <p>
                La climatisation réversible (également appelée pompe à chaleur air-air) est un système deux-en-un 
                qui vous permet de rafraîchir votre maison en été et de la chauffer de manière très économe en hiver. 
                Grâce à un coefficient de performance élevé, elle restitue plus d'énergie thermique qu'elle n'en consomme 
                en électricité, ce qui vous permet de réaliser d'importantes économies sur vos factures de chauffage.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Conformément à la réglementation sur la transition énergétique, les travaux de climatisation réversible pure 
                ne bénéficient pas des subventions de l'État comme MaPrimeRénov' ou les Certificats d'Économies d'Énergie (CEE). 
                L'investissement est donc intégralement à la charge du propriétaire. Nous nous engageons à vous proposer 
                les meilleures solutions techniques au prix le plus juste pour garantir la rentabilité et la durabilité de votre installation.
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
                Nos solutions de climatisation
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">💨</span>
                  <div className="sfi-text">
                    <h4>Climatisation Mono-Split</h4>
                    <p>
                      Idéal pour équiper une seule pièce (comme le salon ou une chambre). Une unité extérieure 
                      reliée à une unité intérieure silencieuse pour un contrôle précis de la température.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🏠</span>
                  <div className="sfi-text">
                    <h4>Climatisation Multi-Split</h4>
                    <p>
                      Pour équiper plusieurs pièces. Une seule unité extérieure alimente plusieurs diffuseurs 
                      intérieurs, vous permettant de réguler indépendamment la température de chaque pièce.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🤫</span>
                  <div className="sfi-text">
                    <h4>Console & Mural Silencieux</h4>
                    <p>
                      Des designs modernes s'intégrant discrètement à votre décoration intérieure avec des 
                      niveaux sonores extrêmement bas, parfaits pour les chambres et espaces de vie.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">⚡</span>
                  <div className="sfi-text">
                    <h4>Maintenance & SAV</h4>
                    <p>
                      Suivi régulier de vos installations par nos experts qualifiés RGE pour garantir la 
                      longévité de l'appareil et une efficacité de filtration de l'air optimale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <aside className="service-sidebar">
              <div className="sidebar-card">
                <h3 className="sidebar-title">⚡ Financement</h3>
                <div className="sidebar-aide" style={{ background: 'rgba(13, 31, 60, 0.05)', color: 'var(--navy)' }}>
                  <span className="amount" style={{ fontSize: '1.8rem', color: 'var(--navy)' }}>Client</span>
                  <span className="amount-label" style={{ color: 'var(--text-muted)' }}>financement 100% à la charge client</span>
                </div>
                <div style={{ display: 'grid', gap: '.5rem', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>✅ Devis clair et transparent</span>
                  <span style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>📋 Matériel garanti constructeur</span>
                  <span style={{ fontSize: '.85rem', color: 'var(--text-muted)' }}>💡 Installation propre par RGE</span>
                </div>
                <a href="tel:0180892458" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '.75rem' }}>📞 01 80 89 24 58</a>
                <Link href="/#contact" className="btn btn-copper-outline" style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}>Demander une étude</Link>
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
              <span className="eyebrow" style={{ color: 'var(--copper-light)' }}>Étude gratuite</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '1.25rem' }}>Obtenez votre devis climatisation</h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Étude thermique personnalisée sous 24h. Gratuit, sans engagement.</p>
            </div>
            <div className="quote-form-card"><QuoteForm variant="dark" service="climatisation" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
