import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { label: "Brands Re.Soch'd", value: 500, suffix: "+", prefix: "" },
  { label: "Avg ROI", value: 10, suffix: "x", prefix: "" },
  { label: "Industries", value: 50, suffix: "+", prefix: "" },
  { label: "Campaigns", value: 200, suffix: "+", prefix: "" },
];

function CountUp({ to, suffix, prefix, inView }: { to: number; suffix: string; prefix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 2000, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      count.set(to);
    }
  }, [inView, to, count]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-black py-12 md:py-16 border-t border-b border-white/5">
      <div className="container mx-auto px-5 md:px-8 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-primary mb-1 tabular-nums">
                <CountUp to={stat.value} suffix={stat.suffix} prefix={stat.prefix} inView={inView} />
              </div>
              <p className="text-white/50 text-xs md:text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
