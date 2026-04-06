import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

const brands = [
  "MYSA",
  "NAMISHREE",
  "MOWZZ",
  "POOJA ARCHITECTS",
  "SUYU",
  "CASSELORE",
];

/* Triple the brands list for a seamless infinite loop */
const loopBrands = [...brands, ...brands, ...brands];

export default function TrustedBySection() {
  return (
    <section className="bg-black py-16 md:py-24 overflow-hidden border-t border-white/5">
      {/* Heading */}
      <div className="container mx-auto px-5 md:px-8 max-w-5xl mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Trusted By</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
            Brands That <span className="text-primary">Re.Soch'd</span> with Us
          </h2>
        </motion.div>
      </div>

      {/* Pac-Man eating row */}
      <div className="relative w-full overflow-hidden" style={{ height: 96 }}>
        {/* Horizontal track line */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none">
          <div className="w-full h-px bg-primary/10" />
        </div>

        {/* Brands scrolling right → left */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 flex items-center"
          style={{ width: "max-content" }}
          animate={{ x: ["0px", "-33.333%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {loopBrands.map((brand, i) => (
            <div key={i} className="flex items-center gap-4 px-6 md:px-10 flex-shrink-0">
              {/* Dot pellet */}
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                className="w-2 h-2 rounded-full bg-primary/70 flex-shrink-0"
              />
              <span className="text-white/55 font-black text-sm md:text-xl tracking-[0.2em] uppercase font-mono select-none whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Pac-Man fixed on the left */}
        <div className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20">
          <AnimatedPacMan />
        </div>

        {/* Left mask — brands appear to emerge from Pac-Man's mouth */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-black via-black/95 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      {/* Brand name pills below */}
      <div className="container mx-auto px-5 md:px-8 max-w-5xl mt-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.06, borderColor: "rgba(255,136,88,0.6)" }}
              className="px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-white/10 text-white/60 hover:text-white text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 cursor-default"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Pac-Man with chomping jaw animation */
function AnimatedPacMan() {
  return (
    <div className="relative" style={{ width: 52, height: 52 }}>
      {/* Glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ boxShadow: ["0 0 10px 2px rgba(255,200,0,0.4)", "0 0 22px 6px rgba(255,200,0,0.7)", "0 0 10px 2px rgba(255,200,0,0.4)"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pac-Man image with chomp animation — rotate upper half up/down */}
      <motion.img
        src={`${base}/images/pacman.jpg`}
        alt="Pac-Man"
        className="w-full h-full object-cover rounded-full"
        animate={{ rotate: [0, -10, 0] }}
        transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 0 8px rgba(255,200,0,0.6))" }}
      />
    </div>
  );
}
