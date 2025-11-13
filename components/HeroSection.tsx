'use client';

import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
    const message = 'Hi! I\'m interested in joining Gymnacity. Can you provide more information?';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8">
        
        {/* Small Label with red accent */}
        <div className="text-[9px] sm:text-[10px] lg:text-sm font-semibold text-black/60 uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-center mb-3 sm:mb-4 lg:mb-8 animate-fadeInUp flex items-center gap-2">
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
          ACHIEVE YOUR FITNESS GOALS
          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
        
        {/* Main Headlines - Improved mobile scaling */}
        <h1 className="text-[3rem] leading-[0.8] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight text-center mb-12 sm:mb-6 lg:mb-12 animate-fadeInUp">
          <span className="block">FIND YOUR</span>
          <span className="block">STRENGTH</span>
        </h1>
        {/* Image Container - Enhanced mobile responsiveness */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[2.2/1] shadow-lg sm:shadow-xl lg:shadow-2xl animate-fadeInUp">
            <img 
              src="https://images.unsplash.com/photo-1603665409265-bdc00027c217?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fitness Training"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Enhanced gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60"></div>
            
            {/* Text Overlay - Better mobile scaling */}
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 lg:px-6">
              <h2 className="text-[3rem] leading-[0.8] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight text-white text-center">
                <span className="block drop-shadow-2xl text-shadow-lg">INSIDE</span>
                <span className="block drop-shadow-2xl text-shadow-lg">AND OUT.</span>
              </h2>
            </div>
            
            {/* Top Buttons - Responsive for mobile */}
            <div className="absolute top-3 left-3 right-3 flex flex-col sm:block gap-2 z-10">
              <div className="flex sm:block justify-between">
                {/* Top Left - WhatsApp Button */}
                <button
                  onClick={() => {
                    const whatsappNumber = '919753337771';
                    const message = "Hi! I'm interested in joining Gymnacity. Can you provide more information?";
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="group flex items-center gap-2 bg-green-500/90 backdrop-blur-md px-3 py-2 rounded-full border border-green-400/30 hover:bg-green-500 transition-all duration-300 hover:scale-105 mb-2 sm:mb-0"
                  style={{ maxWidth: '100%', width: 'fit-content' }}
                >
                  <MessageCircle size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" />
                  <span className="text-white text-[10px] sm:text-xs lg:text-sm font-medium">
                    WhatsApp
                  </span>
                </button>
                {/* Top Right - Location */}
                <a
                  href="https://maps.app.goo.gl/66UsYoJdUnmzBKhr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full border border-white/20 hover:bg-red-500/20 transition-colors duration-200 ml-0 sm:ml-auto"
                  style={{ maxWidth: '100%', width: 'fit-content' }}
                >
                  <MapPin size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white/80" />
                  <span className="text-white text-[10px] sm:text-xs lg:text-sm font-medium underline">
                    Hardamlala Chowk, AB Rd, Rau, Indore, Madhya Pradesh 453331
                  </span>
                </a>
              </div>
            </div>
            
            {/* Bottom Content - Enhanced mobile layout */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6">
              <div className="flex items-end justify-between gap-2 sm:gap-3 lg:gap-4">
                
                {/* Left: Description & Play Button */}
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-6 flex-1">
                  <div className="text-white text-[10px] sm:text-xs lg:text-base font-light max-w-[140px] sm:max-w-[200px] lg:max-w-xs leading-relaxed drop-shadow-md">
                    We are dedicated to helping you achieve your fitness goals and improve your overall health and well-being.
                  </div>
                  <button className="group w-9 h-9 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-red-500/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300 border border-red-400/50 shadow-lg flex-shrink-0">
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                
                {/* Right: Time */}
                <div className="text-white text-[10px] sm:text-xs lg:text-base font-medium bg-black/30 backdrop-blur-sm px-2 py-1 sm:px-2.5 sm:py-1 lg:px-3 lg:py-1.5 rounded-full border border-white/25 shadow-lg flex-shrink-0">
                  3 min
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced decorative elements with red accents */}
          <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 lg:-top-4 lg:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-12 lg:h-12 border-2 border-red-500/30 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 lg:-bottom-4 lg:-left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-8 lg:h-8 bg-red-500/20 rounded-full"></div>
          <div className="absolute top-1/2 -left-0.5 sm:-left-1 lg:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-red-500/30 rounded-full"></div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator - Better mobile visibility */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-black/50 animate-bounce">
        <div className="w-px h-4 sm:h-6 lg:h-8 bg-gradient-to-b from-red-500/50 to-transparent"></div>
        <div className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-widest font-medium">Scroll</div>
      </div>

      {/* Custom styles for text shadow */}
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        @media (max-width: 640px) {
          .text-shadow-lg {
            text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.4);
          }
        }
      `}</style>
    </section>
  );
}