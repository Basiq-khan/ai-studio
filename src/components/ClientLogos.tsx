import { CLIENTS } from '../data';

export default function ClientLogos() {
  return (
    <section className="relative bg-[#0B0B0B] py-12 md:py-16 border-t border-b border-[#181818] overflow-hidden select-none">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

      {/* Marquee double track wraps */}
      <div className="flex overflow-hidden">
        <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap">
          {CLIENTS.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="inline-flex items-center gap-3 group cursor-none"
              data-cursor="magnetic"
            >
              <span className="text-gray-700 font-mono text-xs font-semibold">// 0{idx + 1}</span>
              <span className="text-sm md:text-[15px] font-display font-black tracking-widest text-[#555555] uppercase transition-colors duration-300 group-hover:text-[#CDF564] select-none">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate track to preserve seamless horizontal flow */}
        <div className="flex gap-16 md:gap-24 animate-marquee whitespace-nowrap" aria-hidden="true">
          {CLIENTS.map((client, idx) => (
            <div
              key={`${client.id}-dup-${idx}`}
              className="inline-flex items-center gap-3 group cursor-none"
              data-cursor="magnetic"
            >
              <span className="text-gray-700 font-mono text-xs font-semibold">// 0{idx + 1}</span>
              <span className="text-sm md:text-[15px] font-display font-black tracking-widest text-[#555555] uppercase transition-colors duration-300 group-hover:text-[#CDF564] select-none">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
