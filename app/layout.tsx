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
  description: 'Sushen Kumar — Cybersecurity Researcher, SOC Analyst Track, and Penetration Tester based in Bangalore. Specialising in offensive security, OSINT tooling, digital forensics, and security automation. Fresher open to remote and on-site roles across India.',
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
    title: 'Sushen Kumar | Cybersecurity Researcher & AI Security Engineer',
    description: 'Sushen Kumar — Cybersecurity Researcher, SOC Analyst Track, and Penetration Tester based in Bangalore. Specialising in offensive security, OSINT tooling, digital forensics, and security automation. Fresher open to remote and on-site roles across India.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sushen Kumar | Cybersecurity Researcher & AI Security Engineer',
    description: 'Sushen Kumar — Cybersecurity Researcher, SOC Analyst Track, and Penetration Tester based in Bangalore. Specialising in offensive security, OSINT tooling, digital forensics, and security automation. Fresher open to remote and on-site roles across India.',
  }
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
    'alternateName': ['sushen', 'sushen.raw', 'sushen.pvt'],
    'jobTitle': 'Cybersecurity Researcher, SOC Analyst, & Penetration Tester',
    'description': 'Sushen Kumar — Cybersecurity Researcher, SOC Analyst Track, and Penetration Tester based in Bangalore. Specialising in offensive security, OSINT tooling, digital forensics, and security automation.'
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
