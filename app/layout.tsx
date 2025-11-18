import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aamir Enterprises s - Designing Ceilings that Define Spaces',
  description: 'Transform your spaces with Aamir Enterprises s. Premium false ceiling designs, POP work, PVC panels, and decorative lighting solutions that redefine interiors.',
  keywords: 'false ceiling, POP design, PVC panels, decorative lighting, interior design, ceiling contractors, gypsum ceiling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}