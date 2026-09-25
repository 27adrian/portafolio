import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Experiencia", href: "#experience" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 px-6 pt-6 md:px-10 lg:px-16"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-red-500/40" />

            <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>

          <span className="text-[13px] font-semibold tracking-[0.22em] text-white">
            ADRIÁN
            <span className="text-white/30">.DEV</span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[11px] uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-red-500 transition-all duration-300 group-hover:w-5" />
            </a>
          ))}
        </div>

        {/* CONTACT */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors duration-300 hover:text-white md:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-500/70 transition-all duration-300 group-hover:scale-150 group-hover:bg-red-500" />
          Hablemos
          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/60 transition-all duration-300 hover:border-red-500/30 hover:text-white lg:hidden"
        >
          {menuOpen ? (
            <X size={17} strokeWidth={1.5} />
          ) : (
            <Menu size={17} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              y: -15,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 border-y border-white/[0.07] bg-[#080808]/95 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.35,
                  }}
                  className="group flex items-center justify-between border-b border-white/[0.05] px-2 py-4"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[9px] text-white/15">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                  />
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 flex items-center justify-between px-2 py-3 text-sm text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  Hablemos
                </span>

                <ArrowUpRight size={16} strokeWidth={1.5} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
