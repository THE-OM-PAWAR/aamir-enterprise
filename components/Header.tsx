'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <nav className="container-custom py-2">
          <div className="flex items-center justify-between">
            {/* Logo with home functionality */}
            <button
              onClick={scrollToTop}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={isScrolled ? "/logo-white.svg" : "/logo.svg"}
                alt="Aamir Enterprises S - POP Ceiling & False Ceiling Contractor in Bhopal, Madhya Pradesh"
                width={150}
                height={86}
                className="h-12 w-auto transition-opacity duration-300"
                priority
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a 
                    key={item.name}
                    href={item.href}
                    className={`text-sm transition-colors duration-300 relative group ${
                      isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`text-sm transition-colors duration-300 relative group ${
                      isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                    }`}
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center space-x-3">
              {/* CTA Button with red accent */}
              <div className="hidden md:block">
                <button className={`px-4 py-2 font-medium text-xs tracking-wider uppercase transition-all duration-300 relative overflow-hidden group ${
                  isScrolled 
                    ? 'bg-white text-black hover:bg-gray-100' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  <span className="relative z-10">Get Quote</span>
                  <div className="absolute top-0 right-0 w-1 h-full bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>

              {/* Mobile menu trigger */}
              <button
                className={`md:hidden p-2 rounded-full border transition-all duration-300 ${
                  isScrolled 
                    ? 'border-white/20 text-white hover:border-white/40' 
                    : 'border-black/20 text-black hover:border-black/40'
                }`}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-700 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Overlay background with animated gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-black/90 to-black/95 backdrop-blur-xl transition-opacity duration-700 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-medium"></div>
        </div>
        
        {/* Menu content */}
        <div 
          className="absolute inset-0 flex flex-col h-full w-full"
        >
          {/* Close button with animation */}
          <div 
            className={`absolute top-6 right-6 transition-all duration-700 delay-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full border border-white/10 text-white hover:border-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex flex-col h-full px-8 pt-20 pb-12 overflow-y-auto">
            {/* Logo animation */}
            <div className={`flex justify-center mb-12 transition-all duration-700 transform ${
              isMobileMenuOpen ? 'opacity-100 scale-50' : 'opacity-0 scale-90'
            }`}>
              <Image
                src="/logo-white.svg"
                alt="Logo"
                width={100}
                height={40}
                className="h-auto w-auto filter drop-shadow-lg"
                priority
              />
            </div>
            
            {/* Menu items with staggered animation */}
            <div className="flex flex-col items-start space-y-10">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <a 
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center space-x-3 text-2xl font-light tracking-wider text-white/90 hover:text-white transition-all duration-300 transform ${
                      isMobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-0 group-hover:w-5 h-[1px] bg-red-500/80 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center space-x-3 text-2xl font-light tracking-wider text-white/90 hover:text-white transition-all duration-300 transform ${
                      isMobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-0 group-hover:w-5 h-[1px] bg-red-500/80 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}