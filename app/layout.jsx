import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
