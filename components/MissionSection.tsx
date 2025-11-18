'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-black relative overflow-hidden" id="about">
      {/* Minimal animated background element */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-red-500 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* Minimal red accent line */}
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 32 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px bg-red-500"></div>
          </motion.div>

          {/* Main statement */}
          <div className="mb-6">
            <motion.h2 
              className="text-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                DESIGN
              </motion.span>
              <motion.span
                className="block text-white/30"
                initial={{ opacity: 0, x: 10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                FOR EVERY SPACE
              </motion.span>
            </motion.h2>
          </div>

          {/* Minimal description */}
          <motion.p 
            className="text-body text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Best POP ceiling and false ceiling contractor in Bhopal, Madhya Pradesh. From residential homes to commercial buildings, we specialize in POP work and false ceiling installation that enhances aesthetics and functionality.
          </motion.p>

          {/* Minimal founder mention */}
          <motion.div
            className="inline-flex items-center mb-10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <motion.div 
              className="relative"
              initial={{ scale: 0.8 }}
              animate={isVisible ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <Image 
                  src="/gallery4.jpeg"
                  alt="Aamir Khan"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <div className="h-px w-6 bg-white/10 mx-2"></div>
            
            <motion.a
              href="/about"
              className="text-xs uppercase tracking-wider text-white/50 hover:text-red-500 transition-colors duration-300 flex items-center gap-1 group"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              <span>By Aamir Khan</span>
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >→</motion.span>
            </motion.a>
          </motion.div>

          {/* Minimal CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              href="/contact"
              className="bg-red-500 text-white px-6 py-3 font-medium text-sm tracking-wider uppercase inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>

          {/* Compact stats */}
          <motion.div 
            className="flex justify-center items-center gap-6 mt-8 text-white/30"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-0.5 h-0.5 bg-red-500/50 rounded-full"></div>
              <span className="text-caption text-xs">500+ PROJECTS</span>
            </div>
            <div className="w-px h-3 bg-white/10"></div>
            <div className="flex items-center gap-1.5">
              <div className="w-0.5 h-0.5 bg-red-500/50 rounded-full"></div>
              <span className="text-caption text-xs">15+ YEARS</span>
            </div>
            <div className="w-px h-3 bg-white/10"></div>
            <div className="flex items-center gap-1.5">
              <div className="w-0.5 h-0.5 bg-red-500/50 rounded-full"></div>
              <span className="text-caption text-xs">EXPERT CRAFTSMEN</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}