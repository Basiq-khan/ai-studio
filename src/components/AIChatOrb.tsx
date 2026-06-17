import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, MessageSquareCode, Bot, Terminal, TerminalSquare, AlertCircle } from 'lucide-react';

interface PreloadAdvice {
  id: string;
  prompt: string;
  response: string;
}

const CONSOLE_PROMPTS: PreloadAdvice[] = [
  {
    id: "vibe",
    prompt: "RUN STRATEGIC VIBE CHECK",
    response: "ANALYSIS COMPLETED // Aesthetic index is highly concentrated in Klein Blue (#4100F5) and Citric Green (#CDF564). Layout geometry represents high-end modular Swiss brutalism. Vibe density status: EXCESSIVE CREATIVE FREQUENCY."
  },
  {
    id: "slogan",
    prompt: "GENERATE DRIFT SLOGAN",
    response: "GENERATED: 'ELASTIC DEVIATION // MONOLITHIC COGNITION'. Dynamic recommendations: Suitable for high-speed multi-chain web deployment and luxury biotech brands."
  },
  {
    id: "metrics",
    prompt: "INSPECT ACTIVE GRAPHICS MEMORY",
    response: "NODES: 168 ACTIVE // DRAW-CALL TIME: 1.4ms // RENDER ENGINES: WebGL/Canvas2D active. Custom interactive cursor coordinate feeds are fully matched and repelling particle vectors properly."
  },
  {
    id: "manifesto",
    prompt: "DUMP DIGITAL MANIFESTO",
    response: "DIRECTIVE: We represent Alive Digitally. We believe in extreme typographical scale ratios, structural mathematical predictability, and absolute high-intensity color impacts. There is no middle-ground."
  }
];

export default function AIChatOrb() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [consoleLog, setConsoleLog] = useState<string>("SYSTEM LISTENING... SELECT A COGNITIVE CO-PROCESSOR INPUT.");
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptSelect = (promptObj: PreloadAdvice) => {
    if (isTyping) return;
    setIsTyping(true);
    setActiveTab(promptObj.id);
    setConsoleLog("");

    let currentText = "";
    let chunkIdx = 0;
    const fullResponse = `${promptObj.response}`;

    // Elegant character-by-character retro typing effect
    const typingTimer = setInterval(() => {
      if (chunkIdx < fullResponse.length) {
        currentText += fullResponse.charAt(chunkIdx);
        setConsoleLog(currentText);
        chunkIdx++;
      } else {
        clearInterval(typingTimer);
        setIsTyping(false);
      }
    }, 12);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <AnimatePresence>
        
        {/* Expanded retro brutalist console */}
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-2rem)] bg-[#0C0C0C]/95 border border-[#202020] p-6 shadow-2xl rounded-sm text-white flex flex-col justify-between"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            {/* Header console */}
            <div className="flex items-center justify-between border-b border-gray-900 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#CDF564] animate-pulse" />
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-[#CDF564] font-bold uppercase">
                    ALIVE CREATIVE ENGINE v1.0
                  </h4>
                  <p className="text-[8px] font-mono text-gray-500 uppercase">
                    Active Strategic Co-Designer
                  </p>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  setActiveTab(null);
                  setConsoleLog("SYSTEM LISTENING... SELECT A COGNITIVE CO-PROCESSOR INPUT.");
                }}
                className="p-1.5 border border-dashed border-gray-850 hover:border-[#CDF564] hover:text-[#CDF564] transition-colors rounded-sm cursor-none focus:outline-none"
                data-cursor="link"
                aria-label="Close Agent Console"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Simulated Live CRT terminal console */}
            <div className="relative bg-black border border-gray-900 p-4 h-40 overflow-y-auto mb-4 font-mono text-[10px] text-gray-400 select-text leading-relaxed">
              <div className="absolute top-0 right-0 p-1.5 pointer-events-none opacity-20 select-none">
                <TerminalSquare className="w-3 h-3 text-white" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[#3c3c3c] block">CONNECTED MODULE: AGENT_CO_AUTEUR</span>
                <span className="text-gray-500 flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#4100F5] rounded-full" />
                  INITIALIZED: SUCCESS [2026.06.16]
                </span>
                
                <span className="text-white border-t border-gray-900 pt-2 block mt-2 whitespace-pre-wrap">
                  {consoleLog || "SYNTHESIZING SYSTEM SEQUENCE..."}
                  {isTyping && <span className="inline-block w-1.5 h-3 bg-[#CDF564] ml-1 animate-pulse" />}
                </span>
              </div>
            </div>

            {/* Quick Trigger Preset Action Chips */}
            <div className="space-y-2">
              <span className="text-[8px] font-mono tracking-wider text-gray-500 uppercase block pl-0.5">
                EXECUTE COGNITIVE DIRECTIVE PHALANX
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                {CONSOLE_PROMPTS.map((prompt) => {
                  const isActive = activeTab === prompt.id;
                  return (
                    <button
                      key={prompt.id}
                      onClick={() => handlePromptSelect(prompt)}
                      disabled={isTyping}
                      className={`text-[9.5px] font-mono text-left py-2 px-3 border transition-all duration-300 focus:outline-none cursor-none truncate ${
                        isActive
                          ? 'border-[#CDF564] bg-[#CDF564]/5 text-[#CDF564] font-bold'
                          : 'border-gray-900 bg-black/40 text-gray-400 hover:border-gray-600 hover:text-white'
                      }`}
                      data-cursor="link"
                    >
                      {prompt.prompt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* System warning/status logs */}
            <div className="mt-4 pt-3 border-t border-gray-950 flex items-center justify-between text-[7.5px] font-mono text-gray-600">
              <div className="flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-gray-600" />
                <span>SAFETY BOUNDS PROTOCOL ACTIVE</span>
              </div>
              <span className="text-[#CDF564]">COGNITION 100%</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Rotating Interactive Neural Core */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black border border-[#202020] rounded-full flex items-center justify-center cursor-none focus:outline-none shadow-2xl relative group overflow-visible"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        data-cursor="magnetic"
      >
        {/* Core glow background blur */}
        <div className="absolute inset-[-6px] bg-[#CDF564] rounded-full blur-[14px] opacity-15 group-hover:opacity-40 transition-opacity duration-300 anim-pulse-slow pointer-events-none" />
        <div className="absolute inset-[-10px] bg-[#4100F5] rounded-full blur-[18px] opacity-10 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

        {/* Morphing math orbital rings */}
        <motion.div
          className="absolute inset-1.5 border border-dashed border-[#CDF564]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-3 border border-dotted border-[#F037A5]/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />

        {/* Center Sparkle graphic */}
        <div className="relative z-10 text-[#CDF564] group-hover:text-white transition-colors duration-300">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
      </motion.button>
    </div>
  );
}
