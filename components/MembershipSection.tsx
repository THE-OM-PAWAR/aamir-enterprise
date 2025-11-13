'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MembershipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const memberships = [
    {
      title: 'Basic',
      price: 'Starting',
      period: 'at ₹45/sq.ft',
      description: 'Perfect for simple spaces',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Standard POP designs',
        'Basic false ceiling',
        'Standard lighting',
        '1-year warranty'
      ]
    },
    {
      title: 'Premium',
      price: 'Starting',
      period: 'at ₹75/sq.ft',
      description: 'Most popular choice',
      icon: Zap,
      color: 'from-orange-500 to-amber-500',
      features: [
        'All Basic features',
        'Designer POP patterns',
        'Premium lighting fixtures',
        'PVC panel options',
        '2-year warranty'
      ],
      popular: true
    },
    {
      title: 'Elite',
      price: 'Starting',
      period: 'at ₹120/sq.ft',
      description: 'Ultimate luxury experience',
      icon: Crown,
      color: 'from-red-500 to-orange-600',
      features: [
        'All Premium features',
        'Custom 3D designs',
        'Premium materials',
        'Smart lighting systems',
        '5-year warranty'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden" id="membership">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.div 
              className="text-caption text-white/50 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Choose Your Package
            </motion.div>
            <motion.h2 
              className="text-display text-4xl md:text-5xl lg:text-6xl text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              PACKAGES
            </motion.h2>
            <motion.p 
              className="text-body text-lg text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Select the package that best suits your space and design requirements
            </motion.p>
          </div>

          {/* Membership cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {memberships.map((membership, index) => {
                const IconComponent = membership.icon;
                const isHovered = hoveredCard === index;
                
                return (
                  <motion.div 
                    key={membership.title}
                    className={`relative group transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {/* Animated border gradient */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${membership.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                    
                    {/* Card content */}
                    <div className={`relative rounded-lg overflow-hidden transition-all duration-500 ${
                      membership.popular 
                        ? 'bg-white text-black transform group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50' 
                        : 'bg-zinc-950 text-white border border-white/10 group-hover:border-white/30 group-hover:bg-gradient-to-br group-hover:from-zinc-950 group-hover:to-zinc-900'
                    }`}>
                      
                      {/* Popular badge with enhanced animation */}
                      {membership.popular && (
                        <motion.div 
                          className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                          animate={isHovered ? { scale: 1.1, rotate: [0, -2, 2, 0] } : { scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-caption rounded-full shadow-lg">
                            <motion.span
                              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                              transition={{ duration: 0.2 }}
                            >
                              ⭐ Most Popular
                            </motion.span>
                          </div>
                        </motion.div>
                      )}

                      {/* Floating icon */}
                      <motion.div 
                        className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center ${
                          membership.popular ? 'bg-black/10' : 'bg-white/10'
                        }`}
                        animate={isHovered ? { 
                          rotate: 360,
                          scale: 1.2,
                          background: `linear-gradient(135deg, ${membership.color.split(' ')[1]}, ${membership.color.split(' ')[3]})`
                        } : { 
                          rotate: 0,
                          scale: 1 
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <IconComponent 
                          size={20} 
                          className={`${membership.popular ? 'text-black/70' : 'text-white/70'} ${isHovered ? 'text-white' : ''}`} 
                        />
                      </motion.div>

                      <div className="p-8 lg:p-10 relative">
                        {/* Header with enhanced animations */}
                        <div className="mb-8">
                          <motion.h3 
                            className="text-heading text-2xl mb-2"
                            animate={isHovered ? { scale: 1.05, x: 5 } : { scale: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {membership.title}
                          </motion.h3>
                          <motion.p 
                            className={`text-body text-sm ${
                              membership.popular ? 'text-black/60' : 'text-white/60'
                            }`}
                            animate={isHovered ? { opacity: 0.8, x: 5 } : { opacity: 0.6, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {membership.description}
                          </motion.p>
                        </div>

                        {/* Price with dramatic hover effect */}
                        <div className="mb-8 relative">
                          <motion.div 
                            className="flex items-baseline gap-1"
                            animate={isHovered ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                          >
                            <span className="text-display text-4xl lg:text-5xl relative">
                              {membership.price}
                              {/* Animated underline */}
                              <motion.div
                                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${membership.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={isHovered ? { width: '100%' } : { width: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                              />
                            </span>
                            <span className={`text-body text-sm ${
                              membership.popular ? 'text-black/60' : 'text-white/60'
                            }`}>
                              {membership.period}
                            </span>
                          </motion.div>
                        </div>

                        {/* Features with staggered animations */}
                        <div className="mb-10">
                          <ul className="space-y-4">
                            {membership.features.map((feature, featureIndex) => (
                              <motion.li 
                                key={feature} 
                                className="flex items-start gap-3"
                                animate={isHovered ? { x: 10, scale: 1.02 } : { x: 0, scale: 1 }}
                                transition={{ 
                                  duration: 0.3, 
                                  delay: featureIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                              >
                                <motion.div
                                  animate={isHovered ? { 
                                    rotate: 360,
                                    scale: 1.2,
                                    background: `linear-gradient(135deg, ${membership.color.split(' ')[1]}, ${membership.color.split(' ')[3]})`
                                  } : { 
                                    rotate: 0,
                                    scale: 1 
                                  }}
                                  transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                                >
                                  <Check 
                                    size={12} 
                                    className={`${
                                      membership.popular ? 'text-black' : 'text-white/70'
                                    } ${isHovered ? 'text-white' : ''}`} 
                                  />
                                </motion.div>
                                <span className={`text-body text-sm ${
                                  membership.popular ? 'text-black/80' : 'text-white/80'
                                }`}>
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button with advanced hover effects */}
                        <motion.button 
                          className={`w-full py-4 text-caption transition-all duration-500 relative overflow-hidden group/btn ${
                            membership.popular
                              ? 'bg-black text-white'
                              : 'bg-white text-black'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          animate={isHovered ? { y: -2 } : { y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Animated background */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-r ${membership.color} opacity-0 group-hover/btn:opacity-100`}
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          {/* Button text */}
                          <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                            Get Started
                          </span>
                          
                          {/* Ripple effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/btn:scale-150 opacity-0 group-hover/btn:opacity-100"
                            transition={{ duration: 0.6 }}
                          />
                        </motion.button>
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    {isHovered && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-2 h-2 bg-gradient-to-r ${membership.color} rounded-full`}
                            initial={{ 
                              x: Math.random() * 300,
                              y: Math.random() * 400,
                              opacity: 0,
                              scale: 0
                            }}
                            animate={{ 
                              y: -50,
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}