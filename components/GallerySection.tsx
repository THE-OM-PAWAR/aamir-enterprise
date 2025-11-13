'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
      src: '/Screenshot 2025-06-16 220645.png',
      title: 'Corner Gym Art',
      description: 'Corner view with graffiti and gym equipment.'
    },
    {
      id: 12,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220615.png',
      title: 'Spacious Gym Floor',
      description: 'Open gym floor with equipment and stairs.'
    },
    {
      id: 13,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220544.png',
      title: 'Wooden Floor Studio',
      description: 'Studio area with wooden flooring and mirrors.'
    },
    {
      id: 14,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220523.png',
      title: 'Strength Training Zone',
      description: 'Strength training area with benches and weights.'
    },
    {
      id: 15,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220504.png',
      title: 'Gym Floor and Stairs',
      description: 'View of gym floor and staircase.'
    },
    {
      id: 16,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220440.png',
      title: 'Busy Gym Session',
      description: 'Multiple people working out in the gym.'
    },
    {
      id: 17,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220405.png',
      title: 'Studio and Monkey Bars',
      description: 'Studio with monkey bars and lighting.'
    },
    {
      id: 18,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220351.png',
      title: 'Dumbbell Rack',
      description: 'Dumbbell rack and benches in the gym.'
    },
    {
      id: 19,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220305.png',
      title: 'Gym Exterior',
      description: 'Night view of the gym building.'
    }, {
      id: 9,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220757.png',
      title: 'Cardio and Treadmills',
      description: 'Modern treadmills with a city view.'
    },
    {
      id: 10,
      category: 'facilities',
      type: 'image',
      src: '/Screenshot 2025-06-16 220746.png',
      title: 'Artistic Wall and Leg Press',
      description: 'Leg press machine with vibrant wall art.'
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-zinc-950" id="gallery">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                <span className="text-caption text-white/50">OUR SPACE</span>
                <div className="w-1 h-1 bg-red-500 rounded-full"></div>
              </div>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-white">
                GALLERY
              </h2>
            </div>

            {/* Category Filter */}
            {/* <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-2 text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-red-500 text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div> */}
          </div>

          {/* Scroll Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300"
              >
                <ChevronLeft size={16} className="text-white/70" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300"
              >
                <ChevronRight size={16} className="text-white/70" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer flex-shrink-0 w-72"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 hover:border-red-500/20 transition-all duration-500">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  
                  {/* Video Play Button */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-500/80 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-heading text-base text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-caption text-white/60 text-xs">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="w-6 h-6 border border-red-500/30 rounded-full flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10 transition-all duration-300">
                        <ArrowRight size={12} className="text-white/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom scrollbar hide styles */}
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}