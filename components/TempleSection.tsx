'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TempleSection() {
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

  const stats = [
    { number: '500+', label: 'Projects' },
    { number: '15+', label: 'Years' },
    { number: '100%', label: 'Satisfaction' }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={isVisible ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 1.5, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="POP Ceiling and False Ceiling Design by Aamir Enterprises S in Bhopal, Madhya Pradesh"
          className="w-full h-full object-cover grayscale"
        />
        <motion.div 
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0.6 }}
          animate={isVisible ? { opacity: 0.8 } : { opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        {/* Red divider with animation */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-12 h-px bg-red-500/50"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto text-center">
          {/* Main heading with staggered animation */}
          <motion.h2 
            className="text-display text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              YOUR SPACE IS
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              YOUR <span className="text-white/40">CANVAS</span>
            </motion.span>
          </motion.h2>
          
          {/* Description with fade-up animation */}
          <motion.div 
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-body text-lg md:text-xl text-white/70 leading-relaxed">
              Best POP ceiling and false ceiling contractor in Bhopal, Madhya Pradesh. Our team of skilled craftsmen is dedicated to bringing your vision to life. Through expert POP work and false ceiling installation, we transform ordinary ceilings into extraordinary architectural features for homes and buildings across Bhopal and Madhya Pradesh.
            </p>
          </motion.div>

          {/* CTA and Stats with enhanced animations */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            {/* CTA Button with hover effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
            >
              <motion.button 
                className="bg-red-500 text-white px-8 py-4 font-medium text-sm tracking-wider uppercase hover:bg-red-600 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Free Quote</span>
                <motion.div 
                  className="absolute inset-0 bg-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
            
            {/* Stats with staggered animations and hover effects */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.4 + (index * 0.1),
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                >
                  <motion.div 
                    className="text-display text-2xl md:text-3xl text-white mb-1 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-1 h-1 bg-red-500 rounded-full"
                      animate={isVisible ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.span
                      whileHover={{ 
                        textShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
                      }}
                    >
                      {stat.number}
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="text-caption text-white/50 group-hover:text-white/70 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.label}
                  </motion.div>
                  
                  {/* Animated underline on hover */}
                  <motion.div
                    className="w-0 h-px bg-red-500 mx-auto mt-2 group-hover:w-full transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        {isVisible && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-500/30 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  opacity: 0
                }}
                animate={{ 
                  y: -50,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4 + Math.random() * 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Animated corner accents */}
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-red-500/20"
          initial={{ opacity: 0, scale: 0, rotate: -45 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-red-500/20"
          initial={{ opacity: 0, scale: 0, rotate: 45 }}
          animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 45 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        />
      </div>
    </section>
  );
}