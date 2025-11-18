'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
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
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#trainings' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Packages', href: '/#membership' },
    { name: 'Contact', href: '/contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
              alt="AAMIR ENTERPRISES"
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

            <div>
            
            {/* CTA Button with red accent */}
            <button className={`px-4 py-2 font-medium text-xs tracking-wider uppercase transition-all duration-300 relative overflow-hidden group ${
              isScrolled 
                ? 'bg-white text-black hover:bg-gray-100' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              <span className="relative z-10">Get Quote</span>
              <div className="absolute top-0 right-0 w-1 h-full bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t transition-colors duration-300 ${
            isScrolled ? 'border-white/10' : 'border-black/10'
          }`}>
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a 
                    key={item.name}
                    href={item.href}
                    className={`text-sm transition-colors duration-300 ${
                      isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className={`text-sm transition-colors duration-300 ${
                      isScrolled ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              <button className={`w-fit px-4 py-2 font-medium text-xs tracking-wider uppercase transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}