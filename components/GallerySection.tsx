'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

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

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'classes', label: 'Classes' },
    { id: 'facilities', label: 'Facilities' }
  ];

  const galleryItems = [
    {
      id: 11,
      category: 'facilities',
      type: 'image',
      src: '/gallery01.jpeg',
      title: 'PVC Fall Ceiling',
      description: 'A layered PVC ceiling with warm wooden accents and LED strip lighting..'
    },
    {
      id: 12,
      category: 'facilities',
      type: 'image',
      src: '/gallery2.jpeg',
      title: 'Minimal Geometric Ceiling',
      description: 'A clean white ceiling featuring sharp black geometric border lines.'
    },
    {
      id: 13,
      category: 'facilities',
      type: 'image',
      src: '/gallery3.jpeg',
      title: 'Wooden Panel Ceiling',
      description: 'A stylish ceiling with wooden panels and artistic CNC lighting patterns.'
    },
    {
      id: 14,
      category: 'facilities',
      type: 'image',
      src: '/gallery4.jpeg',
      title: 'Jali Ceiling',
      description: 'A modern ceiling with soft recessed lighting and elegant box-shaped patterns.'
    },
    {
      id: 15,
      category: 'facilities',
      type: 'image',
      src: '/gallery5.jpeg',
      title: 'Designer panels Ceiling',
      description: 'A bold ceiling design with layered geometric shapes illuminated by blue LED lighting..'
    },
    {
      id: 16,
      category: 'facilities',
      type: 'image',
      src: '/gallery6.jpeg',
      title: 'louvers wall design',
      description: 'A minimal ceiling with warm vertical LED strips enhancing the modern bedroom backdrop.'
    },
    {
      id: 17,
      category: 'facilities',
      type: 'image',
      src: '/gallery7.jpeg',
      title: 'Linear strip ceiling',
      description: 'A sleek false ceiling featuring artistic linear LED patterns for a premium living room look.'
    },
    {
      id: 18,
      category: 'facilities',
      type: 'image',
      src: '/gallery12.jpeg',
      title: 'MDF Ceiling Design',
      description: 'Premium MDF ceiling with contemporary patterns and integrated lighting solutions.'
    },
    {
      id: 19,
      category: 'facilities',
      type: 'image',
      src: '/gallery13.jpeg',
      title: 'Modern MDF Ceiling',
      description: 'Sleek MDF ceiling design featuring clean lines and sophisticated finish.'
    },
    {
      id: 20,
      category: 'facilities',
      type: 'image',
      src: '/gallery14.jpeg',
      title: 'MDF Lift Design',
      description: 'Elegant MDF lift interior with modern paneling and ambient lighting.'
    },
    {
      id: 21,
      category: 'facilities',
      type: 'image',
      src: '/gallery15.jpeg',
      title: 'Acrylic 3D Ceiling Design',
      description: 'Stunning acrylic 3D ceiling with dynamic patterns and LED backlighting.'
    },
    {
      id: 22,
      category: 'facilities',
      type: 'image',
      src: '/gallery16.jpeg',
      title: 'PVC Louvers',
      description: 'Functional PVC louver system with excellent ventilation and aesthetic appeal.'
    },
    {
      id: 23,
      category: 'facilities',
      type: 'image',
      src: '/gallery17.jpeg',
      title: 'Profile Lights',
      description: 'Architectural profile lighting creating dramatic ceiling illumination effects.'
    },
    {
      id: 24,
      category: 'facilities',
      type: 'image',
      src: '/gallery18.jpeg',
      title: 'ACP Sheets Design',
      description: 'Durable ACP sheet installation with weather-resistant and fire-retardant properties.'
    },
    {
      id: 25,
      category: 'facilities',
      type: 'image',
      src: '/gallery19.jpeg',
      title: 'PVC Panels',
      description: 'Waterproof PVC panels perfect for moisture-prone areas with easy maintenance.'
    },
    {
      id: 26,
      category: 'facilities',
      type: 'image',
      src: '/gallery20.jpeg',
      title: '2x8 Wall Panels',
      description: 'Decorative 2x8 wall panels adding texture and depth to interior spaces.'
    },
    {
      id: 27,
      category: 'facilities',
      type: 'image',
      src: '/gallery21.jpeg',
      title: 'PVC Beadings',
      description: 'Precision PVC beadings providing clean finishing touches to ceiling edges.'
    },
    {
      id: 28,
      category: 'facilities',
      type: 'image',
      src: '/gallery22.jpeg',
      title: 'POP False Ceiling',
      description: 'Classic POP false ceiling with smooth finish and customizable design options.'
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openFullscreen = (index: number) => {
    setCurrentImageIndex(index);
    setIsFullscreenOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreenOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev === 0 ? filteredItems.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === filteredItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigateImage('next');
    }
    if (isRightSwipe) {
      navigateImage('prev');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreenOpen) return;
      
      if (e.key === 'Escape') {
        closeFullscreen();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth > 768 
        ? (container.clientWidth > 1024 ? 360 : 320)
        : 280;
      const gap = container.clientWidth > 768 ? 24 : 16;
      const scrollAmount = cardWidth + gap;
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-black relative overflow-hidden" id="gallery">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-8 h-px bg-red-500"></div>
              <span className="text-caption text-white/40 text-xs uppercase tracking-wider">POP Ceiling & False Ceiling Gallery - Bhopal Projects</span>
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
                <span className="block text-white">Gallery</span>
                <span className="block text-white/20">Portfolio</span>
              </h2>
            </motion.div>
          </div>

          {/* Gallery Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Horizontal Scrolling Gallery */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group cursor-pointer flex-shrink-0 w-[280px] md:w-[320px] lg:w-[360px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openFullscreen(index)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg md:rounded-xl bg-black border border-white/5 group-hover:border-red-500/20 transition-all duration-500">
                    <img
                      src={item.src}
                      alt={`${item.title} - ${item.description} by Aamir Enterprises S, POP Ceiling & False Ceiling Contractor in Bhopal, Madhya Pradesh`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Video Play Button */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="w-12 h-12 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <motion.div 
                        className="flex items-end justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-1">
                          <h3 
                            className="text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-red-500 transition-colors duration-300"
                            style={{
                              fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                              letterSpacing: '0.02em',
                            }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                            {item.description}
                          </p>
                          
                          {/* Red Accent Line */}
                          <motion.div
                            className="mt-3 w-8 h-px bg-red-500 group-hover:w-12 transition-all duration-300"
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <motion.div 
                          className="w-8 h-8 md:w-10 md:h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10 transition-all duration-300 ml-4 flex-shrink-0"
                          whileHover={{ rotate: 45, scale: 1.1 }}
                        >
                          <ArrowRight size={14} className="text-white/70 group-hover:text-red-500 transition-colors duration-300" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {isFullscreenOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeFullscreen}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeFullscreen();
              }}
              className="absolute top-4 right-4 w-12 h-12 bg-black/70 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300 z-[100]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300 z-[100]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/70 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-300 z-[100]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={currentImageIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-16 md:p-20"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={filteredItems[currentImageIndex]?.src}
                alt={`${filteredItems[currentImageIndex]?.title} - ${filteredItems[currentImageIndex]?.description}`}
                className="max-w-full max-h-full object-contain z-10"
                style={{ objectFit: 'contain' }}
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 z-[90]">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {filteredItems[currentImageIndex]?.title}
                </h3>
                <p className="text-sm text-white/70">
                  {filteredItems[currentImageIndex]?.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-white/50">
                    {currentImageIndex + 1} of {filteredItems.length}
                  </span>
                  <div className="w-8 h-px bg-red-500" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}