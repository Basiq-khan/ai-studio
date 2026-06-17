import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowUpRight, CheckCircle2, Award } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      className="relative bg-[#0B0B0B] py-24 md:py-36 border-t border-[#181818] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-[#181818] pb-10 mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#CDF564] font-bold">03 \\</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">OUR PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white uppercase">
              SELECTED CASES
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed">
            A curated digest of digital flags, branding systems, and smart automation systems designed to transcend the ordinary.
          </p>
        </div>

        {/* Alternating Project Grid */}
        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((project, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center`}
              >
                {/* Image Block: Column order based on alternation */}
                <div
                  className={`lg:col-span-7 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div
                    className="relative aspect-[16/10] w-full bg-[#181818] overflow-hidden cursor-none border border-[#2A2A2A] group"
                    data-cursor="view"
                    data-cursor-text="CASE"
                  >
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 1.2 }}
                    />

                    {/* Left top editorial index tag in card */}
                    <div className="absolute top-4 left-4 z-15 bg-black/60 backdrop-blur-md px-3 py-1 text-[9px] font-mono tracking-widest border border-gray-800 uppercase">
                      CAT No. 0{index + 1} // PRJ-{project.year}
                    </div>
                  </div>
                </div>

                {/* Content Block Details */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
                    isLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#CDF564] tracking-widest uppercase font-semibold">
                      {project.category}
                    </span>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-3xl md:text-4xl font-display font-black tracking-tight text-white hover:text-[#CDF564] cursor-none transition-colors select-none uppercase"
                      data-cursor="link"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-10 text-xs font-mono text-gray-500 pb-2 border-b border-[#181818]">
                    <div>
                      <span className="block text-[9px] text-gray-600 uppercase">TIMEFRAME</span>
                      <span className="text-white font-medium">{project.year}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-gray-600 uppercase">OPERATIONS</span>
                      <span className="text-white font-medium">Bespoke Audit</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-gray-600 uppercase">SATISFACTION</span>
                      <span className="text-[#CDF564] font-bold">100%</span>
                    </div>
                  </div>

                  {/* Intersecting Action Anchor */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white hover:text-[#CDF564] transition-colors focus:outline-none cursor-none py-1 self-start"
                    data-cursor="magnetic"
                  >
                    <span>VIEW CASE STRUCTURE</span>
                    <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                    {/* Animated bottom orange outline line */}
                    <div className="h-[1px] w-0 group-hover:w-full bg-[#CDF564] transition-all duration-300 absolute bottom-0 left-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Full View modal/slide-over drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="project-case-drawer">
            {/* Dark Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Core Modal Sheet */}
            <motion.div
              className="relative w-full max-w-4xl bg-[#0B0B0B] border border-[#2A2A2A] h-[90vh] overflow-y-auto hide-scrollbar z-10 p-6 md:p-12 shadow-2xl flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close corner anchor */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 border border-[#2A2A2A] hover:border-[#CDF564] text-gray-400 hover:text-[#CDF564] rounded-full transition-colors focus:outline-none cursor-none z-20"
                data-cursor="magnetic"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-10 flex-grow">
                {/* Identity Tag Header */}
                <div className="space-y-2 border-b border-[#181818] pb-6 pr-12">
                   <span className="text-xs font-mono text-[#CDF564] tracking-widest uppercase font-semibold">
                    {selectedProject.category} // CASE STUDY
                  </span>
                  <h3 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white uppercase">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Cover Image container */}
                <div className="aspect-[21/9] w-full bg-gray-900 border border-[#2A2A2A] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                </div>

                {/* Dual Column case report details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                  {/* Left Column (Chall/Sol) */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#F037A5] uppercase block font-semibold">
                        01 \\ THE CHALLENGE
                      </span>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4">
                      <span className="text-[10px] font-mono tracking-widest text-[#CDF564] uppercase block font-semibold">
                        02 \\ THE SOLUTION
                      </span>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Meta tags & scopes) */}
                  <div className="md:col-span-4 space-y-6 border-l border-[#181818] pl-0 md:pl-6">
                    <div className="space-y-2.5">
                      <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block">
                        COORDINATED SCOPE
                      </span>
                      <div className="space-y-2">
                        {selectedProject.scope.map(s => (
                          <div key={s} className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#181818]/40 border border-[#2A2A2A] px-2.5 py-1.5 align-middle">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#CDF564] shrink-0" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Massive Counters Grid row */}
                <div className="pt-8 border-t border-[#181818]">
                  <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block mb-6">
                    PROJECT PERFORMANCE SCORECARD
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {selectedProject.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="bg-[#181818]/50 border border-[#2A2A2A] p-6 space-y-2 select-none">
                        <span className="text-[10px] font-mono text-gray-500 uppercase block">{metric.label}</span>
                        <span className="text-3xl font-display font-black text-[#F037A5] block">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer footer close trigger container */}
              <div className="pt-10 border-t border-[#181818] mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#555555]">
                  <Award className="w-4 h-4 text-[#CDF564]" />
                  <span>ALIVE DIGITALLY VERIFIED PROFESSIONAL CASE ARTIFACT</span>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 bg-[#CDF564] text-black font-mono font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors duration-300 cursor-none"
                  data-cursor="magnetic"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
