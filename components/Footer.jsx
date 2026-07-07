import Link from 'next/link';
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconClock,
  IconArrowRight,
} from '@/components/ServiceIcons';
import PhoneLink from '@/components/PhoneLink';

const SERVICES = [
  { href: '/pompe-a-chaleur', label: 'Pompe à chaleur' },
  { href: '/ballon-thermodynamique', label: 'Ballon thermodynamique' },
  { href: '/systeme-solaire-combine', label: 'Système solaire combiné' },
  { href: '/climatisation', label: 'Climatisation réversible' },
  { href: '/vmc', label: 'VMC' },
  { href: '/chaudiere-gaz', label: 'Chaudière à condensation' },
  { href: '/isolation-interieure', label: 'Isolation intérieure' },
  { href: '/isolation-exterieure', label: 'Isolation extérieure' },
  { href: '/renovation-globale', label: 'Rénovation globale' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Pre-footer CTA Band */}
      <div className="footer-cta-band">
        <div className="container">
          <div className="footer-cta-inner">
            <div>
              <p className="footer-cta-label">Artisan RGE certifié</p>
              <h2 className="footer-cta-title">
                Devis gratuit sous 24h
                <br />
                sans engagement
              </h2>
            </div>
            <div className="footer-cta-actions">
              <PhoneLink source="footer_cta" className="btn btn-outline-white btn-lg">
                <IconPhone style={{ width: 16, height: 16 }} />
                01 80 89 24 58
              </PhoneLink>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un devis
                <IconArrowRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              {/* Brand Column */}
              <div className="footer-brand">
                <Link
                  href="/"
                  className="site-logo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    marginBottom: '1.5rem',
                  }}
                >
                  <img
                    src="/images/logo.png"
                    alt="Ateliers Haussmann"
                    style={{ height: '45px', width: 'auto', display: 'block' }}
                  />
                </Link>

                <p className="footer-brand-desc">
                  Rénovation énergétique certifiée RGE. Nous gérons votre dossier
                  MaPrimeRénov&apos; et CEE — jusqu&apos;à 70 % d&apos;aides.
                </p>

                <div className="footer-rge-row">
                  {['Quali PAC', 'Quali Bois', 'Quali Ventilation', 'Quali Sol'].map(
                    (badge) => (
                      <span key={badge} className="footer-rge-badge">
                        ✓ {badge}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Services Column */}
              <div>
                <p className="footer-nav-title">Services</p>
                <ul className="footer-nav-list">
                  {SERVICES.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="footer-nav-link">
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Column */}
              <div>
                <p className="footer-nav-title">Informations</p>
                <ul className="footer-nav-list">
                  <li>
                    <Link
                      href="/aides-financement"
                      className="footer-nav-link"
                    >
                      Aides &amp; Financement
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="footer-nav-link">
                      Demander un devis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mentions-legales"
                      className="footer-nav-link"
                    >
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politique-de-confidentialite"
                      className="footer-nav-link"
                    >
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <p className="footer-nav-title">Contact</p>
                <div className="footer-contact-item">
                  <IconMapPin />
                  <span>
                    19 rue Gambetta
                    <br />
                    93240 Stains
                  </span>
                </div>
                <div className="footer-contact-item">
                  <IconPhone />
                  <PhoneLink
                    source="footer"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    01 80 89 24 58
                  </PhoneLink>
                </div>
                <div className="footer-contact-item">
                  <IconMail />
                  <a
                    href="mailto:ateliers.haussmann@gmail.com"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      wordBreak: 'break-all',
                    }}
                  >
                    ateliers.haussmann@gmail.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <IconClock />
                  <span>
                    Lun–Jeu : 8h30–18h
                    <br />
                    Ven : 8h30–12h30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-inner">
              <p className="footer-bottom-text">
                © {currentYear} Ateliers Haussmann · 19 rue Gambetta, 93240
                Stains · SIRET 99359069400028
              </p>
              <div className="footer-legal-links">
                <Link href="/mentions-legales" className="footer-legal-link">
                  Mentions légales
                </Link>
                <Link
                  href="/politique-de-confidentialite"
                  className="footer-legal-link"
                >
                  Confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

