'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-white text-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-caption text-black/50 mb-6">
            ABOUT AAMIR POP WORKS
          </div>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl mb-8">
            ABOUT US
          </h1>
          <p className="text-body text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Aamir POP works - Building excellence through dedication, quality craftsmanship, and innovative POP ceiling and false ceiling solutions in Bhopal, Madhya Pradesh.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
