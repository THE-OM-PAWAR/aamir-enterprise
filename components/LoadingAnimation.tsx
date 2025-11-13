'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Total animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Main Logo Animation */}
          <div className="relative flex flex-col items-center">
            {/* Logo Icon with Zoom Out */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 8, opacity: 0 }}
              animate={{ 
                scale: [8, 1.2, 1],
                opacity: [0, 1, 1],
                rotate: [0, 360, 360]
              }}
              transition={{ 
                duration: 2.5,
                times: [0, 0.6, 1],
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center relative overflow-hidden">
                <Lightbulb className="h-10 w-10 text-white" />
                
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-red-500 rounded-full"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ 
                    scale: [1, 1.5, 2],
                    opacity: [1, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Logo Text with Staggered Animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white"
                style={{
                  fontFamily: 'var(--font-grotesk), Impact, Arial Black, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  AAMIR
                </motion.span>
                <motion.span
                  className="inline-block text-red-500"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  ENTERPRISES
                </motion.span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-white/60 text-lg font-light mt-4 tracking-wider uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                Designing Ceilings that Define Spaces
              </motion.p>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-red-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Zoom Out Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Corner Accents */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-red-500/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-red-500/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-red-500/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-red-500/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}