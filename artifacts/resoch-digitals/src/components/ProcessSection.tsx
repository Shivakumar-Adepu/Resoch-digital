import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function ProcessSection() {
  const standardSteps = ["Brief", "Template", "Post", "Hope"];
  const resochSteps = ["Brief", "Research", "Re-Think", "Disrupt", "Dominate"];

  return (
    <section id="process" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-white mb-20"
        >
          The Art of the <span className="text-primary">Re-Think</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Center Divider Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-primary origin-top"
            />
          </div>

          {/* Left Column: Standard Way */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white/50 text-center mb-8">The Standard Way</h3>
            <div className="space-y-6 flex flex-col items-center">
              {standardSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 w-full max-w-xs text-center text-white/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="relative z-10 font-medium">{step}</span>
                  {i < standardSteps.length - 1 && (
                    <ArrowDown className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/20 w-5 h-5 z-10" />
                  )}
                </motion.div>
              ))}
              <div className="mt-4 relative inline-block">
                <span className="bg-white/10 text-white/40 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Boring
                </span>
                <div className="absolute left-0 top-1/2 w-full h-[2px] bg-primary -rotate-12" />
              </div>
            </div>
          </div>

          {/* Right Column: Re.Soch Way */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary text-center mb-8 drop-shadow-[0_0_10px_rgba(255,136,88,0.5)]">The Re.Soch Way</h3>
            <div className="space-y-6 flex flex-col items-center">
              {resochSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`border rounded-lg p-4 w-full max-w-xs text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,136,88,0.3)] group ${
                    step === "Re-Think" ? "bg-primary border-primary text-black font-bold scale-105" : "bg-white/5 border-primary/30 text-white font-medium hover:border-primary"
                  }`}
                >
                  {step}
                  {i < resochSteps.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex justify-center text-primary group-hover:scale-125 transition-transform">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-4">
                <span className="bg-primary/20 text-primary border border-primary/50 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest animate-pulse shadow-[0_0_15px_rgba(255,136,88,0.4)]">
                  Iconic
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
