"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, Instagram, Linkedin, Globe, Mail, Home, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 text-black relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Bold Statement */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight mb-6"
                style={{
                  fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                  letterSpacing: '-0.02em',
                  lineHeight: 0.9,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                READY TO TRANSFORM YOUR SPACE?<br />
                <span className="text-gray-800">LET'S CREATE MAGIC!</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 text-lg max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Experience premium ceiling solutions with Aamir Enterprises.
                Expert craftsmanship, innovative designs, and quality materials await.
              </motion.p>
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button 
                  className="bg-red-500 text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-red-600 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                    letterSpacing: '0.1em',
                  }}
                >
                  <span className="relative z-10">GET QUOTE</span>
                  <motion.div
                    className="absolute inset-0 bg-red-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Navigation & Info */}
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            {/* Navigation */}
            <div>
              <motion.h3 
                className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6"
                style={{ letterSpacing: '0.2em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                SITEMAP
              </motion.h3>
              <nav className="space-y-4">
                {[
                  { href: '/', label: 'HOME', isLink : true},
                  { href: '/#trainings', label: 'SERVICES' },
                  { href: '/#gallery', label: 'GALLERY' },
                  { href: '/contact', label: 'CONTACT', isLink: true },
                ].map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {link.isLink ? (
                      <Link 
                        href={link.href}
                        className="block text-xl font-bold uppercase tracking-wide text-black hover:text-red-500 transition-colors duration-300 group"
                        style={{
                          fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                          letterSpacing: '0.05em',
                        }}
                      >
                        <span className="relative">
                          {link.label}
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300"
                          />
                        </span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="block text-xl font-bold uppercase tracking-wide text-black hover:text-red-500 transition-colors duration-300 group text-left"
                        style={{
                          fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                          letterSpacing: '0.05em',
                        }}
                      >
                        <span className="relative">
                          {link.label}
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-red-500 w-0 group-hover:w-full transition-all duration-300"
                          />
                        </span>
                      </button>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <motion.h3 
                className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6"
                style={{ letterSpacing: '0.2em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                CONNECT
              </motion.h3>
              <motion.div 
                className="flex gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: Instagram, href: 'https://www.instagram.com/aamirenterprises', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Globe, href: '#', label: 'Website' },
                  { icon: Mail, href: 'mailto:info@aamirenterprises.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
              {/* Location & Contact */}
              <motion.div
                className="space-y-2 text-base text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-2">
                  <Home className="w-5 h-5 mt-0.5 text-red-500" />
                  <a href="https://maps.app.goo.gl/66UsYoJdUnmzBKhr7" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 underline">
                    MP Nagr Zone-2, Bhopal, Madhya Pradesh 462011
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-500" />
                  <a href="tel:919399857669" className="hover:text-red-500 underline">+91 93998 57669</a>
                  <a href="tel:9199713046238" className="hover:text-red-500 underline">+91 99713 046238</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            {/* Logo & Copyright */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button 
                onClick={scrollToTop} 
                className="group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/logo.svg"
                  alt="AAMIR ENTERPRISES"
                  width={200}
                  height={96}
                  className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
                />
              </motion.button>

              <motion.p 
                className="text-xs font-medium text-gray-600 uppercase tracking-wider text-center md:text-left"
                style={{ letterSpacing: '0.1em' }}
              >
                AAMIR ENTERPRISES © {currentYear}
              </motion.p>
            </motion.div>

            {/* Credits */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="#"
                className="text-xs font-medium text-gray-500 hover:text-red-500 transition-colors duration-300 uppercase tracking-wider"
                style={{ letterSpacing: '0.1em' }}
              >
                INFOS & CREDITS
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <motion.div
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <text x="100" y="105" textAnchor="middle" className="text-2xl font-black" fill="currentColor">AE</text>
          </svg>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;