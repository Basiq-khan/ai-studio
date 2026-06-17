import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 7000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index, isHovered]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Slider animation coordinates
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0
    })
  };

  const currentTestimonial = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="relative bg-black py-24 md:py-36 border-t border-[#181818] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4100F5]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Large Stylized Quotation Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-4 bg-[#181818] border border-[#2A2A2A] rounded-full text-[#CDF564] select-none"
          >
            <Quote className="w-10 h-10 fill-current" />
          </motion.div>

          {/* Testimonial slider body */}
          <div className="relative w-full min-h-[220px] md:min-h-[180px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <p className="text-xl md:text-3xl font-display font-light text-white leading-relaxed tracking-wide select-none">
                  "{currentTestimonial.quote}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* User Signatures Block with delay reveal */}
          <div className="space-y-1">
            <h4 className="font-display font-extrabold text-[#CDF564] text-lg uppercase tracking-wider">
              {currentTestimonial.author}
            </h4>
            <p className="text-xs font-mono text-gray-400">
              {currentTestimonial.role} \\ <span className="text-white">{currentTestimonial.company}</span>
            </p>
            <p className="text-[10px] font-mono text-gray-500 uppercase pt-2">
              Deliverable: {currentTestimonial.projectCompleted}
            </p>
          </div>

          {/* Slider controls indicators interface */}
          <div className="flex items-center gap-6 pt-4">
            <button
              onClick={handlePrev}
              className="p-3 border border-[#2A2A2A] hover:border-[#CDF564] text-gray-400 hover:text-[#CDF564] rounded-full transition-colors focus:outline-none cursor-none"
              data-cursor="magnetic"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Circular index circles */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setDirection(dotIdx > index ? 1 : -1);
                    setIndex(dotIdx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none cursor-none ${
                    index === dotIdx ? 'bg-[#CDF564] w-6' : 'bg-[#2A2A2A] hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 border border-[#2A2A2A] hover:border-[#CDF564] text-gray-400 hover:text-[#CDF564] rounded-full transition-colors focus:outline-none cursor-none"
              data-cursor="magnetic"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
