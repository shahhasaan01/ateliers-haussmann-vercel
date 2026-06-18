import Link from 'next/link';
import {
  IconPhone,
  IconMapPin,
  IconMail,
  IconClock,
  IconArrowRight,
} from '@/components/ServiceIcons';

const SERVICES = [
  { href: '/pompe-a-chaleur', label: 'Pompe à chaleur' },
  { href: '/ballon-thermodynamique', label: 'Ballon thermodynamique' },
  { href: '/isolation-interieure', label: 'Isolation intérieure' },
  { href: '/isolation-exterieure', label: 'Isolation extérieure' },
  { href: '/vmc', label: 'VMC' },
  { href: '/systeme-solaire-combine', label: 'Système solaire combiné' },
  { href: '/chaudiere-gaz', label: 'Chaudière à gaz' },
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
              <a
                href="tel:0180892458"
                className="btn btn-outline-white btn-lg"
              >
                <IconPhone style={{ width: 16, height: 16 }} />
                01 80 89 24 58
              </a>
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
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    className="logo-mark"
                    style={{
                      width: 36,
                      height: 36,
                      background: 'var(--terracotta)',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    >
                      <path d="M3 20h18M6 20V9l6-5 6 5v11" />
                      <path d="M9 20v-5h6v5" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="logo-name"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: 'white',
                        lineHeight: 1.2,
                      }}
                    >
                      Ateliers Haussmann
                    </div>
                    <div className="logo-tagline">Artisan RGE certifié</div>
                  </div>
                </Link>

                <p className="footer-brand-desc">
                  Rénovation énergétique certifiée RGE. Nous gérons votre dossier
                  MaPrimeRénov&apos; et CEE — jusqu&apos;à 70 % d&apos;aides.
                </p>

                <div className="footer-rge-row">
                  {['Quali PAC', 'Quali Bois', 'Quali Bat', 'Quali Sol'].map(
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
                  <a
                    href="tel:0180892458"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    01 80 89 24 58
                  </a>
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
                Stains · SIRET en cours
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
