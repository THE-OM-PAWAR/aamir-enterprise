import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aamir POP work Bhopal | POP Ceiling Bhopal | False Ceiling Contractor in Madhya Pradesh | Aamir Enterprises Bhopal | Aamir POP works',
  description: 'Aamir POP work Bhopal - Best POP ceiling and false ceiling contractor in Bhopal, Madhya Pradesh. Expert POP work, false ceiling installation, gypsum ceiling, and PVC panels for homes and buildings. Contact Aamir Enterprises S or Aamir POP works for premium ceiling solutions.',
  keywords: 'Aamir POP work Bhopal, POP ceiling Bhopal, false ceiling Bhopal, POP work Bhopal, false ceiling contractor Bhopal, POP ceiling Madhya Pradesh, false ceiling installation Bhopal, gypsum ceiling Bhopal, POP ceiling contractor MP, ceiling work Bhopal, best POP ceiling Bhopal, POP designer Bhopal, false ceiling service Bhopal, POP ceiling price Bhopal, Aamir Enterprises Bhopal, Aamir POP works',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) - Add your Google Analytics here if needed */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}