import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    name: "The Trend-Surfer",
    role: "Social Media Strategy",
    tagline: "Rethinking 'Content' as 'Culture'",
    desc: "Moving faster than the speed of the algorithm, this speedster spots viral waves before they crest. Armed with Omni-Present vision, they dominate every timeline. Arch-nemesis: 'The Cringe.'",
  },
  {
    name: "Doctor Hypnosis",
    role: "Copy & Design Production",
    tagline: "Rethinking 'Content' as 'Investment'",
    desc: "Using psionic aesthetics and telepathic headlines, this illusionist seizes total control of the user's attention. Battles 'Boring Content' with a single, mind-bending snap.",
  },
  {
    name: "The Reality-Warper",
    role: "Visual Production",
    tagline: "Rethinking 'Videos' as 'Experiences'",
    desc: "Wielding a lens forged from pure cinematic power, they bend mundane reality into blockbuster epics. Origin story: fell into a vat of 4K resolution.",
  },
  {
    name: "The Shadow Operative",
    role: "SEO",
    tagline: "Rethinking 'Search' as 'Answers'",
    desc: "A master of stealth who lurks in the digital backend, hacking the Google Matrix. Infiltrates Page One silently, neutralizing competitors.",
  },
  {
    name: "The Cyber-Sniper",
    role: "Performance Marketing",
    tagline: "Rethinking 'Spend' as 'Investment'",
    desc: "Bionic aim locked on ROI, targeting high-value leads with zero wasted ammo on vanity metrics. Surgical precision ad spend.",
  },
  {
    name: "Captain Aegis",
    role: "Brand Management",
    tagline: "Your reputation, on a strategy",
    desc: "The indestructible shield-bearer, standing firm against internet negativity and cancel culture. Deploys Reputation Forcefield against PR disasters.",
  },
  {
    name: "Websites That Convert",
    role: "Web Development",
    tagline: "More than a pretty face. A 24/7 salesperson.",
    desc: "If your site is mid, your customers are ghosting. We build aesthetic, glitch-free interfaces that pass the vibe check and secure the bag.",
  }
];

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-black relative">
      {/* Faint orange grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#FF8858_1px,transparent_1px),linear-gradient(90deg,#FF8858_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-white mb-16"
        >
          Meet the Team.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const isExpanded = expandedId === i;
            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setExpandedId(isExpanded ? null : i)}
                className={`bg-black border border-white/10 rounded-xl p-6 cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,136,88,0.2)] hover:border-primary/50 transition-all duration-300 flex flex-col group ${
                  i === services.length - 1 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                }`}
                data-testid={`card-service-${i}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-1 group-hover:scale-105 transform origin-left transition-transform">
                    {service.role}
                  </h3>
                  <div className="text-white/30 group-hover:text-primary transition-colors">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                <h4 className="text-2xl font-serif font-bold text-white mb-2">{service.name}</h4>
                <p className="text-white/60 font-medium italic text-sm mb-4">"{service.tagline}"</p>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/80 text-sm leading-relaxed mt-2 pt-4 border-t border-white/10">
                        {service.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
