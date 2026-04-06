import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16"
        >
          {/* Left Column: Headline */}
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
              We love the <br />
              <span className="relative inline-block text-primary">
                'Delete'
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "110%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  className="absolute left-[-5%] top-1/2 h-[6px] bg-primary -rotate-6 transform -translate-y-1/2"
                />
              </span>{" "}
              button.
            </h2>
          </div>

          {/* Right Column: Body */}
          <div className="text-lg md:text-xl text-white/70 leading-relaxed">
            <p className="mb-6">
              Why do we call ourselves Re.Soch? Because we believe the best work comes from challenging our own ideas. We research. We ideate. Then we look at the whiteboard and ask, 'Is this good, or is it just safe?'
            </p>
            <p>
              If it's safe, we{" "}
              <motion.span
                initial={{ color: "rgba(255,255,255,0.7)" }}
                whileInView={{ color: "#FF8858" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="font-bold"
              >
                kill it
              </motion.span>. We{" "}
              <motion.span
                initial={{ color: "rgba(255,255,255,0.7)" }}
                whileInView={{ color: "#FF8858" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 1.0, duration: 0.3 }}
                className="font-bold"
              >
                rethink
              </motion.span>{" "}
              the narrative, the design, and the data until we find the angle your{" "}
              <motion.span
                initial={{ color: "rgba(255,255,255,0.7)" }}
                whileInView={{ color: "#FF8858" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="font-bold"
              >
                competitors missed
              </motion.span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
        >
          <img 
            src="/images/about.jpg" 
            alt="Creative team brainstorming" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 hover:bg-transparent transition-colors duration-700" />
        </motion.div>
      </div>
    </section>
  );
}
