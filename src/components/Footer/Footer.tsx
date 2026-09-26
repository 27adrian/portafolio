import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full pb-8 pt-6">
      <div className="container-page">
        <div className="border-t border-white/[0.08] pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                © {new Date().getFullYear()} Adrián Muñoz Roncal
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                CASA GRANDE - ASCOPE - LA LIBERTAD - PERU
              </span>
              <motion.a
                href="mailto:dadrianmr.27@gmail.com"
                whileHover={{ y: -2 }}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-colors duration-300 hover:border-red-500/40 hover:bg-red-500 hover:text-black"
              >
                <Mail size={15} strokeWidth={1.5} />
              </motion.a>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 border-t border-white/[0.04] pt-5 text-[8px] uppercase tracking-[0.25em] text-white/10 sm:flex-row sm:items-center sm:justify-between">
            <span>ADRIAN.DEV</span>

            <span>React · TypeScript · Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
