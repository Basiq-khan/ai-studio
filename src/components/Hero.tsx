import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenPlanner: () => void;
  onScrollToWork: () => void;
}

export default function Hero({ onOpenPlanner, onScrollToWork }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      angle: number;
      angularSpeed: number;
    }> = [];

    // Create particles
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.1,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.01,
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 250 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw elegant dark ambient background grid
      const gridSize = 100;
      ctx.strokeStyle = 'rgba(42, 42, 42, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connected particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.angle += p.angularSpeed;

        // Wrap around margins
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse displacement effect
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        let color = 'rgba(255, 255, 255,';
        let currentSize = p.size;

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
          // Glow and shift towards brand citric color
          color = `rgba(205, 245, 100,`;
          currentSize = p.size * (1 + force * 2);
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${p.alpha + (dist < mouse.radius ? 0.3 : 0)})`;
        ctx.fill();

        // Connect near particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 180) {
            const opacity = (180 - dist2) / 180 * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Highlight connections near mouse
            if (dist < mouse.radius && dist2 < mouse.radius) {
              ctx.strokeStyle = `rgba(205, 245, 100, ${opacity * 2.5})`;
            } else {
              ctx.strokeStyle = `rgba(65, 0, 245, ${opacity})`;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Title lines reveal configurations 
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full bg-[#0B0B0B] flex flex-col justify-center items-start overflow-hidden px-6 md:px-12 select-none"
    >
      {/* Dynamic Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4100F5]/5 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F037A5]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Hero Elements wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-start space-y-8 md:space-y-12">
        {/* Editorial Index Node Tag */}
        

        {/* Headline Word Reveal (Uniquely styled) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-1.5 text-left"
        >
          {['DIGITAL', 'EXPERIENCES', 'THAT DRIVE', 'RESULTS'].map((text, idx) => (
            <div key={idx} className="overflow-hidden h-[11vw] md:h-[6.5vw] flex items-center pr-2">
              <motion.h1
                variants={lineVariants}
                className={`text-[11vw] md:text-[6.3vw] font-display font-black leading-[0.9] tracking-tighter ${
                  idx === 2
                    ? 'text-[#F037A5]'
                    : idx === 3
                    ? 'text-[#CDF564] pl-0 md:pl-0.5'
                    : 'text-white'
                }`}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Description & Buttons Subgrid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start max-w-5xl">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#888888] text-base md:text-lg leading-relaxed font-light">
              We build luxury brands, next-generation websites, and automation systems that seamlessly merge strategic precision with futuristic technology.
            </p>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            className="md:col-span-6 flex flex-wrap gap-4 pt-2 md:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Start Project Trigger Button */}
            <button
              onClick={onOpenPlanner}
              className="relative px-8 py-4 bg-[#CDF564] text-black font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden group border border-[#CDF564] cursor-none"
              data-cursor="magnetic"
              id="hero-planner-btn"
            >
              {/* Slide overlay */}
              <span className="absolute inset-0 bg-[#4100F5] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1] z-0" />
              <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
                Start Your Project
              </span>
            </button>

            {/* View Projects Link Button */}
            <button
              onClick={onScrollToWork}
              className="px-8 py-4 bg-transparent border border-[#2A2A2A] hover:border-white text-white font-mono text-xs tracking-widest uppercase transition-colors duration-300 cursor-none"
              data-cursor="link"
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Visual Indicator Footer */}
      <motion.div
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-[#555555] select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={onScrollToWork}
          className="flex items-center gap-3 text-[10px] font-mono tracking-widest hover:text-[#CDF564] transition-colors focus:outline-none cursor-none"
          data-cursor="magnetic"
        >
          <span className="animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-[#CDF564]" />
          </span>
          SCROLL TO EXPLORE
        </button>
      </motion.div>
    </section>
  );
}
