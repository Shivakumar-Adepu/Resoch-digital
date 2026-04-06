import { motion } from "framer-motion";

export default function ProcessSection() {
  const standardSteps = ["Brief", "Template", "Post", "Hope"];
  const resochSteps = ["Brief", "Research", "Re-Think", "Disrupt", "Dominate"];

  return (
    <section id="process" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
            The Art of the <span className="text-primary">Re-Think</span>.
          </h2>
        </motion.div>

        {/* Desktop: side by side. Mobile: stacked with Re.Soch first */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-0 gap-8 relative">

          {/* Center Divider Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-primary origin-top"
            />
          </div>

          {/* Re.Soch Way — order-1 on mobile (shows first), normal on desktop */}
          <div className="order-1 md:order-2 md:pl-12">
            <h3 className="text-sm md:text-lg font-bold text-primary text-center mb-6 md:mb-8 uppercase tracking-wider drop-shadow-[0_0_8px_rgba(255,136,88,0.5)]">
              Re.Soch Way
            </h3>
            <div className="flex flex-col items-center gap-3 md:gap-4">
              {resochSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="w-full"
                >
                  <div
                    className={`rounded-lg p-3 md:p-4 text-center font-medium text-sm md:text-base transition-all duration-300 hover:-translate-y-1 ${
                      step === "Re-Think"
                        ? "bg-primary border-2 border-primary text-black font-bold shadow-[0_0_20px_rgba(255,136,88,0.4)]"
                        : "bg-white/5 border border-primary/30 text-white hover:border-primary hover:shadow-[0_0_10px_rgba(255,136,88,0.2)]"
                    }`}
                  >
                    {step}
                  </div>
                  {i < resochSteps.length - 1 && (
                    <div className="flex justify-center py-1 text-primary/60 text-lg">↓</div>
                  )}
                </motion.div>
              ))}
              <div className="mt-3">
                <motion.span
                  animate={{ boxShadow: ["0 0 10px rgba(255,136,88,0.3)", "0 0 20px rgba(255,136,88,0.6)", "0 0 10px rgba(255,136,88,0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block bg-primary/20 text-primary border border-primary/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                >
                  Iconic
                </motion.span>
              </div>
            </div>
          </div>

          {/* Standard Way — order-2 on mobile (shows second), normal on desktop */}
          <div className="order-2 md:order-1 md:pr-12">
            <h3 className="text-sm md:text-lg font-bold text-white/40 text-center mb-6 md:mb-8 uppercase tracking-wider">
              Standard Way
            </h3>
            <div className="flex flex-col items-center gap-3 md:gap-4">
              {standardSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="w-full"
                >
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 text-center text-white/40 font-medium text-sm md:text-base">
                    {step}
                  </div>
                  {i < standardSteps.length - 1 && (
                    <div className="flex justify-center py-1 text-white/20 text-lg">↓</div>
                  )}
                </motion.div>
              ))}
              <div className="mt-3 relative inline-block">
                <span className="bg-white/10 text-white/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Boring
                </span>
                <div className="absolute left-0 top-1/2 w-full h-[2px] bg-primary/60 -rotate-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
