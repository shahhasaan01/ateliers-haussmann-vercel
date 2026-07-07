'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IconPhone } from '@/components/ServiceIcons';
import PhoneLink from '@/components/PhoneLink';

const MOBILE_SERVICES = [
  { href: '/pompe-a-chaleur', label: 'Pompe à chaleur' },
  { href: '/ballon-thermodynamique', label: 'Ballon thermodynamique' },
  { href: '/systeme-solaire-combine', label: 'Système solaire combiné' },
  { href: '/climatisation', label: 'Climatisation réversible' },
];

const SERVICES = [
  ...MOBILE_SERVICES,
  { href: '/vmc', label: 'VMC' },
  { href: '/chaudiere-gaz', label: 'Chaudière à condensation' },
  { href: '/isolation-interieure', label: 'Isolation intérieure' },
  { href: '/isolation-exterieure', label: 'Isolation extérieure' },
  { href: '/renovation-globale', label: 'Rénovation globale' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY.current && y > 300);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const headerStyle = {
    transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
  };

  const headerClasses = `site-header ${scrolled ? 'scrolled' : ''}`;

  return (
    <>
      {/* Main Header */}
      <header className={headerClasses} style={headerStyle}>
        <div className="container--wide">
          <div className="header-inner">
            {/* Logo */}
            <Link href="/" className="site-logo">
              <img
                src="/images/logo.png"
                alt="Ateliers Haussmann"
                style={{ height: '45px', width: 'auto', display: 'block' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="main-nav">
              <Link href="/" className="nav-link">
                Accueil
              </Link>
              <div className="nav-dropdown">
                <span className="nav-link" style={{ cursor: 'default' }}>
                  Services
                </span>
                <div className="dropdown-menu">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="dropdown-item"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/aides-financement" className="nav-link">
                Aides &amp; Financement
              </Link>
              <Link href="/#contact" className="nav-link">
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="header-cta">
              <PhoneLink source="header" className="header-phone">
                <IconPhone style={{ width: 14, height: 14 }} />
                01 80 89 24 58
              </PhoneLink>
              <Link href="/#contact" className="btn btn-primary btn-sm">
                Devis gratuit
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`menu-toggle ${mobileOpen ? 'active' : ''}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <span
            className="logo-name"
            style={{ color: 'white', fontSize: '1.125rem' }}
          >
            Ateliers Haussmann
          </span>
          <button
            className="menu-toggle active"
            onClick={() => setMobileOpen(false)}
            aria-label="Fermer"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <Link
            href="/"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Accueil
          </Link>
          <div
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '0.5rem',
            }}
          >
            Services
          </div>
          {MOBILE_SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="mobile-nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {service.label}
            </Link>
          ))}
          <Link
            href="/aides-financement"
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Aides &amp; Financement
          </Link>
        </nav>

        <div style={{ marginTop: '2rem', display: 'grid', gap: '0.75rem' }}>
          <PhoneLink
            source="mobile_nav"
            className="btn btn-outline-white btn-lg"
            style={{ justifyContent: 'center' }}
          >
            <IconPhone style={{ width: 16, height: 16 }} />
            01 80 89 24 58
          </PhoneLink>
          <Link
            href="/#contact"
            className="btn btn-primary btn-lg"
            style={{ justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </>
  );
}
