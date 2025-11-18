import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import TrainingsSection from '@/components/services';
import GallerySection from '@/components/GallerySection';
import TempleSection from '@/components/TempleSection';
import Footer from '@/components/Footer';
import HomePageSchema from '@/components/schema/HomePageSchema';

// Dynamically import the LoadingAnimation component with SSR disabled
// This is because it uses client-side effects that aren't needed for initial render
const LoadingAnimation = dynamic(() => import('@/components/LoadingAnimation'), {
  ssr: false,
});

// This is a Server Component by default
export default function Home() {
  return (
    <>
      <HomePageSchema />
      <LoadingAnimation />
      <main className="min-h-screen bg-black text-white">
        <Header />
        <HeroSection />
        <MissionSection />
        <GallerySection />
        <TrainingsSection />
        <TempleSection />
        <Footer />
      </main>
    </>
  );
}