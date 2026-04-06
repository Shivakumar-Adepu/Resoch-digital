import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  const headlineWords = ["Don't", "Just", "Think.", "Re.Soch."];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3141207/3141207-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient behind video in case it fails */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 to-black -z-10" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-16"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tighter mb-6 flex flex-wrap justify-center gap-x-4">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6, ease: "easeOut" }}
              className={word === "Re.Soch." ? "text-primary" : "text-white"}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-medium leading-relaxed mb-10"
        >
          Scroll-stopping strategy. Data-driven drama. We engineer digital performance that pops, clicks, and converts.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="relative inline-flex items-center justify-center bg-primary text-black px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:scale-105 transition-transform duration-300"
          data-testid="button-hero-cta"
        >
          <span className="relative z-10">Rethink Your Strategy</span>
          <span className="absolute inset-0 rounded-full animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] ring-4 ring-primary/50" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="text-white/50 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
