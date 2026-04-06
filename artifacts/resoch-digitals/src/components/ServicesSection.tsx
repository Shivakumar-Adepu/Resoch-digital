import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    number: "01",
    name: "The Trend-Surfer",
    role: "Social Media Strategy",
    tagline: "Rethinking 'Content' as 'Culture'",
    desc: "Moving faster than the speed of the algorithm, this speedster spots viral waves before they crest. Armed with Omni-Present vision, they dominate every timeline. Arch-nemesis: 'The Cringe.'",
  },
  {
    number: "02",
    name: "Doctor Hypnosis",
    role: "Copy & Design Production",
    tagline: "Rethinking 'Spend' as 'Investment'",
    desc: "Using psionic aesthetics and telepathic headlines, this illusionist seizes total control of the user's attention. Battles 'Boring Content' with a single, mind-bending snap.",
  },
  {
    number: "03",
    name: "The Reality-Warper",
    role: "Visual Production",
    tagline: "Rethinking 'Videos' as 'Experiences'",
    desc: "Wielding a lens forged from pure cinematic power, they bend mundane reality into blockbuster epics. Origin story: fell into a vat of 4K resolution.",
  },
  {
    number: "04",
    name: "The Shadow Operative",
    role: "SEO",
    tagline: "Rethinking 'Search' as 'Answers'",
    desc: "A master of stealth who lurks in the digital backend, hacking the Google Matrix. Infiltrates Page One silently, neutralizing competitors.",
  },
  {
    number: "05",
    name: "The Cyber-Sniper",
    role: "Performance Marketing",
    tagline: "Rethinking 'Spend' as 'Investment'",
    desc: "Bionic aim locked on ROI, targeting high-value leads with zero wasted ammo on vanity metrics. Surgical precision ad spend.",
  },
  {
    number: "06",
    name: "Captain Aegis",
    role: "Brand Management",
    tagline: "Your reputation, on a strategy",
    desc: "The indestructible shield-bearer, standing firm against internet negativity and cancel culture. Deploys Reputation Forcefield against PR disasters.",
  },
  {
    number: "07",
    name: "Websites That Convert",
    role: "Web Development",
    tagline: "More than a pretty face. A 24/7 salesperson.",
    desc: "If your site is mid, your customers are ghosting. We build aesthetic, glitch-free interfaces that pass the vibe check and secure the bag.",
  },
];

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-black relative">
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(#FF8858_1px,transparent_1px),linear-gradient(90deg,#FF8858_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-5 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Meet the Team.
          </h2>
        </motion.div>

        {/* Accordion-style service list — great on both mobile and desktop */}
        <div className="divide-y divide-white/10 border-t border-white/10">
          {services.map((service, i) => {
            const isExpanded = expandedId === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                data-testid={`card-service-${i}`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : i)}
                  className="w-full text-left py-5 md:py-7 flex items-center gap-4 md:gap-6 group focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <span className="text-primary text-xs font-mono font-bold shrink-0 w-7 opacity-60 group-hover:opacity-100 transition-opacity">
                    {service.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300 truncate">
                        {service.name}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-primary/60 transition-colors shrink-0">
                        {service.role}
                      </span>
                    </div>
                    {!isExpanded && (
                      <p className="text-white/40 text-sm italic mt-0.5 hidden sm:block truncate">
                        "{service.tagline}"
                      </p>
                    )}
                  </div>

                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? "border-primary bg-primary text-black"
                      : "border-white/20 text-white/40 group-hover:border-primary/50 group-hover:text-primary"
                  }`}>
                    {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 pl-11 md:pl-14">
                        <p className="text-primary italic text-sm font-medium mb-3">
                          "{service.tagline}"
                        </p>
                        <p className="text-white/70 text-base leading-relaxed max-w-2xl">
                          {service.desc}
                        </p>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-primary hover:gap-3 transition-all duration-200"
                        >
                          Work with us →
                        </a>
                      </div>
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
