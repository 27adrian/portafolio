import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="px-6 pb-8 pt-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d]/80 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div className="flex flex-col gap-10 border-b border-white/10 p-6 md:flex-row md:items-end md:justify-between md:p-8 lg:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/35">
              Disponible para proyectos
            </p>

            <motion.a
              href="#hero"
              whileHover={{ x: 4 }}
              className="mt-4 block text-lg font-semibold tracking-[0.22em] text-white md:text-xl"
            >
              ADRIÁN.DEV
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:dadrianmr.27@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/80 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500 hover:text-black"
            >
              <Mail size={15} />
              Email
            </a>

            <a
              href="https://github.com/27adrian"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              GitHub
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href="https://www.linkedin.com/in/adri%C3%A1n-mu%C3%B1oz-roncal-06258533b/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/70 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              LinkedIn
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6 py-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between md:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Adrián Muñoz Roncal.</p>

          <p>Diseñado y construido con React + pasión.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
