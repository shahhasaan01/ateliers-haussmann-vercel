import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Installation Pompe à Chaleur — Artisan RGE | Ateliers Haussmann",
  description:
    "Installation pompe à chaleur air/eau, air/air et géothermique par artisan RGE certifié en Île-de-France. Jusqu'à 15 000 € d'aides MaPrimeRénov'. Devis gratuit.",
};

export default function PompeAChaleurPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Pompe à Chaleur</span>
          </nav>
          <h1>Installation Pompe à Chaleur — Artisan RGE</h1>
          <p className="page-hero-desc">
            Remplacez votre ancienne chaudière par une pompe à chaleur performante et réduisez votre
            facture énergétique jusqu&apos;à 70 %. Éligible MaPrimeRénov&apos; jusqu&apos;à 15 000 €,
            dossier entièrement géré par notre équipe certifiée RGE.
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
              💶 <strong>MaPrimeRénov&apos; :</strong> Jusqu&apos;à 15 000 € d&apos;aide pour votre pompe à chaleur
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
              <h2 className="section-heading">Pourquoi installer une pompe à chaleur ?</h2>
              <p>
                La pompe à chaleur (PAC) est aujourd&apos;hui la solution de chauffage la plus efficace du
                marché. En captant les calories présentes dans l&apos;air extérieur, le sol ou les nappes
                phréatiques, elle produit 3 à 5 fois plus d&apos;énergie qu&apos;elle n&apos;en consomme.
                Résultat : des économies immédiates sur vos factures de chauffage et d&apos;eau chaude
                sanitaire, tout en réduisant votre empreinte carbone.
              </p>
              <p style={{ marginTop: '1rem' }}>
                En 2025, MaPrimeRénov&apos; finance jusqu&apos;à 15 000 € pour le remplacement d&apos;une
                chaudière fossile par une pompe à chaleur. Les ménages aux revenus modestes et très
                modestes bénéficient des taux les plus élevés — notre équipe analyse gratuitement votre
                situation et monte votre dossier de A à Z pour que vous touchiez le maximum d&apos;aides
                auquel vous avez droit.
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
                Nos prestations pompe à chaleur
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">🌡️</span>
                  <div className="sfi-text">
                    <h4>PAC Air / Eau</h4>
                    <p>
                      Solution idéale pour remplacer une chaudière existante. Compatible avec les
                      radiateurs basse température et le plancher chauffant. COP jusqu&apos;à 4,5.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">💨</span>
                  <div className="sfi-text">
                    <h4>PAC Air / Air</h4>
                    <p>
                      Système réversible offrant chauffage en hiver et climatisation en été. Installation
                      rapide et sans modification du circuit hydraulique existant.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🌍</span>
                  <div className="sfi-text">
                    <h4>PAC Géothermique</h4>
                    <p>
                      Performances optimales toute l&apos;année grâce à la chaleur stable du sous-sol.
                      COP supérieur à 5 — la solution la plus économe sur le long terme.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔧</span>
                  <div className="sfi-text">
                    <h4>Entretien annuel</h4>
                    <p>
                      Contrat de maintenance inclus pour garder votre installation au meilleur rendement.
                      Intervention sous 48 h en cas de panne, pièces et main-d&apos;œuvre garanties.
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
                Obtenez votre devis pompe à chaleur gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Pompe à Chaleur" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}