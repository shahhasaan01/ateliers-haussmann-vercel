import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Système Solaire Combiné (SSC) — RGE | Ateliers Haussmann",
  description:
    "Installation de système solaire combiné (SSC) par artisan RGE en Île-de-France. Chauffage et eau chaude sanitaire solaires. Jusqu'à 5 000 € d'aides MaPrimeRénov'. Devis gratuit.",
};

export default function SystemeSolaireCombinePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Système Solaire Combiné</span>
          </nav>
          <h1>Système Solaire Combiné (SSC) — RGE</h1>
          <p className="page-hero-desc">
            Couvrez jusqu&apos;à 60 % de vos besoins en chauffage et en eau chaude sanitaire grâce à
            l&apos;énergie solaire thermique. Éligible MaPrimeRénov&apos; jusqu&apos;à 5 000 €, installation
            clé en main par nos artisans certifiés RGE QualiSol.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 Jusqu&apos;à 5 000 € d&apos;aides</span>
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
              💶 <strong>MaPrimeRénov&apos; :</strong> Jusqu&apos;à 5 000 € d&apos;aide pour votre système solaire combiné
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
                Le système solaire combiné : chauffage et ECS par l&apos;énergie solaire
              </h2>
              <p>
                Le système solaire combiné (SSC) est la version évoluée du chauffe-eau solaire
                individuel (CESI). Il intègre des capteurs thermiques sur votre toiture qui
                produisent à la fois de l&apos;eau chaude sanitaire et contribuent au chauffage de votre
                logement via un plancher chauffant ou des radiateurs basse température. En Île-de-
                France, un SSC bien dimensionné couvre 30 à 60 % des besoins thermiques annuels,
                réduisant d&apos;autant votre facture énergétique.
              </p>
              <p style={{ marginTop: '1rem' }}>
                MaPrimeRénov&apos; accorde jusqu&apos;à 5 000 € pour l&apos;installation d&apos;un système solaire
                combiné. Les CEE et la TVA réduite à 5,5 % viennent compléter ce dispositif pour
                minimiser votre investissement. Nos artisans certifiés QualiSol réalisent une étude
                d&apos;ensoleillement et de dimensionnement adaptée à votre toiture et à vos besoins
                réels avant toute installation.
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
                Nos prestations système solaire combiné
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">☀️</span>
                  <div className="sfi-text">
                    <h4>Panneaux thermiques</h4>
                    <p>
                      Capteurs solaires plans vitrés ou à tubes sous vide, sélectionnés selon
                      l&apos;orientation et la surface de votre toiture. Rendement optimal même par temps
                      nuageux, garantie 10 ans fabricant.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🚿</span>
                  <div className="sfi-text">
                    <h4>CESI — Chauffe-eau solaire individuel</h4>
                    <p>
                      Production d&apos;eau chaude sanitaire solaire pour 2 à 8 personnes. Ballon de
                      stockage solaire avec appoint électrique ou gaz pour les périodes peu ensoleillées.
                      Couverture solaire moyenne : 60 à 80 %.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔥</span>
                  <div className="sfi-text">
                    <h4>Chauffage solaire</h4>
                    <p>
                      Couplage des capteurs thermiques avec votre circuit de chauffage central. Compatible
                      avec le plancher chauffant hydraulique et les radiateurs basse température. Appoint
                      assuré par une chaudière ou une PAC.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔋</span>
                  <div className="sfi-text">
                    <h4>Stockage thermique</h4>
                    <p>
                      Ballon tampon de grande capacité (200 à 1 000 litres) pour stocker l&apos;énergie
                      solaire captée en journée et la restituer en soirée ou la nuit. Maximise
                      l&apos;autonomie solaire de votre installation.
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
                  <span className="amount">5 000 €</span>
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
                Obtenez votre devis système solaire combiné gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Système Solaire Combiné" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
