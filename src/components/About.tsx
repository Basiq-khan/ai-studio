import { motion } from 'motion/react';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0B0B0B] py-24 md:py-36 border-t border-[#181818] overflow-hidden"
    >
      {/* Visual background lines */}
      <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-[#181818] hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Index Header */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#CDF564] font-bold">01 \\</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">
                WHO WE ARE
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white uppercase leading-tight">
              A bespoke digital <br />
              excellence lab.
            </h3>
          </div>

          {/* Right Column: Large Editorial Philosophy */}
          <div className="lg:col-span-9 space-y-12">
            <motion.p
              className="text-2xl md:text-4xl font-display font-light leading-snug text-white tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              We create digital landmarks. Our philosophy is rooted in architectural minimalism, deep engineering stability, and expressive micro-interactions. By removing speculative noise and optimizing every brand, pixel, and line of code, we craft experiences that evoke emotional responses and deliver elite commercial growth.
            </motion.p>

            <motion.p
              className="text-[#888888] text-base md:text-lg leading-relaxed max-w-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              We decline generic templates. We do not design for panels of critics; we write code for target human senses. Operating as a hyper-focused design and engineering partner, we help premium corporate brands, AI initiatives, and high-growth operations transcend normal interfaces to establish unshakeable digital authority.
            </motion.p>

            {/* Scrolling Image Reveal Module */}
            <motion.div
              className="relative aspect-[16/9] w-full bg-[#181818] overflow-hidden mt-16 group border border-[#2A2A2A]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Sliding clip reveal cover */}
              <motion.div
                className="absolute inset-0 bg-[#4100F5] z-20"
                initial={{ x: '0%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              />

              {/* Parallax Zooming Image */}
              <motion.img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
                alt="Architectural minimal stone structures"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Hover overlay text and grid specs */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 flex flex-col justify-end p-6 md:p-10 select-none">
                <div className="flex flex-col sm:flex-row justify-between items-baseline border-t border-white/10 pt-4 gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#CDF564] uppercase font-semibold">
                    01 \\ ALIVE DIGITALLY GRID
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                    ELEVATING BRANDS TO MASTER CLASS LEVEL
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
