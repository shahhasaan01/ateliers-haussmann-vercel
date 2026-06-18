import { Fraunces, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['500','600','700'], variable: '--font-display' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' });

export const metadata = {
  title: 'Ateliers Haussmann — Artisan RGE Certifié | Pompe à chaleur, Isolation, MaPrimeRénov\'',
  description: 'Artisan RGE certifié — Installation pompe à chaleur, isolation, VMC. On gère le dossier MaPrimeRénov\' et CEE pour vous. Jusqu\'à 70% d\'aides. Devis gratuit sur toute la France.',
  keywords: 'artisan RGE, pompe à chaleur, isolation, VMC, MaPrimeRénov, CEE, rénovation énergétique, France',
  openGraph: {
    title: 'Ateliers Haussmann — Artisan RGE Certifié',
    description: 'Jusqu\'à 70% d\'aides pour vos travaux de rénovation énergétique. Devis gratuit.',
    url: 'https://ateliers-haussmann.vercel.app',
    siteName: 'Ateliers Haussmann',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B2E22" />
      </head>
      <body>
        <a href="#main" className="skip-link">Passer au contenu</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
