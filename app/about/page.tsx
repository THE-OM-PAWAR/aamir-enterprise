import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutPageSchema from '@/components/schema/AboutPageSchema';

// Import these directly since we created them in this PR
import AboutHero from '@/components/about/AboutHero';
import AboutCompanyStory from '@/components/about/AboutCompanyStory';
import AboutFounder from '@/components/about/AboutFounder';
import AboutValues from '@/components/about/AboutValues';

// Server Component
export default function AboutPage() {
  const coreValues = [
    {
      title: "Quality Excellence",
      description: "We are committed to delivering the highest quality in every aspect of our work, from materials to craftsmanship."
    },
    {
      title: "Innovation",
      description: "We constantly explore new techniques, materials, and designs to provide cutting-edge ceiling solutions."
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical standards in all our interactions."
    },
    {
      title: "Customer Focus",
      description: "We prioritize understanding and meeting the unique needs and expectations of each client."
    },
    {
      title: "Teamwork",
      description: "We foster collaboration among our team members, partners, and clients to achieve the best results."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices in our operations and material selections."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <AboutPageSchema />
      <Header />
      
      <AboutHero />
      <AboutCompanyStory />
      <AboutFounder />
      <AboutValues values={coreValues} />
      
      <Footer />
    </main>
  );
}