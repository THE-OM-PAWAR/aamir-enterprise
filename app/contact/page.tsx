import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageSchema from '@/components/schema/ContactPageSchema';

// Import these directly since we created them in this PR
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

// Server Component
export default function ContactPage() {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Location',
      details: ['Sonia Gandhi colony, House no 1, Gali no 1, Ashoka Garden, Bhopal, Madhya Pradesh 453331']
    },
    {
      icon: 'Phone',
      title: 'Phone',
      details: ['+91 93998 57669']
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['aamirbhai12245@gmail.com']
    },
    {
      icon: 'Clock',
      title: 'Hours',
      details: ['Mon-Sat: 9AM - 7PM', 'Sunday: By Appointment']
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <ContactPageSchema />
      <Header />
      
      <ContactHero />
      
      <section className="py-24 bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ContactForm />
            <ContactInfo contactInfo={contactInfo} />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}