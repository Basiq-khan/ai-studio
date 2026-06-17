/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CustomCursor from './components/CustomCursor';
// import AIChatOrb from './components/AIChatOrb';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import Process from './components/Process';
import Numbers from './components/Numbers';
import Testimonials from './components/Testimonials';
import ClientLogos from './components/ClientLogos';
import AILab from './components/AILab';
import Footer from './components/Footer';
import ProjectPlanner from './components/ProjectPlanner';
import Video from './components/video';

export default function App() {
  const [isPlannerOpen, setIsPlannerOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Trigger smooth reveal on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Track standard page scrolls to update active menu link state
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'work', 'ailabs', 'about', 'process', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll click handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const offset = 80; // Offset for fixed header menu
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* 1. Custom Interactive Cursor Follower */}
      <CustomCursor />

      {/* Floating Interactive AI Strategic Assistant Companion Orb */}
      {/* <AIChatOrb /> */}

      {/* 2. Film/Digital Noise Texture Overlay */}
      <div className="noise-bg" />

      {/* Primary Transition Wrappers */}
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          /* Cinematic Preloader screen */
          <motion.div
            key="preloader"
            className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col items-center justify-center font-display uppercase tracking-widest text-[#FFFFFF] select-none"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="font-black text-3xl sm:text-5xl tracking-tighter text-white"
              >
                ALIVE DIGITALLY <span className="text-[#CDF564] select-none">//</span>
              </motion.div>
              
              <div className="overflow-hidden h-4 w-40 mx-auto relative bg-neutral-900 border border-neutral-800">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#CDF564]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#444444] mt-2">
                DETERMINISTIC LOAD BINDING
              </p>
            </div>
          </motion.div>
        ) : (
          /* Main Page Canvas Flow */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Header overlay */}
            <Header
              onOpenPlanner={() => setIsPlannerOpen(true)}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            {/* Layout Block Areas */}
            <main className="flex-grow">
              {/* Hero Banner Area */}
              <Hero
                onOpenPlanner={() => setIsPlannerOpen(true)}
                onScrollToWork={() => scrollToSection('work')}
              />

              {/* Company Philosophy */}
              <About />

              {/* Service capabilities lists */}
              <Services />
              <Video />

              {/* Double alternating caseworks grids */}
              <FeaturedWork />

              {/* Interactive Neural AI Design Sandbox */}
              <AILab />

              {/* Client infinite slider marquee */}
              <ClientLogos />

              {/* Timelines and execution cycles */}
              <Process />

              {/* Incremental Stats */}
              <Numbers />

              {/* Slide review references */}
              <Testimonials />
            </main>

            {/* Sitemap/Footer CTA combinations */}
            <Footer
              onOpenPlanner={() => setIsPlannerOpen(true)}
              scrollToSection={scrollToSection}
            />

            {/* Interactive Client Scoping wizard */}
            <ProjectPlanner
              isOpen={isPlannerOpen}
              onClose={() => setIsPlannerOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
