import type { Metadata } from 'next';
import { Montserrat, Karla, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sushen Kumar | Cybersecurity Researcher & AI Security Engineer Portfolio',
  description: 'Sushen Kumar (sushen.pvt) is a cybersecurity researcher, ethical hacker, and software developer. Specializing in penetration testing, AI security, threat research, and platform engineering.',
  keywords: [
    'sushen kumar',
    'sushen',
    'sushen lpu',
    'sushen vanshika',
    'sushen hacker',
    'sushen bug bounty',
    'sushen banglore',
    'sushen ethical hacker',
    'vanshika negi sushen',
    'sushen.pvt',
    'sushen suman'
  ],
  openGraph: {
    title: 'Sushen Kumar | Cybersecurity Researcher & AI Security Engineer',
    description: 'Sushen Kumar (sushen.pvt) — Cybersecurity Researcher, Ethical Hacker, and Software Engineer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Person/Profile Schema to boost ranking for the specified keywords
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Sushen Kumar',
    'url': 'https://sushen-portfolio.vercel.app', // Template URL (will resolve dynamically on deploy)
    'alternateName': ['sushen', 'sushen.pvt', 'sushen suman', 'sushen vanshika', 'vanshika negi sushen'],
    'jobTitle': 'Cybersecurity Researcher & AI Security Engineer',
    'description': 'Sushen Kumar is a cybersecurity researcher, developer, and security engineer specializing in AI security, software engineering, and defensive operations.'
  };

  return (
    <html 
      lang="en" 
      className={`${montserrat.variable} ${karla.variable} ${jetbrainsMono.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', saved);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
