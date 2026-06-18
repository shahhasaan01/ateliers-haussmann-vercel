import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Installation Ballon Thermodynamique — RGE Certifié | Ateliers Haussmann",
  description:
    "Installation de ballon thermodynamique par artisan RGE en Île-de-France. Jusqu'à 1 200 € d'aides MaPrimeRénov'. Économisez jusqu'à 70 % sur votre eau chaude sanitaire. Devis gratuit.",
};

export default function BallonThermodynamiquePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Ballon Thermodynamique</span>
          </nav>
          <h1>Installation Ballon Thermodynamique — RGE Certifié</h1>
          <p className="page-hero-desc">
            Produisez votre eau chaude sanitaire de manière écologique et économique grâce au ballon
            thermodynamique. Éligible MaPrimeRénov&apos; jusqu&apos;à 1 200 €, installation assurée
            par nos artisans certifiés RGE qualifiés QualiPAC.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 Jusqu&apos;à 1 200 € d&apos;aides</span>
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
              💶 <strong>MaPrimeRénov&apos; :</strong> Jusqu&apos;à 1 200 € d&apos;aide pour votre ballon thermodynamique
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
                Le ballon thermodynamique : la révolution de l&apos;eau chaude
              </h2>
              <p>
                Le ballon thermodynamique fonctionne sur le même principe que la pompe à chaleur : il
                capte les calories de l&apos;air ambiant ou extérieur pour chauffer l&apos;eau sanitaire. Il
                consomme 3 à 4 fois moins d&apos;électricité qu&apos;un chauffe-eau classique à résistance,
                tout en garantissant une eau chaude disponible en permanence. C&apos;est l&apos;alternative
                idéale pour remplacer un cumulus électrique vieillissant et peu performant.
              </p>
              <p style={{ marginTop: '1rem' }}>
                MaPrimeRénov&apos; accorde jusqu&apos;à 1 200 € pour l&apos;installation d&apos;un chauffe-eau
                thermodynamique en remplacement d&apos;un équipement énergie fossile ou d&apos;un cumulus
                électrique. Les Certificats d&apos;Économies d&apos;Énergie (CEE) viennent compléter cette aide,
                réduisant encore davantage votre reste à charge. Notre équipe gère l&apos;intégralité des
                démarches administratives.
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
                Nos prestations ballon thermodynamique
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">🏠</span>
                  <div className="sfi-text">
                    <h4>Sur air ambiant</h4>
                    <p>
                      Installé en espace non chauffé (garage, sous-sol, buanderie), il puise les calories
                      de l&apos;air intérieur. Solution simple et économique, idéale pour les maisons
                      individuelles.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🌬️</span>
                  <div className="sfi-text">
                    <h4>Sur air extérieur</h4>
                    <p>
                      Connecté directement à l&apos;air extérieur via une gaine, ce modèle fonctionne même
                      dans les espaces confinés. Performances stables toute l&apos;année, même par temps froid.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">♻️</span>
                  <div className="sfi-text">
                    <h4>Sur air extrait (VMC)</h4>
                    <p>
                      Couplé à votre système de ventilation, il récupère la chaleur de l&apos;air vicié avant
                      son extraction. Double avantage : eau chaude économique et ventilation optimisée.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔄</span>
                  <div className="sfi-text">
                    <h4>Remplacement cumulus</h4>
                    <p>
                      Remplacement de votre ancien chauffe-eau électrique ou à gaz par un ballon
                      thermodynamique haute performance. Économies immédiates dès la mise en service.
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
                  <span className="amount">1 200 €</span>
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
                Obtenez votre devis ballon thermodynamique gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Ballon Thermodynamique" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
