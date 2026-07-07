'use client';

import Link from 'next/link';
import { IconPhone } from '@/components/ServiceIcons';
import { trackPhoneCall, trackCtaClick } from '@/lib/analytics';

export default function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta" aria-hidden={false}>
      <a
        href="tel:0180892458"
        className="sticky-mobile-cta-phone"
        onClick={() => trackPhoneCall('sticky_mobile')}
      >
        <IconPhone style={{ width: 18, height: 18 }} />
        Appeler
      </a>
      <Link
        href="/#contact"
        className="sticky-mobile-cta-devis"
        onClick={() => trackCtaClick('devis_gratuit', '/#contact')}
      >
        Devis gratuit
      </Link>
    </div>
  );
}
