import { useState } from "react";
import { motion } from "framer-motion";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formState.name) newErrors.name = true;
    if (!formState.email || !/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = true;
    if (!formState.service) newErrors.service = true;
    if (!formState.message) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black border-t border-white/10 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Form Side */}
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-8">
              Let's <span className="text-primary">Talk.</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({ ...formState, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: false });
                  }}
                  className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-white/20'} text-white px-4 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                  data-testid="input-name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) => {
                    setFormState({ ...formState, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: false });
                  }}
                  className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white px-4 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                  data-testid="input-email"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <select
                  value={formState.service}
                  onChange={(e) => {
                    setFormState({ ...formState, service: e.target.value });
                    if (errors.service) setErrors({ ...errors, service: false });
                  }}
                  className={`w-full bg-black border ${errors.service ? 'border-red-500' : 'border-white/20'} text-white/70 px-4 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none`}
                  data-testid="input-service"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Copy & Design">Copy & Design</option>
                  <option value="Visual Production">Visual Production</option>
                  <option value="SEO">SEO</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Brand Management">Brand Management</option>
                  <option value="Website">Website</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState({ ...formState, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: false });
                  }}
                  className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-white/20'} text-white px-4 py-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none`}
                  data-testid="input-message"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-primary text-black font-bold text-lg py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="button-submit-contact"
                >
                  {status === "loading" ? (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : status === "success" ? (
                    "Sent!"
                  ) : (
                    "Send It →"
                  )}
                </button>
                {status === "success" && (
                  <p className="text-primary text-center mt-4 font-medium" data-testid="text-success-msg">
                    Message sent! We'll get back to you.
                  </p>
                )}
              </motion.div>
            </form>
          </div>

          {/* Info Side */}
          <div className="flex flex-col justify-center lg:pl-12">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Reach Out</h4>
                <a href="mailto:hello@resoch.com" className="text-3xl text-white hover:text-primary transition-colors font-serif block mb-2">hello@resoch.com</a>
                <a href="tel:+1234567890" className="text-xl text-white/70 hover:text-primary transition-colors block">+1 (234) 567-890</a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-6">Socials</h4>
                <div className="flex gap-6">
                  <a href="#" className="text-white hover:text-primary hover:-translate-y-1 transition-all duration-300" data-testid="link-social-ig">
                    <SiInstagram size={28} />
                  </a>
                  <a href="#" className="text-white hover:text-primary hover:-translate-y-1 transition-all duration-300" data-testid="link-social-li">
                    <FaLinkedinIn size={28} />
                  </a>
                  <a href="#" className="text-white hover:text-primary hover:-translate-y-1 transition-all duration-300" data-testid="link-social-x">
                    <SiX size={28} />
                  </a>
                  <a href="#" className="text-white hover:text-primary hover:-translate-y-1 transition-all duration-300" data-testid="link-social-yt">
                    <SiYoutube size={32} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
