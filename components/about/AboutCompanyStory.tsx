'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutCompanyStory() {
  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-caption text-white/50 mb-6">
              OUR JOURNEY
            </div>
            <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl mb-8">
              Excellence in Aamir POP Work & False Ceiling Since 2015
            </h2>
            <div className="space-y-6 text-white/80">
              <p>
                Aamir POP works was founded with a vision to transform interior spaces through innovative POP ceiling and false ceiling designs in Bhopal, Madhya Pradesh. For over a decade, we have been dedicated to providing premium POP work and false ceiling solutions that combine functionality, aesthetics, and durability.
              </p>
              <p>
                What started as a small local business has grown into a trusted name in Bhopal, serving residential homes and commercial buildings across the region. Our commitment to quality POP ceiling work, false ceiling installation, attention to detail, and customer satisfaction has been the cornerstone of our success.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-red-500 mb-2">10+</span>
                <span className="text-white/60 text-sm uppercase tracking-wider text-center">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-red-500 mb-2">500+</span>
                <span className="text-white/60 text-sm uppercase tracking-wider text-center">Projects Completed</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
              <Image 
                src="/gallery3.jpeg" 
                alt="Aamir POP works - POP Ceiling and False Ceiling Projects in Bhopal, Madhya Pradesh showcasing our expertise and craftsmanship"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-500 p-6 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
