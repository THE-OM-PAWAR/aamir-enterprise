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

  const services = [
    {
      number: '01',
      title: 'PVC Ceiling',
      subtitle: 'Solutions',
      description: 'Durable and stylish PVC ceilings for homes, offices, and showrooms.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      number: '02',
      title: '3D Ceiling',
      subtitle: 'Designs',
      description: 'Eye-catching 3D ceiling work that adds depth and modern aesthetics to any space.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      number: '03',
      title: 'UV Marble Sheets',
      subtitle: 'Installation',
      description: 'Elegant UV marble sheets for walls and ceilings with a glossy, premium finish.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      number: '04',
      title: '2x2 Designer',
      subtitle: 'Panels',
      description: 'Modular 2x2 ceiling panels available in various patterns and finishes.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      number: '05',
      title: 'POP & Gypsum',
      subtitle: 'Ceiling Work',
      description: 'Smooth, customizable POP and gypsum designs for luxury interiors.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      number: '06',
      title: 'Wall & Ceiling',
      subtitle: 'Decor Panels',
      description: 'Innovative wall and ceiling coverings including 3D sheets and decorative textures.',
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ];


  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-black relative overflow-hidden" id="trainings">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-8 h-px bg-red-500"></div>
              <span className="text-caption text-white/40 text-xs uppercase tracking-wider">Our Services</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 
                className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight"
                style={{
                  fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="block text-white">Services</span>
                <span className="block text-white/20">Portfolio</span>
              </h2>
            </motion.div>
          </div>

          {/* Services - Unique Split Layout */}
          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const initialX = isEven ? -100 : 100;
              
              return (
                <motion.div
                  key={service.number}
                  className="relative group"
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3, margin: '-50px' }}
                  transition={{ 
                    duration: 1.1, 
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: { duration: 0.8 }
                  }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}>
                    {/* Text Content Side */}
                    <div className={`flex-1 w-full ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="space-y-6">
                        {/* Number */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ amount: 0.3 }}
                          transition={{ 
                            duration: 0.8, 
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.15
                          }}
                        >
                          <div
                            className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white/5 group-hover:text-red-500/10 transition-colors duration-500 leading-none"
                            style={{
                              fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                              lineHeight: 0.8,
                            }}
                          >
                            {service.number}
                          </div>
                        </motion.div>

                        {/* Title */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ amount: 0.3 }}
                          transition={{ 
                            duration: 0.9, 
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.2
                          }}
                        >
                          <h3 
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase leading-none tracking-tight text-white mb-3 group-hover:text-red-500 transition-colors duration-300"
                            style={{
                              fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {service.title}
                            <span className="block text-white/40 group-hover:text-white/60 transition-colors duration-300 text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
                              {service.subtitle}
                            </span>
                          </h3>
                        </motion.div>

                        {/* Description */}
                        <motion.p 
                          className="text-base md:text-lg text-white/60 font-light max-w-xl leading-relaxed group-hover:text-white/80 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ amount: 0.3 }}
                          transition={{ 
                            duration: 0.8, 
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.3
                          }}
                        >
                          {service.description}
                        </motion.p>

                        {/* Red Accent Line */}
                        <motion.div
                          className="h-px bg-red-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: '64px' }}
                          viewport={{ amount: 0.3 }}
                          transition={{ 
                            duration: 1, 
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: 0.4
                          }}
                        />
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full relative overflow-hidden">
                      <motion.div
                        className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden"
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ 
                          duration: 1, 
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: 0.2
                        }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </motion.div>
                      
                      {/* Decorative element */}
                      <motion.div
                        className="absolute -bottom-4 -right-4 w-24 h-24 border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Connecting line between items (except last) */}
                  {index < services.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute left-1/2 -bottom-12 -translate-x-1/2 w-px h-16 bg-white/5"
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: 64, opacity: 1 }}
                      viewport={{ amount: 0.3 }}
                      transition={{ 
                        duration: 1, 
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: 0.5
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

    </section>
  );
}