import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { GA_ID, GADS_ID, META_PIXEL_ID } from '@/lib/analytics';

const SITE_URL = 'https://ateliers-haussmann-3d.vercel.app';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'Ateliers Haussmann',
  description:
    'Artisan RGE certifié — Installation pompe à chaleur, ballon thermodynamique, solaire combiné et climatisation. Gestion complète des aides MaPrimeRénov\' et CEE.',
  url: SITE_URL,
  telephone: '+33180892458',
  email: 'ateliers.haussmann@gmail.com',
  image: `${SITE_URL}/images/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '19 rue Gambetta',
    addressLocality: 'Stains',
    postalCode: '93240',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.955,
    longitude: 2.383,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:30',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:30',
      closes: '12:30',
    },
  ],
  areaServed: { '@type': 'Country', name: 'France' },
  priceRange: '€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
  },
  sameAs: [SITE_URL],
};

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Ateliers Haussmann — Artisan RGE Certifié | Pompe à chaleur, Isolation, MaPrimeRénov\'',
  description: 'Artisan RGE certifié — Installation pompe à chaleur, isolation, VMC. On gère le dossier MaPrimeRénov\' et CEE pour vous. Jusqu\'à 70% d\'aides. Devis gratuit sur toute la France.',
  keywords: 'artisan RGE, pompe à chaleur, isolation, VMC, MaPrimeRénov, CEE, rénovation énergétique, France',
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    title: 'Ateliers Haussmann — Artisan RGE Certifié',
    description: 'Jusqu\'à 70% d\'aides pour vos travaux de rénovation énergétique. Devis gratuit.',
    url: 'https://ateliers-haussmann-3d.vercel.app',
    siteName: 'Ateliers Haussmann',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#1B2E22" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
            gtag('config', '${GADS_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <a href="#main" className="skip-link">Passer au contenu</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
