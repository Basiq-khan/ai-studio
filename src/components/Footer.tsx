import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenPlanner: () => void;
  scrollToSection: (id: string) => void;
}

export default function Footer({ onOpenPlanner, scrollToSection }: FooterProps) {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0B0B0B] overflow-hidden border-t border-[#181818] select-none">
      {/* 1. Large Centered CTA Banner */}
      <div className="relative pt-24 pb-20 md:pt-36 md:pb-32 border-b border-[#181818] text-center max-w-7xl mx-auto px-6 md:px-12 z-10 flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#CDF564] rounded-full animate-ping" />
          <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
            COLLABORATION PROTOCOL
          </span>
        </div>

        <motion.h2
          className="text-[8vw] sm:text-[6vw] md:text-[5vw] font-display font-black leading-[0.95] tracking-tighter text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.85 }}
        >
          READY TO CREATE <br />
          SOMETHING <span className="text-stroke text-white group-hover:text-[#CDF564]">EXTRAORDINARY?</span>
        </motion.h2>

        {/* CTA "Let's Talk" Button triggers scoping planner */}
        <button
          onClick={onOpenPlanner}
          className="px-10 py-5 bg-[#CDF564] text-black font-mono font-bold text-sm tracking-widest uppercase flex items-center gap-2 border border-[#CDF564] hover:bg-white hover:border-white transition-colors duration-300 transition-all cursor-none"
          data-cursor="magnetic"
          id="footer-talk-btn"
        >
          <span>LET'S TALK</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Structured Link Columns Grid */}
      <div className="relative pt-16 pb-12 max-w-7xl mx-auto px-6 md:px-12 z-10 grid grid-cols-2 md:grid-cols-12 gap-10">
        
        {/* Column 1: Studio Identity (4 cols) */}
        <div className="col-span-2 md:col-span-4 space-y-4">
          <span className="font-display font-black text-xl tracking-tighter text-white">
            ALIVE DIGITALLY<span className="text-[#CDF564] font-medium ml-1">//</span>
          </span>
          <p className="text-gray-500 text-xs leading-relaxed max-w-xs font-light">
            Luxury creative developers engineering responsive brands, high-speed platforms, and modern AI operations ecosystems.
          </p>

          <div className="space-y-1.5 pt-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#CDF564]" />
              <span>Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-[#CDF564]" />
              <span>{time ? `${time} PST` : 'LOADING TIME'}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links Directory (2 cols) */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase block">DIRECTORY</span>
          <ul className="space-y-2 text-xs font-mono">
            {['home', 'services', 'work', 'about', 'process'].map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className="text-gray-400 hover:text-[#CDF564] uppercase transition-colors focus:outline-none cursor-none"
                  data-cursor="link"
                >
                  {sec}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Capabilities (3 cols) */}
        <div className="col-span-1 md:col-span-3 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase block">CAPABILITIES</span>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>Branding Systems</li>
            <li>UI/UX Digital Architecture</li>
            <li>High-Performance React Dev</li>
            <li>Automated Integrations</li>
            <li>Secure Gemini AI Systems</li>
          </ul>
        </div>

        {/* Column 4: Social Coordinates (3 cols) */}
        <div className="col-span-2 md:col-span-3 space-y-4">
          <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase block">COORDINATES</span>
          <ul className="space-y-2 text-xs font-mono">
            {['GitHub', 'Twitter', 'Dribbble', 'LinkedIn', 'Instagram'].map((social) => (
              <li key={social}>
                <a
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-[#CDF564] transition-colors cursor-none"
                  data-cursor="link"
                >
                  {social} \\ RND
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Infinite Massive Watermark Backplate */}
      <div className="relative flex justify-center w-full select-none overflow-hidden max-h-[14vw] pointer-events-none mb-4 opacity-[0.025]">
        <span className="font-display font-black text-[18vw] leading-none tracking-tighter text-white font-black">
          ALIVE DIGITALLY
        </span>
      </div>

      {/* Sleek Interface Bottom Rail / Marquee Area */}
      <div className="w-full h-16 border-t border-[#2A2A2A] border-b border-[#2A2A2A] flex items-center bg-[#0B0B0B] z-10 overflow-hidden relative">
        <div className="flex whitespace-nowrap overflow-hidden w-full items-center">
          <div className="flex items-center space-x-12 px-6 md:px-12 animate-pulse-slow">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-45 text-white">Luxury Branding</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CDF564] flex-shrink-0"></span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-45 text-white">Web 3.0 Development</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CDF564] flex-shrink-0"></span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-45 text-white">Artificial Intelligence</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CDF564] flex-shrink-0"></span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-45 text-white">High-End E-Commerce</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#CDF564] flex-shrink-0"></span>
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] opacity-45 text-white">UI/UX Excellence</span>
          </div>
        </div>
        <div className="ml-auto border-l border-[#2A2A2A] h-full flex items-center px-6 md:px-12 bg-[#0B0B0B] z-20 shrink-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60 text-white">Est. 2012</span>
        </div>
      </div>

      {/* 4. Tiny Legal Line & Back to top button */}
      <div className="relative py-8 z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#555555]">
        <div>
          <span>© {currentYear} ALIVE DIGITALLY AGENCY. ALL RIGHTS RESERVED.</span>
        </div>

        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 hover:text-[#CDF564] transition-colors focus:outline-none cursor-none"
          data-cursor="magnetic"
        >
          <span>BACK TO THE ZENITH</span>
          <div className="p-1.5 border border-[#2A2A2A] rounded-full">
            <ArrowUp className="w-3 h-3 text-[#CDF564]" />
          </div>
        </button>
      </div>
    </footer>
  );
}
