import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Chaudière à Condensation — Artisan RGE | Ateliers Haussmann",
  description:
    "Installation et remplacement de chaudière à condensation murale ou au sol par artisan RGE en Île-de-France. CEE disponibles. Entretien annuel inclus. Devis gratuit.",
};

export default function ChaudiereGazPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Chaudière à Condensation</span>
          </nav>
          <h1>Chaudière à Condensation — Artisan RGE</h1>
          <p className="page-hero-desc">
            La chaudière à condensation récupère la chaleur des fumées pour maximiser le rendement
            énergétique. Jusqu&apos;à 109 % de rendement contre 65 % pour une chaudière classique.
            CEE disponibles, installation par artisan RGE certifié en Île-de-France.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 CEE disponibles</span>
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
              💶 <strong>CEE :</strong> Certificats d&apos;Économies d&apos;Énergie disponibles pour votre chaudière à condensation
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
                Chaudière à condensation : le sommet de l&apos;efficacité gaz
              </h2>
              <p>
                La chaudière à condensation est la technologie gaz la plus performante disponible
                aujourd&apos;hui. Elle récupère la chaleur latente contenue dans les vapeurs d&apos;eau des
                fumées de combustion pour préchauffer l&apos;eau du circuit de chauffage. Son rendement
                peut dépasser 109 % (en PCI) contre 65 à 75 % pour une vieille chaudière
                atmosphérique. Le remplacement d&apos;une ancienne chaudière par un modèle à condensation
                permet une réduction de consommation de 20 à 35 %.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Bien que MaPrimeRénov&apos; ne finance plus directement les chaudières gaz depuis 2023 au
                profit des équipements décarbonés, les Certificats d&apos;Économies d&apos;Énergie (CEE) restent
                disponibles pour ce type de remplacement. Nos artisans RGE vous orientent vers la
                solution la plus adaptée à votre logement et votre budget, et peuvent également vous
                conseiller sur une transition vers une pompe à chaleur hybride combinant gaz et
                électricité renouvelable pour bénéficier des aides maximales.
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
                Nos prestations chaudière à condensation
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">🏗️</span>
                  <div className="sfi-text">
                    <h4>Murale condensation</h4>
                    <p>
                      Chaudière murale à condensation gaz ou propane : compacte, silencieuse, idéale
                      pour les appartements et maisons sans local technique. Marques premium :
                      Viessmann, De Dietrich, Bosch, Vaillant.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔥</span>
                  <div className="sfi-text">
                    <h4>Sol condensation</h4>
                    <p>
                      Chaudière au sol à condensation pour les grandes surfaces et les besoins en
                      chauffage importants. Puissance de 30 à 500 kW, compatible avec les énergies
                      renouvelables (solaire thermique, bois énergie en appoint).
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔄</span>
                  <div className="sfi-text">
                    <h4>Remplacement chaudière</h4>
                    <p>
                      Dépose et évacuation de votre ancienne chaudière, mise aux normes du circuit de
                      chauffage et installation de la nouvelle chaudière à condensation. Mise en service
                      et réglages inclus.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🔧</span>
                  <div className="sfi-text">
                    <h4>Entretien annuel</h4>
                    <p>
                      L&apos;entretien annuel de chaudière est obligatoire par la loi. Notre contrat de
                      maintenance inclut le nettoyage complet, la vérification des sécurités, le
                      contrôle de combustion et l&apos;attestation d&apos;entretien réglementaire.
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
                  <span className="amount" style={{ fontSize: '1.6rem' }}>CEE</span>
                  <span className="amount-label">Certificats d&apos;Économies d&apos;Énergie disponibles</span>
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
                Obtenez votre devis chaudière à condensation gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Chaudière à Condensation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
