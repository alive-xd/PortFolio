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
  title: 'Sushen Kumar | Cybersecurity Researcher & AI Security Engineer',
  description: 'Portfolio of Sushen Kumar (sushen.raw), a cybersecurity researcher and AI security engineer specializing in penetration testing, threat research, and secure software development.',
  keywords: [
    'sushen kumar',
    'sushen',
    'sushen.raw',
    'cybersecurity researcher',
    'security engineer',
    'ai security',
    'ethical hacker',
    'penetration tester',
    'security portfolio'
  ],
  openGraph: {
    title: 'Sushen Kumar | Cybersecurity Researcher & AI Security Engineer',
    description: 'Portfolio of Sushen Kumar (sushen.raw) — Cybersecurity Researcher, Ethical Hacker, and Software Engineer.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Person/Profile Schema to boost ranking for search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': 'Sushen Kumar',
    'url': 'https://sushen-kumar.vercel.app', // Updated to the custom domain
    'alternateName': ['sushen', 'sushen.raw'],
    'jobTitle': 'Cybersecurity Researcher & AI Security Engineer',
    'description': 'Sushen Kumar (sushen.raw) is a cybersecurity researcher, developer, and security engineer specializing in AI security, software engineering, and defensive operations.'
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
