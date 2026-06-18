// Icon components using SVG for consistent, sharp rendering
// Parisian design aesthetic - thin strokes, geometric precision

const defaultProps = {
  width: 24,
  height: 24,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconHeatPump(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <rect x="4" y="6" width="16" height="14" rx="2" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M12 9.5v7M9.5 13h5" />
      <path d="M7 6V4M17 6V4" />
    </svg>
  );
}

export function IconWaterHeater(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <ellipse cx="12" cy="14" rx="5" height="10" />
      <path d="M9 5h6M10 3h4" />
      <path d="M9 17c1-1.5 2-1.5 3 0s2 1.5 3 0" />
    </svg>
  );
}

export function IconInsulation(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M3 20h18M6 20V9l6-5 6 5v11" />
      <path d="M9 20v-6h6v6" />
      <path d="M6 9l6 4 6-4" strokeDasharray="2 3" />
    </svg>
  );
}

export function IconExterior(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <rect x="3" y="10" width="18" height="10" rx="1" />
      <path d="M12 3L3 10h18L12 3z" />
      <rect x="7" y="14" width="3.5" height="3.5" rx="0.5" />
      <rect x="13.5" y="14" width="3.5" height="3.5" rx="0.5" />
    </svg>
  );
}

export function IconVMC(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 5v2.5M12 16.5V19M5 12h2.5M16.5 12H19" />
      <path d="M6.8 6.8l1.8 1.8M15.4 15.4l1.8 1.8M6.8 17.2l1.8-1.8M15.4 8.6l1.8-1.8" />
    </svg>
  );
}

export function IconSolar(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </svg>
  );
}

export function IconBoiler(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <path d="M9 8h6M9 12h6" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconRenovation(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconMapPin(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function IconArrowLeft(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

export function IconX(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" {...defaultProps} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// Service icon mapping
export const SERVICE_ICONS = {
  'pompe-a-chaleur': IconHeatPump,
  'ballon-thermodynamique': IconWaterHeater,
  'isolation-interieure': IconInsulation,
  'isolation-exterieure': IconExterior,
  'vmc': IconVMC,
  'systeme-solaire-combine': IconSolar,
  'chaudiere-gaz': IconBoiler,
  'renovation-globale': IconRenovation,
};

export default SERVICE_ICONS;
