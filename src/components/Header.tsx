import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenPlanner: () => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Header({ onOpenPlanner, activeSection, scrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'work' },
    { label: 'AI Labs', id: 'ailabs' },
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header
        id="site-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md py-4 border-[#2A2A2A]'
            : 'bg-transparent py-6 border-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo on Left */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group cursor-none focus:outline-none"
            data-cursor="magnetic"
          >
            <div className="w-5 h-5 bg-[#CDF564] rounded-sm transform group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-display font-extrabold text-xl md:text-2xl tracking-tighter text-white flex items-center">
              ALIVE DIGITALLY
              <span className="text-[#CDF564] ml-1 select-none font-medium">//</span>
            </span>
          </button>

          {/* Center Navigation Links (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-xs font-mono tracking-widest uppercase transition-colors duration-300 py-2 cursor-none focus:outline-none ${
                  activeSection === link.id
                    ? 'text-[#CDF564]'
                    : 'text-[#888888] hover:text-white'
                }`}
                data-cursor="link"
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-[1px] bg-[#CDF564]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Controls on Right */}
          <div className="flex items-center gap-4">
            <button
               onClick={onOpenPlanner}
               className="relative hidden sm:inline-flex items-center justify-center -top-px px-6 py-2.5 bg-transparent border border-[#CDF564] text-xs font-mono tracking-widest uppercase text-white overflow-hidden group transition-all duration-300 cursor-none focus:outline-none"
               data-cursor="magnetic"
            >
              {/* Sliding Background */}
              <span className="absolute inset-0 w-full h-full bg-[#CDF564] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1] z-0" />
              <span className="relative z-10 flex items-center gap-1.5 group-hover:text-[#0B0B0B] transition-colors duration-300">
                Start Project
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#CDF564] transition-colors cursor-none focus:outline-none"
              aria-label="Toggle Navigation"
              data-cursor="magnetic"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Overlay navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col justify-between pt-32 pb-16 px-8 md:px-16 lg:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(65,0,245,0.15),transparent_60%)] pointer-events-none" />

            <div className="flex flex-col gap-8 md:gap-10 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase">Navigation</span>
              <nav className="flex flex-col gap-6 md:gap-8 align-start">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // Slight delay for transition of overlay exit
                      setTimeout(() => scrollToSection(link.id), 400);
                    }}
                    className="group flex items-baseline text-left focus:outline-none"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                  >
                    <span className="text-xl md:text-2xl font-mono text-[#4100F5] mr-4 select-none">0{idx + 1}</span>
                    <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white group-hover:text-[#CDF564] transition-colors duration-300 uppercase">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Footer data in mobile overlay */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-[#181818] pt-8 relative z-10">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-mono tracking-widest text-[#555555] uppercase">Inquiries</span>
                <a href="mailto:hello@alivedigitally.com" className="text-sm font-mono text-white hover:text-[#CDF564] transition-colors">
                  hello@alivedigitally.com
                </a>
              </div>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => onOpenPlanner(), 400);
                }}
                className="inline-flex self-start items-center justify-center px-6 py-3 bg-[#CDF564] text-black text-xs font-mono tracking-widest uppercase font-bold hover:bg-white transition-colors duration-300"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
