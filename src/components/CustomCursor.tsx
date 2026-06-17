import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<string>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Global listener for hover attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Traverse up to find data-cursor attribute
      const cursorTarget = target.closest('[data-cursor]');
      
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor') || 'default';
        const text = cursorTarget.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('over', handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 14,
      height: 14,
      backgroundColor: 'transparent',
      border: '2px solid #FFFFFF',
      borderRadius: '50%',
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: 'transparent',
      border: '1.5px solid #CDF564',
      borderRadius: '50%',
    },
    view: {
      width: 84,
      height: 84,
      backgroundColor: '#CDF564',
      border: 'none',
      borderRadius: '50%',
    },
    magnetic: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(205, 245, 100, 0.15)',
      border: '1px solid #CDF564',
      borderRadius: '50%',
    },
    arrow: {
      width: 48,
      height: 48,
      backgroundColor: '#FFFFFF',
      border: 'none',
      borderRadius: '50%',
    }
  } as any;

  const currentVariant = variants[cursorType] || variants.default;

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: currentVariant.width,
        height: currentVariant.height,
      }}
      animate={{
        width: currentVariant.width,
        height: currentVariant.height,
        backgroundColor: currentVariant.backgroundColor,
        border: currentVariant.border,
        borderRadius: currentVariant.borderRadius,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
    >
      {cursorType === 'view' && (
        <span className="text-[10px] font-mono font-semibold tracking-wider text-black select-none pointer-events-none">
          {cursorText || 'VIEW'}
        </span>
      )}
      {cursorType === 'arrow' && (
        <svg
          className="w-4 h-4 text-black transform -rotate-45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      )}
    </motion.div>
  );
}
