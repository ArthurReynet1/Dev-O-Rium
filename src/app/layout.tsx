import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dev-o-rium.vercel.app'),
  title: {
    default: 'Arthur Reynet — Développeur Fullstack React / .NET',
    template: '%s | Dev-O-Rium',
  },
  description:
    "Portfolio d'Arthur Reynet, développeur fullstack React/Next.js et .NET. Disponible pour missions freelance.",
  keywords: [
    'React',
    'Next.js',
    '.NET',
    'TypeScript',
    'Freelance',
    'Portfolio',
  ],
  authors: [{ name: 'Arthur Reynet' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dev-o-rium.vercel.app',
    title: 'Arthur Reynet — Dev-O-Rium',
    description: 'Portfolio fullstack React / .NET.',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
