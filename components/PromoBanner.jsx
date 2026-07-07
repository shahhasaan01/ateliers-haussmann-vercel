import Link from 'next/link';

export default function PromoBanner() {
  return (
    <div className="aide-banner">
      <div className="container">
        <div className="aide-banner-inner">
          <p className="aide-banner-text">
            <strong>Jusqu&apos;à 70 % d&apos;aides</strong> MaPrimeRénov&apos; &amp; CEE —{' '}
            Artisan RGE certifié sur toute la France
          </p>
          <Link href="/#contact" className="aide-banner-cta">
            Devis gratuit sous 24h →
          </Link>
        </div>
      </div>
    </div>
  );
}
