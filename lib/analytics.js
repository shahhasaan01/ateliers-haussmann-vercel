const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-TSYW641PEE';
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-18172764342';
const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || '';
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '979753618221841';

export function gtag(...args) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
}

export function fbq(...args) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(...args);
  }
}

export function trackPhoneCall(source = 'unknown') {
  gtag('event', 'phone_call', {
    event_category: 'Contact',
    event_label: source,
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
  });

  fbq('track', 'Contact', { source });

  if (GADS_ID && GADS_CONVERSION_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
      event_callback: () => {},
    });
  }
}

export function getMetaCookies() {
  if (typeof document === 'undefined') return { fbp: '', fbc: '' };

  const read = (name) => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : '';
  };

  return { fbp: read('_fbp'), fbc: read('_fbc') };
}

export function trackLead(service = 'General', eventId) {
  gtag('event', 'generate_lead', {
    event_category: 'Contact Form',
    event_label: service,
    service,
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
  });

  const leadOptions = eventId ? { eventID: eventId } : undefined;
  const submitOptions = eventId ? { eventID: `${eventId}-submit` } : undefined;

  fbq('track', 'Lead', { content_name: service }, leadOptions);
  fbq('track', 'SubmitApplication', { content_name: service }, submitOptions);

  if (GADS_ID && GADS_CONVERSION_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
      value: 1.0,
      currency: 'EUR',
    });
  }
}

export function trackCtaClick(label, destination) {
  gtag('event', 'cta_click', {
    event_category: 'CTA',
    event_label: label,
    destination,
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

export { GA_ID, GADS_ID, GADS_CONVERSION_LABEL, META_PIXEL_ID };
