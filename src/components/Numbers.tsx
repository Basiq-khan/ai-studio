import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

export default function Numbers() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { id: 'projects', target: 150, suffix: '+', label: 'Projects Completed' },
    { id: 'clients', target: 50, suffix: '+', label: 'Global Clients' },
    { id: 'years', target: 12, suffix: '+', label: 'Years Experience' },
    { id: 'sat', target: 98, suffix: '%', label: 'Client Satisfaction' },
  ];

  const [counts, setCounts] = useState<Record<string, number>>({
    projects: 0,
    clients: 0,
    years: 0,
    sat: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1600; // 1.6s
    const steps = 40;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounts({
          projects: stats[0].target,
          clients: stats[1].target,
          years: stats[2].target,
          sat: stats[3].target,
        });
        clearInterval(timer);
      } else {
        const progress = currentStep / steps;
        // Cubic ease out
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCounts({
          projects: Math.floor(easeProgress * stats[0].target),
          clients: Math.floor(easeProgress * stats[1].target),
          years: Math.floor(easeProgress * stats[2].target),
          sat: Math.floor(easeProgress * stats[3].target),
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0B0B0B] py-20 md:py-32 border-t border-[#181818]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => {
            const currentCount = counts[stat.id];

            return (
              <motion.div
                key={stat.id}
                className="space-y-3 bg-[#181818]/20 border border-[#181818] p-6 md:p-8 hover:border-[#CDF564]/30 hover:bg-[#181818]/40 transition-all duration-300 relative select-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Visual grid watermark corner */}
                <div className="absolute top-2 right-2 text-[9px] font-mono text-gray-700">
                  STAT_COORD // 0{idx + 1}
                </div>

                <div className="space-y-1">
                  {/* Oversized typography count */}
                  <span className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white block">
                    <span className="text-white">{currentCount}</span>
                    <span className="text-[#CDF564]">{stat.suffix}</span>
                  </span>
                  
                  {/* Label tag */}
                  <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                    {stat.label}
                  </span>
                </div>

                <p className="text-[10px] font-mono text-gray-600 uppercase border-t border-gray-900 pt-3 mt-4">
                  Verified Alive Digitally Metric
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
