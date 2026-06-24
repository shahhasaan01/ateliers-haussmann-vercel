import Link from 'next/link';

export const metadata = {
  title: "Mentions Légales | Ateliers Haussmann",
  description:
    "Mentions légales du site Ateliers Haussmann — artisan RGE en rénovation énergétique en Île-de-France. Informations sur l'éditeur, l'hébergeur et la politique de confidentialité.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Mentions Légales</span>
          </nav>
          <h1>Mentions Légales</h1>
          <p className="page-hero-desc">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance
            en l&apos;économie numérique, il est porté à la connaissance des utilisateurs et visiteurs
            du site les présentes mentions légales.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: 'var(--warm-white)' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              display: 'grid',
              gap: '2.5rem',
            }}
          >
            {/* Éditeur */}
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid var(--border)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  fontSize: '1.4rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '.75rem',
                  borderBottom: '2px solid var(--copper)',
                }}
              >
                🏢 Éditeur du site
              </h2>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '.95rem',
                  color: 'var(--text-body)',
                }}
              >
                <tbody>
                  {[
                    ['Raison sociale', 'Ateliers Haussmann'],
                    ['Statut juridique', 'Entreprise individuelle'],
                    ['Adresse', '19 rue Gambetta, 93240 Stains'],
                    ['Téléphone', '01 80 89 24 58'],
                    ['E-mail', 'ateliers.haussmann@gmail.com'],
                    ['SIRET', '99359069400028'],
                    ['Certification', 'RGE (Reconnu Garant de l\'Environnement)'],
                    ['Activité', 'Rénovation énergétique — chauffage, isolation, ventilation'],
                  ].map(([key, val]) => (
                    <tr
                      key={key}
                      style={{ borderBottom: '1px solid var(--border)' }}
                    >
                      <td
                        style={{
                          padding: '.75rem .5rem',
                          fontWeight: 600,
                          color: 'var(--navy)',
                          width: '40%',
                          verticalAlign: 'top',
                        }}
                      >
                        {key}
                      </td>
                      <td style={{ padding: '.75rem .5rem', verticalAlign: 'top' }}>
                        {key === 'Téléphone' ? (
                          <a href="tel:0180892458" style={{ color: 'var(--copper)', textDecoration: 'none' }}>
                            {val}
                          </a>
                        ) : key === 'E-mail' ? (
                          <a href="mailto:ateliers.haussmann@gmail.com" style={{ color: 'var(--copper)', textDecoration: 'none' }}>
                            {val}
                          </a>
                        ) : (
                          val
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Hébergement */}
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid var(--border)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  fontSize: '1.4rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '.75rem',
                  borderBottom: '2px solid var(--copper)',
                }}
              >
                🖥️ Hébergement
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '.75rem' }}>
                Ce site est hébergé par :
              </p>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '.95rem',
                  color: 'var(--text-body)',
                }}
              >
                <tbody>
                  {[
                    ['Hébergeur', 'Vercel Inc.'],
                    ['Adresse', '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis'],
                    ['Site web', 'https://vercel.com'],
                  ].map(([key, val]) => (
                    <tr key={key} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td
                        style={{
                          padding: '.75rem .5rem',
                          fontWeight: 600,
                          color: 'var(--navy)',
                          width: '40%',
                          verticalAlign: 'top',
                        }}
                      >
                        {key}
                      </td>
                      <td style={{ padding: '.75rem .5rem', verticalAlign: 'top' }}>
                        {key === 'Site web' ? (
                          <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--copper)', textDecoration: 'none' }}
                          >
                            {val}
                          </a>
                        ) : (
                          val
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Propriété intellectuelle */}
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid var(--border)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  fontSize: '1.4rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '.75rem',
                  borderBottom: '2px solid var(--copper)',
                }}
              >
                ©️ Propriété intellectuelle
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons,
                logiciels, etc.) est la propriété exclusive d&apos;Ateliers Haussmann ou de ses
                partenaires. Toute reproduction, représentation, modification, publication ou
                adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le
                procédé utilisé, est interdite sans l&apos;autorisation écrite préalable d&apos;Ateliers
                Haussmann.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                Toute exploitation non autorisée du site ou de l&apos;un des éléments qu&apos;il contient
                sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément
                aux dispositions des articles L.335-2 et suivants du Code de propriété intellectuelle.
              </p>
            </div>

            {/* Données personnelles */}
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid var(--border)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  fontSize: '1.4rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '.75rem',
                  borderBottom: '2px solid var(--copper)',
                }}
              >
                🔒 Données personnelles (RGPD)
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Ateliers Haussmann s&apos;engage à protéger la vie privée des utilisateurs de ce site
                conformément au Règlement Général sur la Protection des Données (RGPD — Règlement
                UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  fontSize: '1.05rem',
                  marginBottom: '.75rem',
                  marginTop: '1.5rem',
                }}
              >
                Données collectées
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Lors de l&apos;utilisation du formulaire de contact ou de demande de devis, nous collectons
                les informations suivantes : nom et prénom, adresse e-mail, numéro de téléphone,
                adresse du bien concerné et description du projet. Ces données sont collectées avec
                votre consentement et sont strictement nécessaires au traitement de votre demande.
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  fontSize: '1.05rem',
                  marginBottom: '.75rem',
                  marginTop: '1.5rem',
                }}
              >
                Finalités et durée de conservation
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Vos données sont utilisées exclusivement pour répondre à votre demande, établir un
                devis et, avec votre accord explicite, vous envoyer des informations sur nos services
                et promotions. Elles sont conservées pendant une durée de 3 ans à compter de votre
                dernière interaction avec notre entreprise.
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  fontSize: '1.05rem',
                  marginBottom: '.75rem',
                  marginTop: '1.5rem',
                }}
              >
                Vos droits
              </h3>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                Conformément au RGPD, vous disposez des droits d&apos;accès, de rectification,
                d&apos;effacement, de limitation et de portabilité de vos données, ainsi que du droit
                d&apos;opposition à leur traitement. Pour exercer ces droits, contactez-nous par e-mail
                à{' '}
                <a
                  href="mailto:ateliers.haussmann@gmail.com"
                  style={{ color: 'var(--copper)', textDecoration: 'none' }}
                >
                  ateliers.haussmann@gmail.com
                </a>{' '}
                ou par courrier à l&apos;adresse mentionnée dans la section Éditeur ci-dessus. Vous
                disposez également du droit d&apos;introduire une réclamation auprès de la CNIL
                (Commission Nationale de l&apos;Informatique et des Libertés) à l&apos;adresse{' '}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--copper)', textDecoration: 'none' }}
                >
                  www.cnil.fr
                </a>
                .
              </p>
            </div>

            {/* Cookies */}
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid var(--border)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  fontSize: '1.4rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '.75rem',
                  borderBottom: '2px solid var(--copper)',
                }}
              >
                🍪 Politique de cookies
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite
                d&apos;un site web. Ce site utilise des cookies strictement nécessaires à son
                fonctionnement technique et, sous réserve de votre consentement, des cookies
                analytiques pour mesurer l&apos;audience et améliorer l&apos;expérience utilisateur.
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  fontSize: '1.05rem',
                  marginBottom: '.75rem',
                  marginTop: '1.5rem',
                }}
              >
                Types de cookies utilisés
              </h3>
              <ul style={{ color: 'var(--text-body)', lineHeight: 2, paddingLeft: '1.25rem' }}>
                <li>
                  <strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement
                  du site (session utilisateur, sécurité). Ils ne peuvent pas être désactivés.
                </li>
                <li>
                  <strong>Cookies analytiques :</strong> collectés via des outils d&apos;analyse d&apos;audience
                  (ex. : Google Analytics) pour comprendre comment les visiteurs utilisent le site.
                  Ces cookies ne sont déposés qu&apos;avec votre consentement.
                </li>
                <li>
                  <strong>Cookies de préférence :</strong> mémorisent vos préférences de navigation
                  (langue, région) pour personnaliser votre expérience.
                </li>
              </ul>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginTop: '1rem' }}>
                Vous pouvez à tout moment modifier vos préférences en matière de cookies via les
                paramètres de votre navigateur ou en nous contactant à{' '}
                <a
                  href="mailto:ateliers.haussmann@gmail.com"
                  style={{ color: 'var(--copper)', textDecoration: 'none' }}
                >
                  ateliers.haussmann@gmail.com
                </a>
                .
              </p>
            </div>

            {/* Limitation de responsabilité */}
            <div
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid var(--border)',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'var(--navy)',
                  fontSize: '1.4rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '.75rem',
                  borderBottom: '2px solid var(--copper)',
                }}
              >
                ⚖️ Limitation de responsabilité
              </h2>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Ateliers Haussmann s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, nous ne saurions garantir l&apos;exactitude, la précision
                ou l&apos;exhaustivité des informations mises à la disposition sur ce site. En conséquence,
                Ateliers Haussmann décline toute responsabilité pour les imprécisions, inexactitudes
                ou omissions portant sur les informations disponibles sur ce site.
              </p>
              <p style={{ color: 'var(--text-body)', lineHeight: 1.7 }}>
                Les informations présentes sur ce site, notamment concernant les montants des aides
                financières, sont données à titre indicatif et peuvent évoluer. Pour toute décision,
                nous vous recommandons de vous rapprocher directement de notre équipe ou des
                organismes compétents (ANAH, ADEME, maprimerenov.gouv.fr).
              </p>
            </div>

            {/* Droit applicable */}
            <div
              style={{
                background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-deep) 100%)',
                borderRadius: '12px',
                padding: '2rem',
                color: 'white',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  color: 'white',
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                }}
              >
                📜 Droit applicable &amp; juridiction compétente
              </h2>
              <p style={{ color: 'rgba(255,255,255,.85)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Les présentes mentions légales sont soumises au droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
              <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.85rem' }}>
                Dernière mise à jour : juin 2025
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/" className="btn btn-copper-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,.4)' }}>
                  ← Retour à l&apos;accueil
                </Link>
                <a
                  href="mailto:ateliers.haussmann@gmail.com"
                  className="btn btn-primary"
                >
                  Nous contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
