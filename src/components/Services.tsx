import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

export default function Services() {
  const [activeId, setActiveId] = useState<string>('branding');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const displayId = hoveredId || activeId;
  const activeService = SERVICES.find(s => s.id === displayId) || SERVICES[0];

  return (
    <section
      id="services"
      className="relative bg-[#0B0B0B] py-24 md:py-36 border-t border-[#181818]"
    >
      {/* Absolute graphic grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(65,0,245,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-[#181818] pb-10 mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#CDF564] font-bold">02 \\</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">OUR CAPABILITIES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white uppercase">
              WHAT WE CRAFT
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed">
            We operate at the leading edge of digital technology, delivering tailored experiences that unite artistic aesthetics with structural integrity.
          </p>
        </div>

        {/* Big Dual Row Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          {/* Left Column: Big Rich Accordion Stack (7 cols) */}
          <div className="lg:col-span-7 flex flex-col border-t border-[#181818]">
            {SERVICES.map((service, index) => {
              const isOpen = displayId === service.id;
              
              return (
                <div
                  key={service.id}
                  className={`border-b transition-all duration-500 cursor-none select-none group py-8 ${
                    isOpen ? 'border-[#CDF564]' : 'border-[#181818]'
                  }`}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveId(service.id)}
                  data-cursor="magnetic"
                >
                  {/* Accordion Head */}
                  <div className="flex items-baseline justify-between transition-colors duration-300">
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className={`text-sm font-mono transition-colors duration-300 ${
                        isOpen ? 'text-[#CDF564]' : 'text-[#444444]'
                      }`}>
                        {service.number}
                      </span>
                      <h3 className={`text-2xl md:text-3xl font-display font-bold transition-all duration-300 uppercase ${
                        isOpen ? 'text-[#CDF564] translate-x-1' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Indicator Animates */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0, color: isOpen ? '#CDF564' : '#888888' }}
                      transition={{ duration: 0.3 }}
                      className="p-1"
                    >
                      <ArrowUpRight className="w-6 h-6 transform group-hover:scale-110" />
                    </motion.div>
                  </div>

                  {/* Accordion Content with Height Reveal */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pl-10 md:pl-16 pr-4 space-y-6">
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                            {service.description}
                          </p>

                          {/* Extra detailed editorial description inside accordion */}
                          <p className="text-[#888888] text-xs leading-relaxed max-w-xl">
                            {service.detailDescription}
                          </p>

                          {/* Bullet capabilities */}
                          <div className="space-y-2.5 pt-2">
                            <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase block">
                              Deliverable Specialties
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {service.capabilities.map(cap => (
                                <div key={cap} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-[#CDF564] rounded-full" />
                                  <span className="text-xs font-mono text-gray-400">{cap}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

           {/* Right Column: High-End Procedural Visual Matrix (5 cols, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 aspect-square w-full bg-[#121212]/70 border border-[#1E1E1E] overflow-hidden flex flex-col justify-between p-8 select-none">
            {/* Spec lines */}
            <div className="flex justify-between items-center text-[#555555] font-mono text-[9px] border-b border-[#1E1E1E] pb-4">
              <span>ALIVE DIGITALLY GEOMETRIC ENGINE v1.2</span>
              <span>RENDER STATE: AKTIV</span>
            </div>

            {/* Simulated Animated Mesh Visualizer */}
            <div className="relative flex-grow flex items-center justify-center p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  className="w-full h-full flex items-center justify-center relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Procedural Visualizers Based on Type */}
                  {activeService.visualType === 'grid' && (
                    <div className="grid grid-cols-4 gap-4 w-48 h-48 rotate-12 relative animate-pulse-slow">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-[#F037A5]/30 aspect-square flex items-center justify-center"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-[#CDF564]/80 rounded-full animate-ping" />
                        </div>
                      ))}
                    </div>
                  )}

                  {activeService.visualType === 'sphere' && (
                    <div className="relative w-56 h-56 flex items-center justify-center">
                      <motion.div
                        className="absolute w-44 h-44 border border-[#4100F5]/40 rounded-full"
                        animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
                        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute w-28 h-28 border border-dashed border-[#F037A5]/60 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      />
                      <div className="w-12 h-12 bg-[#FF4632]/10 border border-[#FF4632] rounded-full animate-ping absolute" />
                      <div className="w-4 h-4 bg-[#CDF564] rounded-full" />
                    </div>
                  )}

                  {activeService.visualType === 'wave' && (
                    <div className="w-full flex items-center justify-center gap-1.5">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 bg-[#CDF564]"
                          animate={{ height: [12, 120, 12] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {activeService.visualType === 'mesh' && (
                    <div className="relative w-52 h-52">
                      {Array.from({ length: 5 }).map((_, rIndex) => (
                        <motion.div
                          key={rIndex}
                          className="absolute border border-[#4100F5]/30"
                          style={{
                            width: `${100 - rIndex * 15}%`,
                            height: `${100 - rIndex * 15}%`,
                            top: `${rIndex * 7.5}%`,
                            left: `${rIndex * 7.5}%`,
                            borderRadius: rIndex % 2 === 0 ? '40% 60% 70% 30% / 40% 50% 60% 50%' : '50%',
                          }}
                          animate={{ rotate: rIndex % 2 === 0 ? 360 : -360 }}
                          transition={{ repeat: Infinity, duration: 12 + rIndex * 3, ease: 'linear' }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 bg-[#F037A5] rounded-full animate-ping" />
                      </div>
                    </div>
                  )}

                  {activeService.visualType === 'dots' && (
                    <div className="flex flex-col gap-6 w-48">
                      {Array.from({ length: 4 }).map((_, lineIndex) => (
                        <div key={lineIndex} className="flex items-center justify-between relative">
                          {lineIndex > 0 && (
                            <div className="absolute top-[-24px] left-1/2 w-[1px] h-[24px] bg-[#1E1E1E]" />
                          )}
                          <div className="w-3.5 h-3.5 rounded-full border border-[#98F0E1] bg-black" />
                          <div className="flex-grow h-[1px] bg-[#1E1E1E] mx-4" />
                          <motion.div 
                            className="w-3.5 h-3.5 rounded-full bg-[#F037A5]" 
                            animate={{ scale: [1, 1.3, 1] }} 
                            transition={{ repeat: Infinity, duration: 2, delay: lineIndex * 0.3 }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {activeService.visualType === 'helix' && (
                    <div className="w-56 h-36 relative flex items-center justify-between">
                      {Array.from({ length: 14 }).map((_, i) => {
                        const angle = (i * Math.PI * 2) / 14;
                        return (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                              left: `${(i / 13) * 100}%`,
                              backgroundColor: i % 2 === 0 ? '#FF4632' : '#98F0E1',
                            }}
                            animate={{
                              y: [
                                Math.sin(angle) * 44,
                                Math.sin(angle + Math.PI) * 44,
                                Math.sin(angle) * 44,
                              ],
                              scale: [
                                Math.cos(angle) * 0.4 + 0.8,
                                Math.cos(angle + Math.PI) * 0.4 + 0.8,
                                Math.cos(angle) * 0.4 + 0.8,
                              ],
                            }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                          />
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Spec footer metadata */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#1E1E1E] pt-4 select-none">
              <div>
                <span className="text-[8px] font-mono text-[#555555] uppercase block">Operational Target</span>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">{activeService.title}</span>
              </div>
              <div>
                <span className="text-[8px] font-mono text-[#555555] uppercase block">Scope Density</span>
                <span className="text-xs font-mono text-gray-400">{activeService.capabilities.length} Key Segments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
