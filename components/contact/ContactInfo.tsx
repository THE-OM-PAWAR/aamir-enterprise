'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

type ContactInfoItem = {
  icon: string;
  title: string;
  details: string[];
};

type ContactInfoProps = {
  contactInfo: ContactInfoItem[];
};

export default function ContactInfo({ contactInfo }: ContactInfoProps) {
  // Map string icon names to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return MapPin;
      case 'Phone':
        return Phone;
      case 'Mail':
        return Mail;
      case 'Clock':
        return Clock;
      default:
        return MapPin;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div>
        <h2 className="text-heading text-3xl md:text-4xl mb-4">
          Get in touch with Aamir POP works
        </h2>
        <p className="text-body text-white/60">
          Visit Aamir POP works at our location in Bhopal or reach out through any of the channels below for POP ceiling and false ceiling work.
        </p>
      </div>

      <div className="space-y-10">
        {contactInfo.map((info, index) => {
          const IconComponent = getIcon(info.icon);
          return (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                <IconComponent size={20} className="text-white/70" />
              </div>
              <div>
                <h3 className="text-caption text-white/50 mb-2">
                  {info.title.toUpperCase()}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-body text-white/80">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="aspect-[4/3] bg-zinc-900 rounded-lg overflow-hidden relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d29315.659738436672!2d77.35193179999999!3d23.2991552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1763490337098!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title="Aamir POP works Location Map - POP Ceiling & False Ceiling Contractor in Bhopal"
        />
      </motion.div>
    </motion.div>
  );
}
