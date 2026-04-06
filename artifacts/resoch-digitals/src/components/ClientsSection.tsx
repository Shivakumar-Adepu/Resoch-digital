import { motion } from "framer-motion";

const clients = [
  { name: "Casselore", industry: "F&B", desc: "A modern culinary experience redefined.", image: "/images/client-1.jpg" },
  { name: "MYSA", industry: "Furniture", desc: "Premium minimalist interior design.", image: "/images/client-2.jpg" },
  { name: "Namishree", industry: "Real Estate", desc: "Luxury architecture and spaces.", image: "/images/client-3.jpg" },
  { name: "Mowzz", industry: "Sound & Light", desc: "Professional event illumination.", image: "/images/client-4.jpg" },
  { name: "Pooja Architect", industry: "Architecture", desc: "Visionary structural design projects.", image: "/images/client-5.jpg" },
  { name: "SUYU", industry: "Cosmetics", desc: "High-end beauty and skincare.", image: "/images/client-6.jpg" },
];

export default function ClientsSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-white mb-16"
        >
          Brands That Trusted the <span className="text-primary">Re-Think</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 aspect-[4/3] cursor-pointer"
              data-testid={`card-client-${i}`}
            >
              {/* Background Image */}
              <img
                src={client.image}
                alt={client.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Permanent overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              
              {/* Bottom gradient overlay that slides up on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-black/50 to-transparent translate-y-[60%] group-hover:translate-y-[30%] transition-transform duration-500 ease-out" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {client.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300 mb-1 transform group-hover:-translate-y-2">
                  {client.name}
                </h3>
                <p className="text-white/70 text-sm transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 delay-100">
                  {client.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
