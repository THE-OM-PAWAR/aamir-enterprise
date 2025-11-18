'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

type CoreValue = {
  title: string;
  description: string;
};

type AboutValuesProps = {
  values: CoreValue[];
};

export default function AboutValues({ values }: AboutValuesProps) {
  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-caption text-white/50 mb-6">
            WHAT DRIVES US
          </div>
          <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl mb-8">
            Our Core Values
          </h2>
          <p className="text-white/80">
            At Aamir Enterprises S, we are guided by a set of core values that define who we are and how we approach our work. These values form the foundation of our company culture and drive our commitment to excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white/5 p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
