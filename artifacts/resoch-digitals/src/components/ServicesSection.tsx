import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    number: "01",
    name: "The Trend-Surfer",
    role: "Social Media Strategy",
    tagline: "Rethinking 'Content' as 'Culture'",
    desc: "Moving faster than the speed of the algorithm, this speedster spots viral waves before they crest. Armed with Omni-Present vision, they dominate every timeline. Arch-nemesis: 'The Cringe.'",
    imageBW: "/images/team/trend-surfer.png",
    imageColor: "/images/team/trend-surfer.png",
  },
  {
    number: "02",
    name: "Doctor Hypnosis",
    role: "Copy & Design Production",
    tagline: "Rethinking 'Content' as 'Investment'",
    desc: "Using psionic aesthetics and telepathic headlines, this illusionist seizes total control of the user's attention. Battles 'Boring Content' with a single, mind-bending snap.",
    imageBW: "/images/team/doctor-hypnosis.png",
    imageColor: "/images/team/doctor-hypnosis.png",
  },
  {
    number: "03",
    name: "The Reality-Warper",
    role: "Visual Production",
    tagline: "Rethinking 'Videos' as 'Experiences'",
    desc: "Wielding a lens forged from pure cinematic power, they bend mundane reality into blockbuster epics. Origin story: fell into a vat of 4K resolution.",
    imageBW: "/images/team/reality-warper.png",
    imageColor: "/images/team/reality-warper.png",
  },
  {
    number: "04",
    name: "The Shadow Operative",
    role: "SEO",
    tagline: "Rethinking 'Search' as 'Answers'",
    desc: "A master of stealth who lurks in the digital backend, hacking the Google Matrix. Infiltrates Page One silently, neutralizing competitors.",
    imageBW: "/images/team/shadow-operative.png",
    imageColor: "/images/team/shadow-operative.png",
  },
  {
    number: "05",
    name: "The Cyber-Sniper",
    role: "Performance Marketing",
    tagline: "Rethinking 'Spend' as 'Investment'",
    desc: "Bionic aim locked on ROI, targeting high-value leads with zero wasted ammo on vanity metrics. Surgical precision ad spend.",
    imageBW: "/images/team/cyber-sniper.png",
    imageColor: "/images/team/cyber-sniper.png",
  },
  {
    number: "06",
    name: "Captain Aegis",
    role: "Brand Management",
    tagline: "Your reputation, on a strategy",
    desc: "The indestructible shield-bearer, standing firm against internet negativity and cancel culture. Deploys Reputation Forcefield against PR disasters.",
    imageBW: "/images/team/captain-aegis.png",
    imageColor: "/images/team/captain-aegis.png",
  },
  {
    number: "07",
    name: "Websites That Convert",
    role: "Web Development",
    tagline: "More than a pretty face. A 24/7 salesperson.",
    desc: "If your site is mid, your customers are ghosting. We build aesthetic, glitch-free interfaces that pass the vibe check and secure the bag.",
    imageBW: "/images/team/web-developer.png",
    imageColor: "/images/team/web-developer.png",
  },
];

/* Individual card with B&W → Color transition on hover (desktop) and scroll into view (mobile) */
function ServiceCard({
  service,
  i,
  isHovered,
  isActive,
  onPointerEnter,
  onPointerLeave,
  onClick,
}: {
  service: typeof services[0];
  i: number;
  isHovered: boolean;
  isActive: boolean;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement>(null);
  /* useInView: fires true when 60% of the card is in viewport — great for mobile scroll reveal */
  const inViewport = useInView(cardRef, { margin: "-10% 0px -10% 0px" });

  /* Show color if: hovered (desktop), active (tapped), or scrolled-into-view (mobile) */
  const showColor = isHovered || isActive || inViewport;

  return (
    <motion.button
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ delay: i * 0.05, duration: 0.35 }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
      className={`group relative rounded-xl overflow-hidden border text-left cursor-pointer focus:outline-none transition-colors duration-300 ${
        showColor ? "border-primary" : "border-white/10"
      }`}
      data-testid={`card-service-${i}`}
      aria-label={`${service.name} – ${service.role}`}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-black">
        {/* B&W base image (always rendered, fades out when color shows) */}
        <img
          src={service.imageBW}
          alt={service.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out will-change-[opacity,filter,transform] grayscale brightness-60 ${
            showColor ? "opacity-0 scale-105" : "opacity-100 scale-100"
          }`}
        />
        {/* Color image (fades in on hover/in-view) */}
        <img
          src={service.imageColor}
          alt={service.name}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out will-change-[opacity,transform] brightness-105 ${
            showColor ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Number badge */}
        <span className="absolute top-2 left-2 text-[10px] font-mono font-bold text-primary/80 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full z-10">
          {service.number}
        </span>

        {/* Tap hint on mobile */}
        <span className="md:hidden absolute top-2 right-2 text-[9px] font-bold text-white/40 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded-full z-10 uppercase tracking-wide">
          tap
        </span>

        {/* Orange border glow */}
        <div
          className={`absolute inset-0 transition-opacity duration-400 pointer-events-none ring-inset ring-2 ring-primary/50 rounded-xl ${
            showColor ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Label */}
      <div className="p-2.5 md:p-4 bg-black">
        <p className="text-primary text-[9px] md:text-xs font-bold uppercase tracking-widest mb-0.5 truncate">
          {service.role}
        </p>
        <h3
          className={`text-xs md:text-base lg:text-lg font-serif font-bold leading-snug transition-colors duration-300 ${
            showColor ? "text-primary" : "text-white"
          }`}
        >
          {service.name}
        </h3>
      </div>
    </motion.button>
  );
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const active = activeId !== null ? services[activeId] : null;

  return (
    <section id="services" className="py-16 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(#FF8858_1px,transparent_1px),linear-gradient(90deg,#FF8858_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-14"
        >
          <p className="text-primary text-[11px] font-bold uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            Meet the Team.
          </h2>
          <p className="text-white/40 mt-2 text-xs md:text-sm">
            Tap a character to learn more.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              i={i}
              isHovered={hoveredId === i}
              isActive={activeId === i}
              onPointerEnter={() => setHoveredId(i)}
              onPointerLeave={() => setHoveredId(null)}
              onClick={() => {
                setActiveId(i);
                setHoveredId(null);
              }}
            />
          ))}
        </div>
      </div>

      {/* Detail Panel — bottom sheet on mobile, centered modal on desktop */}
      <AnimatePresence>
        {active !== null && activeId !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveId(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              className="fixed bottom-0 left-0 right-0 z-50 md:inset-0 md:flex md:items-center md:justify-center md:p-6"
            >
              <div className="relative bg-[#0d0d0d] border-t border-white/10 md:border md:border-primary/30 rounded-t-2xl md:rounded-2xl overflow-hidden w-full md:max-w-xl max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
                {/* Drag pill */}
                <div className="md:hidden sticky top-0 bg-[#0d0d0d] pt-3 pb-1 flex justify-center z-10">
                  <div className="w-9 h-1 bg-white/25 rounded-full" />
                </div>

                {/* Close */}
                <button
                  onClick={() => setActiveId(null)}
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-200"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                <div className="flex flex-col md:flex-row">
                  {/* Color image in modal */}
                  <div className="w-full md:w-48 shrink-0 aspect-square relative">
                    <img
                      src={active.imageColor}
                      alt={active.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* Text */}
                  <div className="p-5 md:p-7 flex flex-col justify-center">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                      {active.number} — {active.role}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1">
                      {active.name}
                    </h3>
                    <p className="text-primary/70 italic text-xs md:text-sm mb-3">"{active.tagline}"</p>
                    <p className="text-white/65 text-sm leading-relaxed mb-5">
                      {active.desc}
                    </p>
                    <a
                      href="#contact"
                      onClick={() => setActiveId(null)}
                      className="inline-flex items-center gap-2 bg-primary text-black font-bold px-5 py-2.5 rounded-full text-sm hover:bg-white transition-colors duration-300 self-start"
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
