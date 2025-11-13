import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gymnacity - Find Your Strength | Premium Gym & Fitness',
  description: 'Transform your body and mind at Gymnacity. Premium gym facilities, expert personal training, and fitness classes designed to help you achieve your goals.',
  keywords: 'gym, fitness, personal training, workout, strength training, group fitness',
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