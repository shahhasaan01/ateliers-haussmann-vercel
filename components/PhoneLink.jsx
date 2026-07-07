'use client';

import { trackPhoneCall } from '@/lib/analytics';

export default function PhoneLink({ source = 'link', className, children, style }) {
  return (
    <a
      href="tel:0180892458"
      className={className}
      style={style}
      onClick={() => trackPhoneCall(source)}
    >
      {children}
    </a>
  );
}
