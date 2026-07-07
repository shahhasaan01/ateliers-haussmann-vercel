const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-TSYW641PEE';
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || '';
const GADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || '';

export function gtag(...args) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
}

export function trackPhoneCall(source = 'unknown') {
  gtag('event', 'phone_call', {
    event_category: 'Contact',
    event_label: source,
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
  });

  if (GADS_ID && GADS_CONVERSION_LABEL) {
    gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
      event_callback: () => {},
    });
  }
}

export function trackLead(service = 'General') {
  gtag('event', 'generate_lead', {
    event_category: 'Contact Form',
    event_label: service,
    service,
    source_page: typeof window !== 'undefined' ? window.location.pathname : '',
  });

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

export { GA_ID, GADS_ID, GADS_CONVERSION_LABEL };
