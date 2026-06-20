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
  title: 'Sushen Kumar | Cybersecurity Portfolio',
  description: 'Sushen Kumar — Cybersecurity Researcher & Penetration Tester. Specializing in offensive security, SOC analyst workflows, and security automation.',
  alternates: {
    canonical: 'https://sushen-kumar.vercel.app',
  },
  keywords: [
    'sushen kumar',
    'cybersecurity researcher',
    'SOC analyst',
    'penetration tester',
    'OSINT',
    'ethical hacker',
    'security automation',
    'AI security',
    'bangalore',
    'fresher cybersecurity',
    'bug bounty researcher',
    'bugcrowd',
    'TryHackMe'
  ],
  openGraph: {
    title: 'Sushen Kumar | Cybersecurity Portfolio',
    description: 'Sushen Kumar — Cybersecurity Researcher & Penetration Tester. Specializing in offensive security, SOC analyst workflows, and security automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushen Kumar | Cybersecurity Portfolio',
    description: 'Sushen Kumar — Cybersecurity Researcher & Penetration Tester. Specializing in offensive security, SOC analyst workflows, and security automation.',
  },
  verification: {
    google: 'SwAF9DsUXtpz96PNAOBCTzcWeC7s2FocZ9JL-C5jf44',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Unified Graph Schema (including Person, Organization, and WebPage structures)
  // to provide Google with rich metadata relationships, organization info, and citation signals (author, dates, etc.)
  const graphJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://sushen-kumar.vercel.app/#person',
        'name': 'Sushen Kumar',
        'url': 'https://sushen-kumar.vercel.app',
        'alternateName': ['sushen', 'sushen.raw', 'sushen.pvt'],
        'jobTitle': 'Cybersecurity Researcher, SOC Analyst, & Penetration Tester',
        'description': 'Sushen Kumar — Cybersecurity Researcher, SOC Analyst Track, and Penetration Tester based in Bangalore. Specialising in offensive security, OSINT tooling, digital forensics, and security automation.'
      },
      {
        '@type': 'Organization',
        '@id': 'https://sushen-kumar.vercel.app/#organization',
        'name': 'Sushen Kumar',
        'url': 'https://sushen-kumar.vercel.app',
        'logo': 'https://sushen-kumar.vercel.app/icon.svg',
        'description': 'Cybersecurity Research and Security Automation Engineering.',
        'founder': { '@id': 'https://sushen-kumar.vercel.app/#person' }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sushen-kumar.vercel.app/#webpage',
        'url': 'https://sushen-kumar.vercel.app',
        'name': 'Sushen Kumar | Cybersecurity Portfolio',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://sushen-kumar.vercel.app/#website',
          'url': 'https://sushen-kumar.vercel.app',
          'name': 'Sushen Kumar Portfolio'
        },
        'about': { '@id': 'https://sushen-kumar.vercel.app/#person' },
        'description': 'Sushen Kumar — Cybersecurity Researcher & Penetration Tester. Specializing in offensive security, SOC analyst workflows, and security automation.',
        'author': { '@id': 'https://sushen-kumar.vercel.app/#person' },
        'publisher': { '@id': 'https://sushen-kumar.vercel.app/#organization' },
        'datePublished': '2026-06-20T00:00:00+05:30',
        'dateModified': '2026-06-20T11:53:00+05:30'
      }
    ]
  };

  // FAQ Schema to support Google Rich snippets and Answer Engine Optimization (AEO)
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': "What is Sushen Kumar's area of expertise?",
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Sushen Kumar is a cybersecurity researcher specializing in offensive security, penetration testing, SOC analyst workflows, and security automation.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Sushen Kumar available for cybersecurity roles?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Sushen Kumar is graduating in August 2026 and is actively seeking entry-level SOC Analyst, Penetration Tester, or Security Engineer positions across India.'
        }
      }
    ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
