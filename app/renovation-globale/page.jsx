import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Rénovation Globale — MaPrimeRénov' Ampleur | Ateliers Haussmann",
  description:
    "Rénovation globale de votre logement avec MaPrimeRénov' Ampleur : jusqu'à 70 000 € d'aides pour un projet multi-travaux complet. Audit énergétique, PAC, isolation, VMC. Artisan RGE en Île-de-France.",
};

export default function RenovationGlobalePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Rénovation Globale</span>
          </nav>
          <h1>Rénovation Globale — MaPrimeRénov&apos; Ampleur</h1>
          <p className="page-hero-desc">
            La rénovation globale, c&apos;est la voie royale pour sortir votre logement du statut de
            passoire thermique. Avec MaPrimeRénov&apos; Ampleur, bénéficiez jusqu&apos;à 70 000 € d&apos;aides
            pour un projet multi-travaux coordonné : isolation, PAC, VMC et plus encore — tout géré
            par nos experts RGE.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">💰 Jusqu&apos;à 70 000 € d&apos;aides</span>
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
              💶 <strong>MaPrimeRénov&apos; Ampleur :</strong> Jusqu&apos;à 70 000 € d&apos;aide pour votre rénovation globale
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
                MaPrimeRénov&apos; Ampleur : la rénovation globale fortement subventionnée
              </h2>
              <p>
                MaPrimeRénov&apos; Ampleur (anciennement MaPrimeRénov&apos; Sérénité) est le dispositif
                d&apos;aide le plus généreux de l&apos;État pour la rénovation énergétique. Il s&apos;adresse aux
                propriétaires souhaitant réaliser une rénovation d&apos;ampleur permettant de gagner au
                minimum deux classes DPE. Le plafond d&apos;aide peut atteindre 70 000 € selon les
                revenus du foyer, soit jusqu&apos;à 70 % du coût total des travaux pour les ménages
                très modestes. Ce dispositif exige un audit énergétique préalable et
                l&apos;accompagnement par un Mon Accompagnateur Rénov&apos; (MAR).
              </p>
              <p style={{ marginTop: '1rem' }}>
                Ateliers Haussmann est votre interlocuteur unique pour l&apos;ensemble du projet : audit
                énergétique réglementaire, conception du scénario de travaux optimal, coordination
                de toutes les interventions (isolation, chauffage, ventilation), assistance à
                maîtrise d&apos;ouvrage et gestion complète du dossier MaPrimeRénov&apos; Ampleur avec votre
                Mon Accompagnateur Rénov&apos;. De la première visite à la réception des travaux, nous
                sommes à vos côtés.
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
                Nos prestations rénovation globale
              </h3>
              <div className="service-features-list">
                <div className="service-feature-item">
                  <span className="sfi-icon">📊</span>
                  <div className="sfi-text">
                    <h4>Audit énergétique</h4>
                    <p>
                      Audit réglementaire obligatoire pour MaPrimeRénov&apos; Ampleur : diagnostic complet
                      du logement, calcul des déperditions thermiques, simulation des gains énergétiques
                      par scénario de travaux et estimation des aides financières disponibles.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">⚡</span>
                  <div className="sfi-text">
                    <h4>PAC + Isolation + VMC</h4>
                    <p>
                      Le triptyque gagnant de la rénovation globale performante : pompe à chaleur air/eau,
                      isolation des murs et des combles, VMC double flux. Combinaison permettant de passer
                      d&apos;une étiquette F ou G à une étiquette B ou C.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🤝</span>
                  <div className="sfi-text">
                    <h4>Mon Accompagnateur Rénov&apos;</h4>
                    <p>
                      Nous vous mettons en relation avec un MAR agréé qui valide votre dossier et vous
                      guide à chaque étape administrative. Son rôle est obligatoire pour MaPrimeRénov&apos;
                      Ampleur et son coût est lui-même subventionné.
                    </p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="sfi-icon">🗂️</span>
                  <div className="sfi-text">
                    <h4>Multi-travaux coordonnés</h4>
                    <p>
                      Planning et coordination de tous les corps de métier pour minimiser les nuisances et
                      respecter les délais. Un chef de chantier Ateliers Haussmann supervise l&apos;ensemble
                      de votre rénovation du début à la fin.
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
                  <span className="amount">70 000 €</span>
                  <span className="amount-label">maximum d&apos;aide MaPrimeRénov&apos; Ampleur</span>
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
                Lancez votre rénovation globale — devis gratuit
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Étude personnalisée et calcul de vos aides sous 24 h. Gratuit, sans engagement.
              </p>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Rénovation Globale" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
