import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Cpu, Sliders, RefreshCw, Zap, Copy, Check, Eye } from 'lucide-react';

interface AIResult {
  slogan: string;
  tagline: string;
  persona: string;
  gridSpecs: string;
  colorMix: string[];
  wireframeNodes: { x: number; y: number; label: string }[];
}

const GENERATIVE_PRESETS: Record<string, Record<string, AIResult>> = {
  biotech: {
    cyberpunk: {
      slogan: "BIOLOGICAL CELLULAR RECEPTOR REPRINTING",
      tagline: "Unleashing neon-infused epidermal repair matrices guided by smart synthetic neural algorithms.",
      persona: "Clinical, high-adrenaline, futuristic organic",
      gridSpecs: "5-COL CYLINDRICAL DEVIATION // STAGE 4 ACTIVE",
      colorMix: ["#CDF564", "#0B0B0B", "#F037A5", "#98F0E1"],
      wireframeNodes: [
        { x: 30, y: 30, label: "Cell Matrix Feed" },
        { x: 70, y: 30, label: "DNA Resynthesis" },
        { x: 50, y: 65, label: "Dermal Influx" },
        { x: 30, y: 85, label: "Luminescence Spec" },
        { x: 70, y: 85, label: "Pulse Gateway" },
      ]
    },
    swiss: {
      slogan: "CHRONOMETRIC EPIDERMAL BALANCE INDEX",
      tagline: "Ultra-precise Swiss biotech micro-emulsions balanced with structured, high-contrast, zero-noise architecture.",
      persona: "Hyper-minimal, editorial, silent luxury",
      gridSpecs: "12-COL FIXED RIGID METRIC // ZERO OFFSET",
      colorMix: ["#FFFFFF", "#0B0B0B", "#4100F5", "#CDF564"],
      wireframeNodes: [
        { x: 50, y: 25, label: "H1 Display Title" },
        { x: 30, y: 55, label: "Metric Col 01" },
        { x: 70, y: 55, label: "Metric Col 02" },
        { x: 50, y: 85, label: "Neutral Core Node" },
      ]
    },
    psychedelic: {
      slogan: "EPIDERMAL SYNAPTIC COLOR INTRUSION",
      tagline: "Hallucinogenic organic sensory explosions triggering high-velocity dermal regeneration patterns.",
      persona: "Rebellious, sensory overload, maximalist",
      gridSpecs: "SINE WAVE MODULATION FLUID // STAGGERED",
      colorMix: ["#F037A5", "#FF4632", "#CDF564", "#4100F5"],
      wireframeNodes: [
        { x: 25, y: 25, label: "Vortex Loop" },
        { x: 75, y: 40, label: "Intrusion Path" },
        { x: 35, y: 70, label: "Acid Serum Spec" },
        { x: 65, y: 85, label: "Kinetic Out" },
      ]
    }
  },
  fintech: {
    cyberpunk: {
      slogan: "ALGORITHMIC VELOCITY HEDGE CONTROLS",
      tagline: "Autonomous neural trading grids routing deep multi-millisecond liquidity through localized cryptographic networks.",
      persona: "High-speed, tactical, encrypted raw tech",
      gridSpecs: "HEX PROTOCOL DUAL-LATENCY GRID // PORT 3000",
      colorMix: ["#98F0E1", "#4100F5", "#FF4632", "#0B0B0B"],
      wireframeNodes: [
        { x: 20, y: 20, label: "Orderbook Pool" },
        { x: 80, y: 20, label: "Fills Canvas" },
        { x: 50, y: 50, label: "Neural Flow Bridge" },
        { x: 80, y: 80, label: "Risk Sentinel" },
      ]
    },
    swiss: {
      slogan: "MONETARY SYSTÈMATIQUE SANS LIMITES",
      tagline: "Purified capital ledger optimization combining mathematical predictability with Swiss structural layout design.",
      persona: "Institutional, monolithic, absolute grid precision",
      gridSpecs: "SWISS METRIC SYMMETRIC LEDGER // NO BEZIERS",
      colorMix: ["#FFFFFF", "#1E1E1E", "#4100F5", "#CDF564"],
      wireframeNodes: [
        { x: 50, y: 20, label: "Aesthetic Cap Header" },
        { x: 25, y: 50, label: "Ledger Row A" },
        { x: 75, y: 50, label: "Ledger Row B" },
        { x: 50, y: 80, label: "Verify Integrity" },
      ]
    },
    psychedelic: {
      slogan: "QUANTUM ASSET COSMIC FLOW ENGINE",
      tagline: "Deconstructive financial mechanics visualizer translating absolute capital movements into fluid, sensory waves.",
      persona: "Disruptive, mind-bending, liquid economics",
      gridSpecs: "FLUID DEFORMATION CANVAS // INFINITE RECURSION",
      colorMix: ["#FF4632", "#F037A5", "#CDF564", "#98F0E1"],
      wireframeNodes: [
        { x: 50, y: 50, label: "Quantum Center Singular" },
        { x: 20, y: 30, label: "Flow Orbit 1" },
        { x: 80, y: 70, label: "Flow Orbit 2" },
      ]
    }
  },
  web3: {
    cyberpunk: {
      slogan: "METAVERSE SPATIAL BIO-HELMET COGNITION",
      tagline: "Interfacing physical neuro-receptors with biometric decentralized apparel lines utilizing localized zk-SNARK triggers.",
      persona: "Decentralized, tactile, high-tech rebel",
      gridSpecs: "NFT ANCHOR GRID // ZERO-KNOWLEDGE PROOF INDEX",
      colorMix: ["#FF4632", "#CDF564", "#4100F5", "#F037A5"],
      wireframeNodes: [
        { x: 50, y: 20, label: "Spatial Head Mount" },
        { x: 30, y: 50, label: "NFC Biosensor" },
        { x: 70, y: 50, label: "ZKP Cipher Unit" },
        { x: 50, y: 80, label: "Synthesize Garment" },
      ]
    },
    swiss: {
      slogan: "DECENTRALIZED CHRONOLOGY COMPONENT SYSTEM",
      tagline: "Perfect typographical scaling ratios meeting structural blockchain smart contracts. Designed for absolute modularity.",
      persona: "Systematic, clean, industrial architectural",
      gridSpecs: "6-COL RECTILINEAR SMART LEDGER",
      colorMix: ["#FFFFFF", "#0B0B0B", "#CDF564", "#4100F5"],
      wireframeNodes: [
        { x: 33, y: 33, label: "Block Module Left" },
        { x: 67, y: 33, label: "Block Module Right" },
        { x: 50, y: 75, label: "Consensus Node" },
      ]
    },
    psychedelic: {
      slogan: "HYPER-DIMENSIONAL WEARABLE RIPPLE STATE",
      tagline: "Psychedelic spatial clothing fabrics that warp, breathe, and animate according to social blockchain activity scores.",
      persona: "Ecstatic, fluid-shifting, digital hyper-state",
      gridSpecs: "CHROMATIC ABERRATION MARGIN METRIC // AKTIV",
      colorMix: ["#F037A5", "#98F0E1", "#CDF564", "#0B0B0B"],
      wireframeNodes: [
        { x: 50, y: 30, label: "Interactive Fluid Collar" },
        { x: 30, y: 65, label: "Sleeve Warp Node L" },
        { x: 70, y: 65, label: "Sleeve Warp Node R" },
      ]
    }
  }
};

export default function AILab() {
  const [industry, setIndustry] = useState<'biotech' | 'fintech' | 'web3'>('biotech');
  const [aesthetic, setAesthetic] = useState<'cyberpunk' | 'swiss' | 'psychedelic'>('cyberpunk');
  const [isSynthesizing, setIsSynthesizing] = useState<boolean>(false);
  const [synStep, setSynStep] = useState<number>(0);
  const [generatedResult, setGeneratedResult] = useState<AIResult>(GENERATIVE_PRESETS.biotech.cyberpunk);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Sliders for Funky Ribbon Motion Synthesis
  const [ribbonSpeed, setRibbonSpeed] = useState<number>(1.2);
  const [ribbonFrequency, setRibbonFrequency] = useState<number>(0.015);
  const [ribbonAmplitude, setRibbonAmplitude] = useState<number>(55);
  const [particleDensity, setParticleDensity] = useState<number>(15);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Math-driven Neon Ribbons Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 360);

    let phase = 0;

    // Local state particles for ribbons
    const ribbonParticles: Array<{ x: number; y: number; s: number; alpha: number; speed: number; col: string }> = [];

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 600;
      height = canvas.height = 360;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.fillStyle = 'rgba(11, 11, 11, 0.16)'; // Fluid movement trail
      ctx.fillRect(0, 0, width, height);

      phase += 0.01 * ribbonSpeed;

      // Draw Funky Grid Background lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const stepGrid = 40;
      for (let x = 0; x < width; x += stepGrid) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw mathematical Sine-wave curves with distinct funky palettes
      const waveColors = ['#CDF564', '#F037A5', '#4100F5'];
      const waveOffsets = [0, Math.PI / 3, (2 * Math.PI) / 3];

      waveColors.forEach((color, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        for (let x = 0; x < width; x += 5) {
          // Combination of sin/cos for funky motion behavior
          const y =
            height / 2 +
            Math.sin(x * ribbonFrequency + phase + waveOffsets[idx]) * ribbonAmplitude +
            Math.cos(x * 0.003 - phase * 0.5) * (ribbonAmplitude * 0.3);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);

          // Add random floating glowing spores occasionally matching particle density
          if (idx === 0 && Math.random() < 0.008 * particleDensity && ribbonParticles.length < 150) {
            ribbonParticles.push({
              x,
              y,
              s: Math.random() * 2.5 + 1,
              alpha: Math.random() * 0.6 + 0.4,
              speed: Math.random() * 0.6 + 0.2,
              col: color
            });
          }
        }
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      });

      // Update and draw particles dancing around sine tubes
      for (let pIdx = ribbonParticles.length - 1; pIdx >= 0; pIdx--) {
        const p = ribbonParticles[pIdx];
        p.x += p.speed * 1.5;
        // Keep moving upwards slightly for cinematic dispersion
        p.y += (Math.random() - 0.5) * 1.5 - 0.1; 
        p.alpha -= 0.004;

        if (p.x > width || p.alpha <= 0) {
          ribbonParticles.splice(pIdx, 1);
          continue;
        }

        ctx.fillStyle = p.col;
        ctx.shadowColor = p.col;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [ribbonSpeed, ribbonFrequency, ribbonAmplitude, particleDensity]);

  // Handle Dynamic Synthesis Sequence
  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setSynStep(1);

    const stepIntervals = [800, 1600, 2400];
    stepIntervals.forEach((time, index) => {
      setTimeout(() => {
        setSynStep(index + 2);
        if (index === stepIntervals.length - 1) {
          setGeneratedResult(GENERATIVE_PRESETS[industry][aesthetic]);
          setIsSynthesizing(false);
        }
      }, time);
    });
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  return (
    <section
      id="ailabs"
      className="relative bg-[#080808] py-24 md:py-36 border-t border-[#121212] overflow-hidden"
    >
      {/* Absolute tech vector shapes grid floating in background */}
      <div className="absolute top-1/2 left-[-100px] w-96 h-96 bg-[#4100F5]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[-100px] bottom-1/2 w-96 h-96 bg-[#CDF564]/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Index Indicator */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-[#181818] pb-10 mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#CDF564] font-bold">05 \\</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#888888]">COGNITIVE OPERATIONS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white uppercase">
              AI CREATIVE <span className="text-[#F037A5]">LABS</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 text-xs md:text-sm leading-relaxed font-light">
            An active procedural design-system sandbox simulating neural layouts, custom copywriting prompts, and mathematical core motion curves.
          </p>
        </div>

        {/* Dynamic Inner Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT PANEL: The AI Strategy Engine Controls & Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#121212]/50 border border-[#1E1E1E] p-8 space-y-8 rounded-sm select-none">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-[#CDF564] animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
                  AUTONOMOUS DIRECTIVE SYNTH MONITOR
                </span>
              </div>

              {/* Step 1: Niche target */}
              <div className="space-y-3">
                <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                  01 // SPECIFY NICHE TARGET SECTOR
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['biotech', 'fintech', 'web3'] as const).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setIndustry(tag)}
                      className={`py-3.5 px-1 border font-mono text-[10px] uppercase tracking-wider text-center transition-all duration-300 focus:outline-none cursor-none ${
                        industry === tag
                          ? 'border-[#CDF564] bg-[#CDF564]/5 text-[#CDF564] font-bold'
                          : 'border-[#1E1E1E] bg-black/40 text-gray-500 hover:border-gray-800'
                      }`}
                      data-cursor="link"
                    >
                      {tag === 'biotech' && 'BIOTECH SKIN'}
                      {tag === 'fintech' && 'FINTECH FLOW'}
                      {tag === 'web3' && 'WEB3 BRAND'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Stylistic Wave Direction */}
              <div className="space-y-3 pt-2">
                <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                  02 // DIRECTIVE STYLISTIC AESTHETIC
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['cyberpunk', 'swiss', 'psychedelic'] as const).map((aest) => (
                    <button
                      key={aest}
                      onClick={() => setAesthetic(aest)}
                      className={`py-3.5 px-1 border font-mono text-[10px] uppercase tracking-wider text-center transition-all duration-300 focus:outline-none cursor-none ${
                        aesthetic === aest
                          ? 'border-[#F037A5] bg-[#F037A5]/5 text-[#F037A5] font-bold'
                          : 'border-[#1E1E1E] bg-black/40 text-gray-500 hover:border-gray-800'
                      }`}
                      data-cursor="link"
                    >
                      {aest === 'cyberpunk' && 'CYBERPUNK'}
                      {aest === 'swiss' && 'SWISS RATIONAL'}
                      {aest === 'psychedelic' && 'PSYCHEDELIC'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategic CTA Launch */}
              <div className="pt-4">
                <button
                  onClick={handleSynthesize}
                  disabled={isSynthesizing}
                  className="w-full py-4 bg-[#CDF564] hover:bg-white text-black font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 transition-colors duration-300 focus:outline-none disabled:opacity-45 cursor-none"
                  data-cursor="magnetic"
                  id="ai-labs-synthesize-btn"
                >
                  <Sparkles className="w-4 h-4 text-black shrink-0" />
                  <span>SYNTHESIZE COGNITIVE TOKENS</span>
                </button>
              </div>
            </div>

            {/* Spec metadata footer */}
            <div className="border-t border-[#1E1E1E] pt-6 flex justify-between items-center text-[8px] font-mono text-[#555555]">
              <span>NODE RECEPTOR_ v3.0</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CDF564] animate-ping" />
                <span>STATE: LISTENING</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Generative Response Area */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#121212]/30 border border-[#1E1E1E] p-8 rounded-sm select-none relative overflow-hidden min-h-[460px]">
            <AnimatePresence mode="wait">
              {isSynthesizing ? (
                /* Step Processing Animations */
                <motion.div
                  key="synthesizing_state"
                  className="absolute inset-0 bg-black/95 z-20 flex flex-col items-center justify-center p-8 space-y-6 select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Cpu className="w-10 h-10 text-[#CDF564] animate-spin" style={{ animationDuration: '3s' }} />
                  
                  <div className="space-y-2 text-center max-w-xs">
                    <span className="text-xs font-mono text-[#CDF564] tracking-widest uppercase animate-pulse">
                      {synStep === 1 && "QUERYING DIGITAL CELL MATRIX..."}
                      {synStep === 2 && "EVALUATING DESIGN PHYLUM..."}
                      {synStep === 3 && "INJECTING CYPHERS INTO GRID..."}
                      {synStep === 4 && "RENDERING WIREFRAME BLUEPRINTS..."}
                    </span>
                    <p className="text-[10px] text-gray-500 font-mono">
                      {synStep === 1 && "Triggering artificial semantic weights across model nodes..."}
                      {synStep === 2 && "Formulating balanced ratios of typography tracking & visual weights limit..."}
                      {synStep === 3 && "Injecting custom visual properties: Aquamarine, Citric, Fuchsia neon..."}
                      {synStep === 4 && "Finalizing vector layouts rendering indices..."}
                    </p>
                  </div>
                </motion.div>
              ) : (
                /* Generative Outputs Showcase Panel */
                <motion.div
                  key="result_active"
                  className="space-y-8 flex-grow flex flex-col justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    
                    {/* Slogan details column (col 7) */}
                    <div className="md:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-[#CDF564]" />
                        <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                          AI BRAND MANIFESTO OUTCOME
                        </span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase font-bold block">
                          CORE DIRECTIVE
                        </span>
                        <h4 className="text-xl md:text-2xl font-display font-black text-white leading-tight uppercase tracking-tight">
                          {generatedResult.slogan}
                        </h4>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block">
                          SEMANTIC COPY SUGGESTION
                        </span>
                        <p className="text-xs text-gray-400 leading-relaxed font-light">
                          {generatedResult.tagline}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-t border-gray-900 pt-4 text-[10px] font-mono">
                        <div>
                          <span className="text-gray-600 block uppercase">Brand Tone</span>
                          <span className="text-[#CDF564] font-bold uppercase">{generatedResult.persona}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 block uppercase">Responsive Grid System</span>
                          <span className="text-white uppercase shrink-0 truncate max-w-full block">{generatedResult.gridSpecs}</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Wireframe Visualizer Canvas Column (col 5) */}
                    <div className="md:col-span-5 bg-black/60 border border-neutral-900 p-4 rounded-sm flex flex-col justify-between relative min-h-[220px]">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-900 select-none">
                        <span className="text-[8px] font-mono text-gray-500">WIREFRAME RADICAL_V1</span>
                        <Eye className="w-3 h-3 text-[#F037A5]" />
                      </div>

                      {/* Visual active coordinate blueprint node frame */}
                      <div className="relative w-full h-32 bg-black flex-grow mt-3 border border-dashed border-gray-900 overflow-hidden">
                        
                        {/* Interactive Vector lines joining nodes */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current text-[#4100F5]/50 active-wire-svg">
                          {generatedResult.wireframeNodes.map((n, idx) => {
                            if (idx === generatedResult.wireframeNodes.length - 1) return null;
                            const nextN = generatedResult.wireframeNodes[idx + 1];
                            return (
                              <line
                                key={idx}
                                x1={`${n.x}%`}
                                y1={`${n.y}%`}
                                x2={`${nextN.x}%`}
                                y2={`${nextN.y}%`}
                                strokeWidth="0.8"
                                className="animate-pulse"
                              />
                            );
                          })}
                        </svg>

                        {/* Node point visual bubbles */}
                        {generatedResult.wireframeNodes.map((node, nIdx) => (
                          <motion.div
                            key={nIdx}
                            className="absolute cursor-none group"
                            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                            whileHover={{ scale: 1.25 }}
                          >
                            <span className="absolute w-2 h-2 rounded-full bg-[#CDF564] block" />
                            <span className="absolute w-2 h-2 rounded-full bg-[#CDF564] block animate-ping opacity-60" />
                            
                            {/* Hidden floating pop name info tag on node hover */}
                            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-neutral-950 text-[7px] font-mono text-white p-1 whitespace-nowrap border border-neutral-800 pointer-events-none transition-opacity">
                              {node.label} ({node.x}, {node.y})
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <span className="text-[7px] font-mono text-[#555555] text-right mt-2 block select-none">
                        PROTACTIVE GRID LAYOUT MODEL GENERATOR
                      </span>
                    </div>

                  </div>

                  {/* Dynamic generative color swatches */}
                  <div className="border-t border-gray-900 pt-6">
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase block mb-3">
                      GENERATED DESIGN-TOKEN SWATCHES (CLICK HEX TO COPY)
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {generatedResult.colorMix.map((color) => (
                        <button
                          key={color}
                          onClick={() => copyToClipboard(color)}
                          className="flex flex-col text-left bg-black/40 border border-[#1E1E1E] p-2.5 transition-all hover:border-[#CDF564] focus:outline-none cursor-none relative"
                          data-cursor="copy"
                        >
                          <div className="w-full h-6 mb-1.5" style={{ backgroundColor: color }} />
                          <div className="flex items-center justify-between w-full">
                            <span className="text-[9px] font-mono text-white tracking-tight">{color}</span>
                            {copiedColor === color ? (
                              <Check className="w-3 h-3 text-[#CDF564]" />
                            ) : (
                              <Copy className="w-2.5 h-2.5 text-gray-600 transition-colors" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Funky Wave Creator Section / Ribbon Waver Section (Funky Motion) */}
        <div className="mt-16 bg-[#121212]/30 border border-[#1E1E1E] p-8 rounded-sm select-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Wave parameters controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#F037A5]" />
                  <span className="text-xs font-mono tracking-widest text-[#F037A5] uppercase font-bold">
                    NEURAL WAVEFORM SYNTH ENGINE
                  </span>
                </div>
                <p className="text-[10px] text-gray-500 font-mono leading-relaxed">
                  Modify mathematical wave harmonics, speeds, and vectors physically to reshape spatial visual flow coordinates in real-time.
                </p>
              </div>

              {/* Slider Amplitude */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>WAVE AMPLITUDE (RESONANCE)</span>
                  <span className="text-[#CDF564] font-bold">{ribbonAmplitude}px</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="140"
                  value={ribbonAmplitude}
                  onChange={(e) => setRibbonAmplitude(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-none outline-none accent-[#CDF564]"
                />
              </div>

              {/* Slider Frequency */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>WAVE FREQUENCY (SYNAPSE INTERCONNECT)</span>
                  <span className="text-[#CDF564] font-bold">{(ribbonFrequency * 1000).toFixed(1)}Hz</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={ribbonFrequency * 1000}
                  onChange={(e) => setRibbonFrequency(Number(e.target.value) / 1000)}
                  className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-none outline-none accent-[#CDF564]"
                />
              </div>

              {/* Slider Speed */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>SYNTH SPEED (TIME CONVOLUTION)</span>
                  <span className="text-[#CDF564] font-bold">{ribbonSpeed.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={ribbonSpeed * 10}
                  onChange={(e) => setRibbonSpeed(Number(e.target.value) / 10)}
                  className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-none outline-none accent-[#CDF564]"
                />
              </div>

              {/* Slider Density */}
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-gray-400">
                  <span>PARTICLE DENSITY (SPATIAL SPORES)</span>
                  <span className="text-[#CDF564] font-bold">{particleDensity}</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={particleDensity}
                  onChange={(e) => setParticleDensity(Number(e.target.value))}
                  className="w-full h-1 bg-neutral-900 rounded-lg appearance-none cursor-none outline-none accent-[#CDF564]"
                />
              </div>
            </div>

            {/* Right side: Interactive Waveforms Canvas View */}
            <div className="lg:col-span-8 bg-black border border-[#1E1E1E] rounded-sm overflow-hidden flex flex-col justify-end relative h-[360px]">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
              
              {/* Overlay grid tags */}
              <div className="p-4 relative z-10 flex justify-between items-center text-[8px] font-mono text-[#555555] pointer-events-none select-none">
                <span>WAVEFORM CHANNELS: 3 // MULTIPLEX ACTIVE</span>
                <span>MATH: SIN(X * F + Φ) * A + COS(X * F') // GRID INDEX v1.2</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
