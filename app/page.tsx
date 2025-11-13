'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import TrainingsSection from '@/components/TrainingsSection';
import GallerySection from '@/components/GallerySection';
import MembershipSection from '@/components/MembershipSection';
import TempleSection from '@/components/TempleSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <main className="min-h-screen bg-black text-white">
        <Header />
        <HeroSection />
        <MissionSection />
        <TrainingsSection />
        <GallerySection />
        <MembershipSection />
        <TempleSection />
        <Footer />
      </main>
    </>
  );
}