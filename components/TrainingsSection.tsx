'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TrainingsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trainings = [
    {
      number: '01',
      title: 'PERSONAL',
      subtitle: 'TRAINING',
      description: 'One-on-one sessions tailored to your specific goals and fitness level'
    },
    {
      number: '02',
      title: 'GROUP',
      subtitle: 'FITNESS',
      description: 'High-energy group workouts that build community and motivation'
    },
    {
      number: '03',
      title: 'FUNCTIONAL',
      subtitle: 'TRAINING',
      description: 'Real-world movement patterns for everyday strength and mobility'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-black/80" id="trainings">
      <div className="container-custom">
        <motion.div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header - Creative Typography */}
          <div className="mb-12 md:mb-16">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-8 h-px bg-red-500"></div>
              <span className="text-caption text-white/40 text-xs">WHAT WE OFFER</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight"
              style={{
                fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                letterSpacing: '-0.02em',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-white">TRAININGS</span>
              <span className="block text-white/20">OFFER</span>
            </motion.h2>
          </div>

          {/* Training Items - Horizontal Layout */}
          <div className="space-y-6 md:space-y-8">
            {trainings.map((training, index) => (
              <motion.div
                key={training.number}
                className="group cursor-pointer border-b border-white/5 pb-6 md:pb-8 hover:border-red-500/20 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center justify-between">
                  {/* Left Side - Number & Title */}
                  <div className="flex items-center gap-6 md:gap-8">
                    {/* Number */}
                    <motion.div 
                      className="text-6xl md:text-7xl font-black text-white/10 group-hover:text-red-500/20 transition-colors duration-500"
                      style={{
                        fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                        lineHeight: 0.8,
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {training.number}
                    </motion.div>
                    
                    {/* Title & Description */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 
                          className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-none tracking-tight text-white group-hover:text-red-500 transition-colors duration-300"
                          style={{
                            fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {training.title}
                          <span className="block text-white/40 group-hover:text-white/60 transition-colors duration-300">
                            {training.subtitle}
                          </span>
                        </h3>
                      </div>
                      
                      <p className="text-sm md:text-base text-white/50 font-light max-w-md leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                        {training.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Arrow */}
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 border border-white/10 rounded-full flex items-center justify-center group-hover:border-red-500/30 group-hover:bg-red-500/5 transition-all duration-300 flex-shrink-0"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-4 h-4 md:w-5 md:h-5 border-r border-t border-white/30 rotate-45 group-hover:border-red-500/60 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-12 md:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="group bg-red-500 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-all duration-300 relative overflow-hidden"
              style={{
                fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                letterSpacing: '0.1em',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">EXPLORE ALL PROGRAMS</span>
              <motion.div
                className="absolute inset-0 bg-red-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}