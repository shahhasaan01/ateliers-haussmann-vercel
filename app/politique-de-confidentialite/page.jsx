import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité | Ateliers Haussmann',
  description:
    "Politique de confidentialité d'Ateliers Haussmann — comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Politique de confidentialité</span>
          </nav>
          <h1>Politique de Confidentialité</h1>
          <p className="page-hero-desc">
            Ateliers Haussmann attache une grande importance à la protection de votre vie privée.
            Cette politique explique quelles données nous collectons, pourquoi, et comment vous
            pouvez exercer vos droits, conformément au Règlement Général sur la Protection des
            Données (RGPD).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div className="legal-content">
            <h2>Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur ce site est Ateliers
              Haussmann, 19 rue Gambetta, 93240 Stains. Pour toute question relative à vos données,
              vous pouvez nous écrire à{' '}
              <a href="mailto:ateliers.haussmann@gmail.com" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>
                ateliers.haussmann@gmail.com
              </a>
              .
            </p>

            <h2>Données collectées</h2>
            <p>
              Lorsque vous remplissez notre formulaire de demande de devis ou nous contactez, nous
              collectons les informations que vous nous transmettez :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Numéro de téléphone</li>
              <li>Adresse e-mail</li>
              <li>Code postal et description de votre projet</li>
            </ul>

            <h2>Finalités du traitement</h2>
            <p>
              Vos données sont utilisées exclusivement pour répondre à votre demande, établir un
              devis personnalisé, vérifier votre éligibilité aux aides (MaPrimeRénov&apos;, CEE) et
              assurer le suivi de votre projet. Elles ne sont jamais revendues à des tiers.
            </p>

            <h2>Base légale</h2>
            <p>
              Le traitement repose sur votre consentement (formulaire de contact) et sur l&apos;intérêt
              légitime d&apos;Ateliers Haussmann à traiter les demandes commerciales reçues.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant une durée maximale de 3 ans à compter de notre
              dernier contact, sauf obligation légale de conservation plus longue (par exemple pour
              les documents comptables liés à un chantier réalisé).
            </p>

            <h2>Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données. Pour
              exercer ces droits, contactez-nous à{' '}
              <a href="mailto:ateliers.haussmann@gmail.com" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>
                ateliers.haussmann@gmail.com
              </a>
              . Vous pouvez également introduire une réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--terracotta)', fontWeight: 600 }}
              >
                www.cnil.fr
              </a>
              ).
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies strictement nécessaires à son fonctionnement.
              Les éventuels cookies de mesure d&apos;audience ne sont déposés qu&apos;avec votre
              consentement. Vous pouvez configurer votre navigateur pour les refuser à tout moment.
            </p>

            <p style={{ marginTop: '2.5rem' }}>
              <Link href="/" className="btn btn-primary">
                Retour à l&apos;accueil
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
