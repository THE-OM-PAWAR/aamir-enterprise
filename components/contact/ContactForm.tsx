'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppSend = () => {
    const whatsappNumber = '919399857669';
    const message = `Hi! I'm interested in Aamir POP work and false ceiling services in Bhopal.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mb-12">
        <h2 className="text-heading text-3xl md:text-4xl mb-4">
          Contact Aamir POP works
        </h2>
        <p className="text-body text-white/60">
          Get in touch with Aamir POP works for POP ceiling and false ceiling work in Bhopal. Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* WhatsApp Button for mobile/desktop */}
        <button
          type="button"
          onClick={handleWhatsAppSend}
          className="group flex items-center gap-2 bg-green-500/90 backdrop-blur-md px-3 py-2 rounded-full border border-green-400/30 hover:bg-green-500 transition-all duration-300 hover:scale-105 mb-2"
          aria-label="Contact us via WhatsApp"
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-medium">Send via WhatsApp</span>
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-caption text-white/50 mb-3">
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-caption text-white/50 mb-3">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
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
          <label htmlFor="phone" className="block text-caption text-white/50 mb-3">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-caption text-white/50 mb-3">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Tell us about your project requirements..."
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
  );
}
