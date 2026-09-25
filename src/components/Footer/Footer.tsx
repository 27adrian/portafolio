import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ x: 4 }}
            className="text-sm font-semibold tracking-[0.2em]"
          >
            ADRIAN.DEV
          </motion.a>

          {/* Social */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/27adrian"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              GitHub
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/adri%C3%A1n-mu%C3%B1oz-roncal-06258533b/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Adrian Muñoz Roncal.</p>

          <p>Designed & built with React.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
