import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: "Aides & Financement Rénovation Énergétique | Ateliers Haussmann",
  description:
    "Guide complet des aides à la rénovation énergétique en 2025 : MaPrimeRénov' jusqu'à 70 000 €, CEE, Éco-PTZ, TVA réduite. Vérifiez votre éligibilité avec Ateliers Haussmann, artisan RGE.",
};

export default function AidesFinancementPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Aides &amp; Financement</span>
          </nav>
          <h1>Aides &amp; Financement — Tout Savoir en 2025</h1>
          <p className="page-hero-desc">
            MaPrimeRénov&apos;, CEE, Éco-PTZ, TVA réduite… Le financement de votre rénovation
            énergétique n&apos;a jamais été aussi accessible. Découvrez toutes les aides auxquelles
            vous avez droit et laissez Ateliers Haussmann gérer vos dossiers de bout en bout.
          </p>
          <div className="page-hero-meta">
            <span className="meta-badge">💰 Jusqu&apos;à 70 000 €</span>
            <span className="meta-badge">📋 Dossier géré</span>
            <span className="meta-badge">✓ RGE Certifié</span>
            <span className="meta-badge">🔒 Gratuit &amp; sans engagement</span>
          </div>
        </div>
      </section>

      {/* Main aides content */}
      <section className="section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          {/* MaPrimeRénov' */}
          <div style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Aide principale</span>
            <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
              💶 MaPrimeRénov&apos; — jusqu&apos;à 70 000 €
            </h2>
            <p style={{ maxWidth: '800px', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-body)' }}>
              MaPrimeRénov&apos; est la principale aide de l&apos;État pour la rénovation énergétique des
              logements. Elle remplace le CITE (Crédit d&apos;Impôt pour la Transition Énergétique) et
              le programme Habiter Mieux Sérénité. Versée directement après la réalisation des
              travaux, elle est ouverte à tous les propriétaires occupants et bailleurs, quel que
              soit leur niveau de revenus — seul le montant de l&apos;aide varie.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2rem',
              }}
            >
              {[
                { label: 'Ménages très modestes', color: '#2f4a1f', bg: '#dcefce', amount: 'Jusqu\'à 70 %', desc: 'du coût des travaux pris en charge' },
                { label: 'Ménages modestes', color: '#3f5e2e', bg: '#e7f5dc', amount: 'Jusqu\'à 60 %', desc: 'du coût des travaux pris en charge' },
                { label: 'Ménages intermédiaires', color: '#8a4b2f', bg: '#f3e3d8', amount: 'Jusqu\'à 45 %', desc: 'du coût des travaux pris en charge' },
                { label: 'Ménages supérieurs', color: '#5a6b4a', bg: '#e9efe2', amount: 'Jusqu\'à 30 %', desc: 'du coût des travaux pris en charge' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: item.bg,
                    borderRadius: '12px',
                    padding: '1.25rem',
                    border: `1px solid ${item.color}33`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: item.color,
                      marginBottom: '.25rem',
                    }}
                  >
                    {item.amount}
                  </div>
                  <div style={{ fontSize: '.8rem', color: item.color, marginBottom: '.5rem' }}>{item.desc}</div>
                  <div style={{ fontWeight: 600, fontSize: '.9rem', color: 'var(--navy)' }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '1px solid var(--border)',
                marginBottom: '1.5rem',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--navy)', marginBottom: '1rem' }}>
                MaPrimeRénov&apos; Ampleur — jusqu&apos;à 70 000 €
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Le volet &laquo; Ampleur &raquo; de MaPrimeRénov&apos; s&apos;adresse aux projets de rénovation globale
                permettant de gagner au moins 2 classes DPE. Le plafond d&apos;aide est de 70 000 € pour
                les ménages très modestes et 35 000 € pour les ménages supérieurs. Ce dispositif
                nécessite un audit énergétique préalable et l&apos;accompagnement d&apos;un Mon Accompagnateur
                Rénov&apos; (MAR) agréé.
              </p>
              <ul style={{ color: 'var(--text-body)', lineHeight: 2, paddingLeft: '1.25rem' }}>
                <li>Audit énergétique obligatoire (lui-même subventionné)</li>
                <li>Accompagnement MAR obligatoire (lui-même subventionné)</li>
                <li>Gain minimum de 2 classes DPE requis</li>
                <li>Travaux réalisés par des entreprises RGE</li>
                <li>Plafond de travaux : 70 000 € (ménages très modestes) à 35 000 € (ménages supérieurs)</li>
              </ul>
            </div>
          </div>

          {/* CEE */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
              📄 Certificats d&apos;Économies d&apos;Énergie (CEE)
            </h2>
            <p style={{ maxWidth: '800px', lineHeight: 1.8, marginBottom: '1rem', color: 'var(--text-body)' }}>
              Les CEE sont une prime versée par les fournisseurs d&apos;énergie (EDF, Engie, TotalEnergies…)
              obligés par l&apos;État de financer des économies d&apos;énergie chez les particuliers. Cumulable
              avec MaPrimeRénov&apos;, la prime CEE peut représenter de 500 € à plusieurs milliers d&apos;euros
              selon le type de travaux et la superficie chauffée.
            </p>
            <p style={{ maxWidth: '800px', lineHeight: 1.8, color: 'var(--text-body)' }}>
              Ateliers Haussmann gère gratuitement vos dossiers CEE et s&apos;assure que vous bénéficiez
              des meilleurs tarifs du marché pour chaque opération standardisée (COUP DE POUCE
              Chauffage, isolation des combles, remplacement de chaudière…). La prime est déduite
              directement de votre facture ou versée sous forme de chèque.
            </p>
          </div>

          {/* Eco-PTZ */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
              🏦 Éco-Prêt à Taux Zéro (Éco-PTZ)
            </h2>
            <p style={{ maxWidth: '800px', lineHeight: 1.8, marginBottom: '1rem', color: 'var(--text-body)' }}>
              L&apos;Éco-PTZ est un prêt bancaire sans intérêts, accordé sans condition de ressources, pour
              financer des travaux de rénovation énergétique. En 2025, le montant maximum est de
              50 000 € sur 20 ans pour une rénovation globale. Il est cumulable avec MaPrimeRénov&apos;
              et les CEE pour couvrir la totalité de votre reste à charge.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                { title: 'Action unique', amount: '15 000 €', detail: 'Une seule nature de travaux' },
                { title: '2 actions', amount: '25 000 €', detail: 'Deux types de travaux combinés' },
                { title: '3 actions ou +', amount: '30 000 €', detail: 'Trois types de travaux ou plus' },
                { title: 'Rénovation globale', amount: '50 000 €', detail: 'Rénovation performante complète' },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: 'white',
                    borderRadius: '10px',
                    padding: '1.25rem',
                    border: '1px solid var(--border)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: 'var(--copper)',
                      marginBottom: '.25rem',
                    }}
                  >
                    {item.amount}
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '.25rem' }}>{item.title}</div>
                  <div style={{ fontSize: '.8rem', color: 'var(--text-muted)' }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TVA réduite */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
              📉 TVA Réduite à 5,5 %
            </h2>
            <p style={{ maxWidth: '800px', lineHeight: 1.8, color: 'var(--text-body)' }}>
              Tous les travaux de rénovation énergétique réalisés par une entreprise RGE dans un
              logement achevé depuis plus de 2 ans bénéficient d&apos;une TVA réduite à 5,5 % au lieu
              de 20 %. Cette réduction de 14,5 points s&apos;applique sur la main-d&apos;œuvre et les
              fournitures. Elle est automatiquement appliquée par Ateliers Haussmann sur toutes
              nos factures de rénovation énergétique.
            </p>
          </div>

          {/* Conditions d'éligibilité */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-deep) 100%)',
              borderRadius: '16px',
              padding: '2rem',
              color: 'white',
              marginBottom: '3rem',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(1.4rem,2.5vw,2rem)',
                marginBottom: '1.25rem',
                color: 'white',
              }}
            >
              ✅ Conditions d&apos;éligibilité à MaPrimeRénov&apos;
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                { icon: '🏠', text: 'Logement achevé depuis plus de 15 ans (2 ans pour certains travaux)' },
                { icon: '👤', text: 'Propriétaire occupant, bailleur ou copropriété' },
                { icon: '🔧', text: 'Travaux réalisés par un artisan certifié RGE' },
                { icon: '📋', text: 'Demande déposée avant le début des travaux sur maprimerenov.gouv.fr' },
                { icon: '📄', text: 'Devis daté et signé fourni lors de la demande' },
                { icon: '🏡', text: 'Résidence principale (occupation minimum 8 mois/an)' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,.85)', fontSize: '.9rem', lineHeight: 1.6 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              ❓ Questions fréquentes sur les aides
            </h2>
            <div style={{ display: 'grid', gap: '1rem', maxWidth: '800px' }}>
              <details
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  Quelles sont les aides cumulables avec MaPrimeRénov&apos; ?
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  MaPrimeRénov&apos; est cumulable avec les Certificats d&apos;Économies d&apos;Énergie (CEE),
                  l&apos;Éco-PTZ (prêt à taux zéro), la TVA à 5,5 %, les aides locales de votre région
                  ou commune, et les aides d&apos;Action Logement pour les salariés du secteur privé.
                  Le cumul peut couvrir jusqu&apos;à 100 % du coût des travaux pour les ménages très
                  modestes.
                </p>
              </details>

              <details
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  Faut-il avancer les frais pour MaPrimeRénov&apos; ?
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  En principe, oui : MaPrimeRénov&apos; est versée après la réalisation des travaux sur
                  présentation des factures. Cependant, pour les ménages très modestes, il est
                  possible de demander une avance de 70 % dès la validation du dossier. L&apos;Éco-PTZ
                  peut également couvrir le préfinancement des travaux en attendant le versement
                  de la prime.
                </p>
              </details>

              <details
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  Qu&apos;est-ce que la certification RGE et pourquoi est-elle obligatoire ?
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  RGE signifie &laquo; Reconnu Garant de l&apos;Environnement &raquo;. C&apos;est une certification
                  accordée par l&apos;État aux artisans ayant suivi une formation spécifique et répondant
                  à des critères de qualité stricts. Elle est obligatoire pour que les travaux ouvrent
                  droit aux aides MaPrimeRénov&apos;, CEE et Éco-PTZ. Ateliers Haussmann est certifié RGE
                  pour l&apos;ensemble de ses prestations.
                </p>
              </details>

              <details
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  Les propriétaires bailleurs peuvent-ils bénéficier de MaPrimeRénov&apos; ?
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  Oui, depuis 2021 les propriétaires bailleurs ont accès à MaPrimeRénov&apos;, sous
                  conditions. Le bien doit être loué à titre de résidence principale, le loyer
                  plafonné selon les zones géographiques et les locataires doivent respecter des
                  plafonds de revenus. Le montant de l&apos;aide est calculé sur la base des revenus
                  du bailleur. Nos conseillers vous orientent précisément selon votre situation.
                </p>
              </details>

              <details
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  Combien de temps faut-il pour recevoir MaPrimeRénov&apos; ?
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  Le délai moyen de versement est de 2 à 6 mois après la soumission de la demande
                  de paiement (une fois les travaux terminés et les factures déposées). La demande
                  initiale doit être faite avant le début des travaux. Ateliers Haussmann vous aide
                  à préparer un dossier complet et sans erreur pour éviter tout délai supplémentaire
                  lié aux demandes de pièces complémentaires.
                </p>
              </details>

              <details
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1.25rem',
                }}
              >
                <summary
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                  }}
                >
                  Qu&apos;est-ce que Mon Accompagnateur Rénov&apos; (MAR) ?
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                  Mon Accompagnateur Rénov&apos; (MAR) est un opérateur agréé par l&apos;État qui guide les
                  ménages tout au long de leur projet de rénovation d&apos;ampleur : diagnostic du
                  logement, définition du plan de travaux, recherche de financement et suivi des
                  travaux. Son accompagnement est obligatoire pour MaPrimeRénov&apos; Ampleur. Son coût
                  est pris en charge à hauteur de 50 à 100 % selon les revenus du foyer.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Quote form section */}
      <section className="quote-section section">
        <div className="container">
          <div className="quote-grid">
            <div>
              <span className="eyebrow" style={{ color: 'var(--copper-light)' }}>Vérification gratuite</span>
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
                Calculez vos aides en 2 minutes
              </h2>
              <p style={{ color: 'rgba(255,255,255,.65)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Remplissez le formulaire ci-contre et notre équipe calcule précisément toutes les aides
                auxquelles vous avez droit. Gratuit, sans engagement.
              </p>
              <ul style={{ color: 'rgba(255,255,255,.75)', lineHeight: 2, paddingLeft: '1.25rem' }}>
                <li>Analyse de votre éligibilité sous 24 h</li>
                <li>Estimation du montant total des aides</li>
                <li>Conseils personnalisés sur le plan de travaux</li>
                <li>Gestion complète de vos dossiers MPR et CEE</li>
              </ul>
            </div>
            <div className="quote-form-card">
              <QuoteForm variant="dark" service="Aides & Financement" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
