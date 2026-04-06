import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    number: "01",
    name: "The Trend-Surfer",
    role: "Social Media Strategy",
    tagline: "Rethinking 'Content' as 'Culture'",
    desc: "Moving faster than the speed of the algorithm, this speedster spots viral waves before they crest. Armed with Omni-Present vision, they dominate every timeline. Arch-nemesis: 'The Cringe.'",
    image: "/images/team/trend-surfer.png",
  },
  {
    number: "02",
    name: "Doctor Hypnosis",
    role: "Copy & Design Production",
    tagline: "Rethinking 'Content' as 'Investment'",
    desc: "Using psionic aesthetics and telepathic headlines, this illusionist seizes total control of the user's attention. Battles 'Boring Content' with a single, mind-bending snap.",
    image: "/images/team/doctor-hypnosis.png",
  },
  {
    number: "03",
    name: "The Reality-Warper",
    role: "Visual Production",
    tagline: "Rethinking 'Videos' as 'Experiences'",
    desc: "Wielding a lens forged from pure cinematic power, they bend mundane reality into blockbuster epics. Origin story: fell into a vat of 4K resolution.",
    image: "/images/team/reality-warper.png",
  },
  {
    number: "04",
    name: "The Shadow Operative",
    role: "SEO",
    tagline: "Rethinking 'Search' as 'Answers'",
    desc: "A master of stealth who lurks in the digital backend, hacking the Google Matrix. Infiltrates Page One silently, neutralizing competitors.",
    image: "/images/team/shadow-operative.png",
  },
  {
    number: "05",
    name: "The Cyber-Sniper",
    role: "Performance Marketing",
    tagline: "Rethinking 'Spend' as 'Investment'",
    desc: "Bionic aim locked on ROI, targeting high-value leads with zero wasted ammo on vanity metrics. Surgical precision ad spend.",
    image: "/images/team/cyber-sniper.png",
  },
  {
    number: "06",
    name: "Captain Aegis",
    role: "Brand Management",
    tagline: "Your reputation, on a strategy",
    desc: "The indestructible shield-bearer, standing firm against internet negativity and cancel culture. Deploys Reputation Forcefield against PR disasters.",
    image: "/images/team/captain-aegis.png",
  },
  {
    number: "07",
    name: "Websites That Convert",
    role: "Web Development",
    tagline: "More than a pretty face. A 24/7 salesperson.",
    desc: "If your site is mid, your customers are ghosting. We build aesthetic, glitch-free interfaces that pass the vibe check and secure the bag.",
    image: "/images/team/web-developer.png",
  },
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const active = activeId !== null ? services[activeId] : null;

  /* A card is "lit" (colorful) when it is hovered OR selected */
  const isLit = (i: number) => hoveredId === i || activeId === i;

  return (
    <section id="services" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(#FF8858_1px,transparent_1px),linear-gradient(90deg,#FF8858_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
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
          <p className="text-white/50 mt-3 text-sm md:text-base">
            Hover or tap a character to reveal them in full colour.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              /* Pointer events — covers desktop hover & mobile touch */
              onPointerEnter={() => setHoveredId(i)}
              onPointerLeave={() => setHoveredId(null)}
              onClick={() => {
                setActiveId(i);
                setHoveredId(null);
              }}
              className={`group relative rounded-xl overflow-hidden border text-left cursor-pointer transition-all duration-300 focus:outline-none ${
                isLit(i)
                  ? "border-primary shadow-[0_0_28px_rgba(255,136,88,0.4)]"
                  : "border-white/10 hover:border-primary/40"
              }`}
              data-testid={`card-service-${i}`}
              aria-label={`${service.name} – ${service.role}`}
            >
              {/* Character Illustration with grayscale ↔ colour transition */}
              <div className="relative aspect-square overflow-hidden bg-black">
                <motion.img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  /* Framer-motion handles the filter smoothly on every device */
                  animate={{
                    filter: isLit(i) ? "grayscale(0%) brightness(1.05)" : "grayscale(100%) brightness(0.85)",
                    scale: isLit(i) ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />

                {/* Gradient overlay — slightly stronger when greyscale */}
                <motion.div
                  animate={{ opacity: isLit(i) ? 0.55 : 0.75 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"
                />

                {/* Orange glow ring that appears on lit state */}
                <motion.div
                  animate={{ opacity: isLit(i) ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 ring-inset ring-2 ring-primary/40 rounded-xl pointer-events-none"
                />

                {/* Number badge */}
                <span className="absolute top-3 left-3 text-xs font-mono font-bold text-primary/70 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {service.number}
                </span>

                {/* Colour reveal label — only shows when lit */}
                <AnimatePresence>
                  {isLit(i) && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-black bg-primary px-2 py-0.5 rounded-full"
                    >
                      Tap to view
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Info below image */}
              <div className="p-3 md:p-4 bg-black">
                <p className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 truncate">
                  {service.role}
                </p>
                <motion.h3
                  animate={{ color: isLit(i) ? "#FF8858" : "#ffffff" }}
                  transition={{ duration: 0.4 }}
                  className="text-sm md:text-base lg:text-lg font-serif font-bold leading-snug"
                >
                  {service.name}
                </motion.h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail Modal / Bottom Sheet */}
      <AnimatePresence>
        {active !== null && activeId !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 80, scale: 0.96 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 md:inset-0 md:flex md:items-center md:justify-center z-50 md:p-6"
            >
              <div className="relative bg-[#0a0a0a] border border-white/10 md:border-primary/30 rounded-t-3xl md:rounded-2xl overflow-hidden w-full md:max-w-2xl md:shadow-[0_0_60px_rgba(255,136,88,0.25)]">
                {/* Close */}
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-black flex items-center justify-center transition-all duration-200 text-white"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {/* Drag handle (mobile) */}
                <div className="md:hidden w-10 h-1 bg-white/20 rounded-full mx-auto mt-3" />

                <div className="flex flex-col md:flex-row">
                  {/* Full-colour image in modal (always colour) */}
                  <div className="w-full md:w-52 lg:w-60 shrink-0 aspect-square md:aspect-auto relative">
                    <motion.img
                      src={active.image}
                      alt={active.name}
                      initial={{ filter: "grayscale(100%)" }}
                      animate={{ filter: "grayscale(0%)" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
                      {active.number} — {active.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                      {active.name}
                    </h3>
                    <p className="text-primary/80 italic text-sm mb-4">"{active.tagline}"</p>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                      {active.desc}
                    </p>
                    <a
                      href="#contact"
                      onClick={() => setActiveId(null)}
                      className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-full text-sm hover:bg-white transition-colors duration-300 self-start"
                    >
                      Work with us →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
