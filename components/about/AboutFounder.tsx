'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutFounder() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 relative h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
              <Image 
                src="/founder.jpg" 
                alt="Aamir Khan - Founder of Aamir POP works with 15+ years of experience in POP ceiling and false ceiling work in Bhopal, Madhya Pradesh"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md p-6 rounded-lg max-w-xs text-center">
              <h3 className="text-xl font-bold mb-1">Aamir Khan</h3>
              <p className="text-white/70 text-sm">Founder & CEO</p>
            </div>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-caption text-white/50 mb-6">
              OUR LEADERSHIP
            </div>
            <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl mb-8">
              Meet Our Founder
            </h2>
            <div className="space-y-6 text-white/80">
              <p>
                With over 15 years of experience in the construction and interior design industry, Aamir Khan founded Aamir POP works with a passion for creating exceptional POP ceiling and false ceiling solutions in Bhopal, Madhya Pradesh that elevate spaces.
              </p>
              <p>
                "My vision has always been to combine traditional craftsmanship with innovative techniques to create POP ceiling and false ceiling solutions that are not only visually stunning but also functional and durable. Every POP work project we undertake is approached with the same level of dedication and attention to detail, whether it's a small residential home or a large commercial building in Bhopal."
              </p>
              <p>
                Under his leadership, Aamir POP works has grown from a small local business to a respected name in Bhopal and Madhya Pradesh, known for its commitment to quality POP ceiling work, false ceiling installation, innovation, and customer satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
