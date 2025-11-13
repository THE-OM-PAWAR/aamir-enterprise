'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
    <section ref={sectionRef} className="py-20 bg-black relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-500 rounded-full"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* Minimal red accent line */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-px bg-red-500"></div>
          </motion.div>

          {/* Main statement - split into animated words */}
          <div className="space-y-4 mb-12">
            <motion.h2 
              className="text-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                FITNESS
              </motion.span>
              <motion.span 
                className="block text-white/30"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                FOR EVERYONE
              </motion.span>
            </motion.h2>
          </div>

          {/* Minimal description */}
          <motion.p 
            className="text-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Whether you're starting your journey or pushing your limits, 
            we provide the space and support you need to succeed.
          </motion.p>

          {/* Animated CTA with red accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <motion.button 
              className="group relative bg-red-500 text-white px-8 py-4 font-medium text-sm tracking-wider uppercase overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                Begin Journey
              </motion.span>
              
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Red accent dot */}
              <motion.div
                className="absolute top-1/2 right-3 w-1 h-1 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>

          {/* Subtle stats or indicators */}
          <motion.div 
            className="flex justify-center items-center gap-8 mt-16 text-white/30"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-red-500/50 rounded-full"></div>
              <span className="text-caption text-xs">500+ MEMBERS</span>
            </div>
            <div className="w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-red-500/50 rounded-full"></div>
              <span className="text-caption text-xs">24/7 ACCESS</span>
            </div>
            <div className="w-px h-4 bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-red-500/50 rounded-full"></div>
              <span className="text-caption text-xs">EXPERT TRAINERS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}