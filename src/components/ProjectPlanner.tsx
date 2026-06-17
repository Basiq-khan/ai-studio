import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Loader2, Sparkles, Send, ArrowRight } from 'lucide-react';
import { ProjectPlannerState } from '../types';

interface ProjectPlannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectPlanner({ isOpen, onClose }: ProjectPlannerProps) {
  const [formData, setFormData] = useState<ProjectPlannerState>({
    services: [],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const availableServices = [
    'Branding',
    'UI/UX Design',
    'Web Development',
    'Digital Marketing',
    'Automation',
    'AI Solutions',
  ];

  const budgets = [
    'Under $15,000',
    '$15,000 – $35,000',
    '$35,000 – $75,000',
    '$75,000+'
  ];

  const timelines = [
    'Within 1 Month',
    '1 – 3 Months',
    '3 – 6 Months',
    'Continuous Partnership'
  ];

  const toggleService = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const setBudget = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  const setTimeline = (timeline: string) => {
    setFormData(prev => ({ ...prev, timeline }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate luxury automation engine steps
    setLoadingStep(1);
    
    setTimeout(() => {
      setLoadingStep(2);
    }, 1000);

    setTimeout(() => {
      setLoadingStep(3);
    }, 2000);

    setTimeout(() => {
      setLoadingStep(4);
      setIsSubmitted(true);
    }, 3200);
  };

  const handleReset = () => {
    setFormData({
      services: [],
      budget: '',
      timeline: '',
      name: '',
      email: '',
      company: '',
      message: '',
    });
    setLoadingStep(0);
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" id="project-planner-container">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-over panel */}
          <motion.div
            className="relative w-full max-w-2xl bg-[#0B0B0B] border-l border-[#2A2A2A] h-full flex flex-col justify-between overflow-y-auto hide-scrollbar z-10 p-6 md:p-12 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220, mass: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#181818] pb-6 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#CDF564] uppercase font-semibold">Project Scoping Portal</span>
                <h3 className="text-2xl font-display font-extrabold text-white mt-1">START YOUR PROPOSAL</h3>
              </div>
              <button
                onClick={onClose}
                className="p-3 border border-[#2A2A2A] text-white hover:text-[#CDF564] hover:border-[#CDF564] rounded-full transition-colors cursor-none focus:outline-none"
                data-cursor="magnetic"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {loadingStep === 0 && !isSubmitted ? (
              /* Step Form */
              <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between gap-8">
                <div className="space-y-8">
                  {/* Services Needed */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                      01 \\ SELECT CAPABILITIES
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {availableServices.map(service => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`p-3 text-left border text-xs font-mono transition-all duration-300 flex items-center justify-between focus:outline-none cursor-none ${
                              isSelected
                                ? 'border-[#CDF564] bg-[#CDF564]/5 text-[#CDF564]'
                                : 'border-[#2A2A2A] bg-[#181818]/40 text-[#888888] hover:border-[#555555]'
                            }`}
                            data-cursor="link"
                          >
                            <span>{service}</span>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                      02 \\ TARGET SCALE INVESTMENT
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {budgets.map(budget => {
                        const isSelected = formData.budget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setBudget(budget)}
                            className={`p-2.5 text-center border text-[10px] sm:text-xs font-mono transition-all duration-300 focus:outline-none cursor-none ${
                              isSelected
                                ? 'border-[#CDF564] bg-[#CDF564]/5 text-[#CDF564]'
                                : 'border-[#2A2A2A] bg-[#181818]/40 text-[#888888] hover:border-[#555555]'
                            }`}
                            data-cursor="link"
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                      03 \\ TIMELINE EXPECTATION
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {timelines.map(timeline => {
                        const isSelected = formData.timeline === timeline;
                        return (
                          <button
                            key={timeline}
                            type="button"
                            onClick={() => setTimeline(timeline)}
                            className={`p-2.5 text-center border text-[10px] sm:text-xs font-mono transition-all duration-300 focus:outline-none cursor-none ${
                              isSelected
                                ? 'border-[#CDF564] bg-[#CDF564]/5 text-[#CDF564]'
                                : 'border-[#2A2A2A] bg-[#181818]/40 text-[#888888] hover:border-[#555555]'
                            }`}
                            data-cursor="link"
                          >
                            {timeline}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Text Inputs */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                      04 \\ ENTER CONTACT DETAILS
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[#181818]/50 border border-[#2A2A2A] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CDF564] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-[#181818]/50 border border-[#2A2A2A] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CDF564] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-[#181818]/50 border border-[#2A2A2A] px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CDF564] transition-colors"
                      />
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us briefly about the project scope, custom requirements, or integrations..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#181818]/50 border border-[#2A2A2A] p-4 text-sm text-white focus:outline-none focus:border-[#CDF564] transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-8 pt-6 border-t border-[#181818] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500">
                    * Required fields
                  </span>
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email}
                    className="px-8 py-3.5 bg-[#CDF564] text-black font-mono font-bold text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-white transition-colors duration-300 disabled:opacity-40 disabled:hover:bg-[#CDF564] cursor-none"
                    data-cursor="magnetic"
                  >
                    <span>SUBMIT PLATFORM AUDIT</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : !isSubmitted ? (
              /* Custom Animation Sequence */
              <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-6">
                <Loader2 className="w-12 h-12 text-[#CDF564] animate-spin" />
                <div className="text-center space-y-2">
                  <span className="text-xs font-mono tracking-widest text-[#CDF564] uppercase animate-pulse">
                    {loadingStep === 1 && 'ESTABLISHING SECURE CONNECTION_'}
                    {loadingStep === 2 && 'MAPPING STRATEGIC DESIGN TOKENS_'}
                    {loadingStep === 3 && 'GENERATING DIRECTIVE PRICING MODEL_'}
                  </span>
                  <p className="text-sm text-gray-400">
                    {loadingStep === 1 && 'Accessing alive digitally automation grid engines...'}
                    {loadingStep === 2 && 'Structuring customized tech stacks based on services chosen...'}
                    {loadingStep === 3 && 'Formulating execution roadmaps, milestone times, and audits...'}
                  </p>
                </div>
              </div>
            ) : (
              /* Complete State with Proposal Estimations */
              <motion.div
                className="flex-grow flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-6">
                  {/* Visual Success Header */}
                  <div className="p-8 bg-gradient-to-r from-[#CDF564]/10 to-transparent border border-[#CDF564]/20 flex items-start gap-4">
                    <div className="p-3 bg-[#CDF564] text-black rounded-full">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-lg text-white">PROPOSAL COMPILED SUCCESSFULLY</h4>
                      <p className="text-xs font-mono text-gray-400 mt-1">
                        Inquiry Hash: ALIVE-{Math.floor(Math.random() * 90000) + 10000}
                      </p>
                    </div>
                  </div>

                  {/* Projected Audit Output */}
                  <div className="space-y-4">
                    <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                      CUSTOM ESTIMATION SUMMARY
                    </span>
                    
                    <div className="bg-[#181818]/50 border border-[#2A2A2A] p-6 space-y-4">
                      {/* Grid Items */}
                      <div className="grid grid-cols-2 gap-4 border-b border-[#2A2A2A] pb-4">
                        <div>
                          <span className="text-[10px] font-mono text-[#555555] uppercase block">Lead Identity</span>
                          <span className="text-sm font-semibold text-white">{formData.name}</span>
                          {formData.company && <span className="text-xs text-gray-400 block">{formData.company}</span>}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#555555] uppercase block">Inquiry Channel</span>
                          <span className="text-sm font-semibold text-white select-all">{formData.email}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                        <div>
                          <span className="text-[10px] font-mono text-[#555555] uppercase block">Target Timeline</span>
                          <span className="text-xs font-semibold text-[#CDF564] tracking-wider uppercase">
                            {formData.timeline || 'Immediate Launch'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#555555] uppercase block">Assessed Tier</span>
                          <span className="text-xs font-semibold text-white tracking-wider uppercase">
                            {formData.budget || 'Standard Investment Scale'}
                          </span>
                        </div>
                      </div>

                      {/* Chosen Services */}
                      <div>
                        <span className="text-[10px] font-mono text-[#555555] uppercase block mb-1.5">Target Scope Selected</span>
                        <div className="col-span-2 flex flex-wrap gap-1.5">
                          {formData.services.length > 0 ? (
                            formData.services.map(s => (
                              <span key={s} className="text-[10px] font-mono px-2.5 py-1 bg-[#2A2A2A] text-white border border-gray-800 rounded-sm">
                                {s}
                              </span>
                            ))
                          ) : (
                            <span className="text-[10px] font-mono text-gray-400">Standard Consulting Scope</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block">
                        WHAT HAPPENS NEXT?
                      </span>
                      <p className="text-sm text-gray-400">
                        Our dynamic consulting team is evaluating your scoping selections at this moment. You will receive a direct, detailed proposal artifact via email in less than <span className="text-[#CDF564] font-semibold">12 business hours</span> to coordinate a live virtual kickoff.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#181818] flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-none focus:outline-none"
                    data-cursor="magnetic"
                  >
                    Reset & Configure Again
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 bg-[#181818] border border-[#2A2A2A] text-white font-mono text-xs tracking-widest uppercase hover:border-[#CDF564] hover:text-[#CDF564] transition-colors duration-300 cursor-none focus:outline-none"
                    data-cursor="magnetic"
                  >
                    Close Scoping portal
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
