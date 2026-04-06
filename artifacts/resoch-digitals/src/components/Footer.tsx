import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-primary pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <a href="#" className="text-3xl font-serif font-bold tracking-tighter mb-4">
              <span className="text-white">Re.Soch</span>
              <span className="text-primary">.Digitals</span>
            </a>
            <p className="text-white/60 font-medium max-w-xs">
              Don't Just Think. Re.Soch.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold mb-2">Connect</h4>
            <a href="mailto:hello@resoch.com" className="text-white/60 hover:text-primary transition-colors">hello@resoch.com</a>
            <a href="tel:+1234567890" className="text-white/60 hover:text-primary transition-colors">+1 (234) 567-890</a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">123 Innovation Drive, Tech City</a>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-bold mb-2">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300">
                <SiX size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300">
                <SiYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Resoch Digitals. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
