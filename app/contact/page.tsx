'use client';

import { useState } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppSend = () => {
    const whatsappNumber = '919753337771';
    const message = `Hi! I'm interested in joining Gymnacity.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send to WhatsApp
    handleWhatsAppSend();
    // Handle form submission (log to page or send to backend)
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Hardamlala Chowk, AB Rd, Rau, Indore, Madhya Pradesh 453331']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 97533 37771']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@gymnacity.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 5AM - 11PM', 'Sat-Sun: 6AM - 10PM']
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white text-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-caption text-black/50 mb-6">
              GET IN TOUCH
            </div>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mb-8">
              CONTACT US
            </h1>
            <p className="text-body text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
              Ready to start your fitness journey? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <h2 className="text-heading text-3xl md:text-4xl mb-4">
                  Send us a message
                </h2>
                <p className="text-body text-white/60">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* WhatsApp Button for mobile/desktop */}
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="group flex items-center gap-2 bg-green-500/90 backdrop-blur-md px-3 py-2 rounded-full border border-green-400/30 hover:bg-green-500 transition-all duration-300 hover:scale-105 mb-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white text-xs font-medium">Send via WhatsApp</span>
                </button>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-caption text-white/50 mb-3">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-caption text-white/50 mb-3">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-caption text-white/50 mb-3">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-caption text-white/50 mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your fitness goals..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group flex items-center gap-4 bg-white text-black px-8 py-4 font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SEND MESSAGE
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-heading text-3xl md:text-4xl mb-4">
                  Get in touch
                </h2>
                <p className="text-body text-white/60">
                  Visit us at our location or reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={20} className="text-white/70" />
                    </div>
                    <div>
                      <h3 className="text-caption text-white/50 mb-2">
                        {info.title.toUpperCase()}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-body text-white/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden relative"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3682.43673772463!2d75.8142281!3d22.6374996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fbe8bfd81fe7%3A0xe32bb56403393ac9!2sGYMNACITY%20The%20Body%20Technician!5e0!3m2!1sen!2sin!4v1750163177735!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}