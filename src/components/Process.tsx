import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownCircle, Circle, RefreshCw } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';

export default function Process() {
  const [activeStepId, setActiveStepId] = useState<string>('discover');

  return (
    <section
      id="process"
      className="relative bg-[#0B0B0B] py-24 md:py-36 border-t border-[#181818]"
    >
      <div className="absolute inset-0 bg-[#0B0B0B]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-start">
          {/* Left Column: Sticky Title Indicator Node (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#CDF564] font-bold">04 \\</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">OUR WORKFLOW</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white uppercase leading-tight">
                THE SERVICE TIMELINE
              </h2>
            </div>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
              Crafting premium products requires disciplined execution. We align design creativity with strict milestone structures, turning vision into verified execution.
            </p>

            {/* Simulated Live Project Estimator Link Node */}
            <div className="p-5 bg-[#181818]/40 border border-[#2A2A2A] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <RefreshCw className="w-3.5 h-3.5 text-[#CDF564] animate-spin" style={{ animationDuration: '4s' }} />
                <span>DYNAMIC PHASES ENGINE</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light">
                Hover over the vertical phases on the right to toggle detailed milestone durations and deliverables reports.
              </p>
            </div>
          </div>

          {/* Right Column: Vertical Timeline Track (8 cols) */}
          <div className="lg:col-span-8 relative">
            {/* The vertical connector track line */}
            <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-[#181818]" />
            
            {/* Active glowing timeline indicator line */}
            <div className="space-y-12">
              {TIMELINE_STEPS.map((step, sIdx) => {
                const isActive = activeStepId === step.id;

                return (
                  <div
                    key={step.id}
                    className="relative pl-12 group cursor-none"
                    onMouseEnter={() => setActiveStepId(step.id)}
                    data-cursor="magnetic"
                  >
                    {/* Glowing Circular Node Indicator */}
                    <div className="absolute left-2.5 top-1.5 z-10 -translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                          isActive
                            ? 'bg-[#CDF564] border-[#CDF564] scale-125'
                            : 'bg-black border-[#2A2A2A] group-hover:border-[#CDF564]'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 bg-[#CDF564] rounded-full animate-ping opacity-60 pointer-events-none" />
                        )}
                      </motion.div>
                    </div>

                    {/* Step Card Container */}
                    <motion.div
                      className={`p-6 md:p-8 border transition-all duration-500 rounded-sm ${
                        isActive
                          ? 'border-[#CDF564] bg-[#181818]/60 shadow-xl shadow-[#CDF564]/3'
                          : 'border-[#181818] bg-transparent group-hover:border-[#2A2A2A]'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Step Header info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#181818] pb-4 mb-4">
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-mono transition-colors duration-300 ${
                            isActive ? 'text-[#CDF564]' : 'text-gray-500'
                          }`}>
                            PHASE {step.phase}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-display font-bold transition-colors duration-300 uppercase ${
                            isActive ? 'text-white' : 'text-gray-300'
                          }`}>
                            {step.title}
                          </h3>
                        </div>

                        {/* Duration badge */}
                        <span className={`self-start sm:self-auto px-2.5 py-1 text-[10px] font-mono border ${
                          isActive
                            ? 'bg-[#CDF564] text-black border-[#CDF564] font-semibold'
                            : 'bg-transparent text-gray-500 border-[#2A2A2A]'
                        }`}>
                          {step.duration}
                        </span>
                      </div>

                      {/* Description body */}
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-6">
                        {step.description}
                      </p>

                      {/* Deliverables indicators */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase block">
                          Phase Deliverable Artifacts
                        </span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {step.deliverables.map(deliv => (
                            <div
                              key={deliv}
                              className="flex items-start gap-2 text-xs font-mono text-gray-400 bg-black/40 border border-gray-900 px-3 py-2"
                            >
                              <span className="text-[#CDF564] shrink-0">◇</span>
                              <span>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
