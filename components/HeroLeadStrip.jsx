'use client';

import Link from 'next/link';
import { IconPhone } from '@/components/ServiceIcons';
import PhoneLink from '@/components/PhoneLink';
import { trackCtaClick } from '@/lib/analytics';

const TRUST_ITEMS = [
  { label: 'Artisan RGE', value: '4 certifications' },
  { label: 'Aides État', value: "Jusqu'à 70 %" },
  { label: 'Réponse', value: 'Devis 24h' },
];

export default function HeroLeadStrip() {
  return (
    <div className="hero-lead-strip">
      <div className="hero-lead-trust">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="hero-lead-trust-item">
            <span className="hero-lead-trust-value">{item.value}</span>
            <span className="hero-lead-trust-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="hero-lead-actions">
        <Link
          href="/#contact"
          className="btn btn-primary btn-sm hero-lead-cta"
          onClick={() => trackCtaClick('hero_devis', '/#contact')}
        >
          Devis gratuit
        </Link>
        <PhoneLink source="hero_strip" className="hero-lead-phone">
          <IconPhone style={{ width: 14, height: 14 }} />
          01 80 89 24 58
        </PhoneLink>
      </div>
    </div>
  );
}
