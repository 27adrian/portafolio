import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
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
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10 lg:pt-6"
    >
      <nav
        className="
          mx-auto flex h-[58px] items-center justify-between
          rounded-full border border-white/[0.08]
          bg-[#090909]/75 px-4
          shadow-[0_15px_50px_rgba(0,0,0,0.3)]
          backdrop-blur-2xl
          sm:px-5
          lg:h-[62px] lg:px-6
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="#hero"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-red-500/30" />

            <span className="relative h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
          </span>

          <span className="text-[12px] font-semibold tracking-[0.2em] text-white sm:text-[13px]">
            ADRIÁN
            <span className="text-white/25">.DEV</span>
          </span>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group relative flex items-center gap-2
                rounded-full px-4 py-2.5
                text-[10px] uppercase tracking-[0.18em]
                text-white/35
                transition-all duration-300
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              <span
                className="
                  text-[8px] text-white/[0.14]
                  transition-colors duration-300
                  group-hover:text-red-500/70
                "
              >
                0{index + 1}
              </span>

              {item.label}

              <span
                className="
                  absolute bottom-1.5 left-1/2
                  h-px w-0 -translate-x-1/2
                  bg-red-500
                  shadow-[0_0_8px_rgba(239,68,68,0.5)]
                  transition-all duration-300
                  group-hover:w-5
                "
              />
            </a>
          ))}
        </div>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}

        <a
          href="#contact"
          className="
            group hidden items-center gap-2
            rounded-full
            border border-white/[0.08]
            bg-white/[0.025]
            px-4 py-2.5
            text-[10px] uppercase tracking-[0.18em]
            text-white/45
            transition-all duration-300
            hover:border-red-500/30
            hover:bg-red-500/[0.06]
            hover:text-white
            md:flex
          "
        >
          <span
            className="
              h-1.5 w-1.5 rounded-full
              bg-red-500/70
              shadow-[0_0_8px_rgba(239,68,68,0.5)]
              transition-transform duration-300
              group-hover:scale-125
            "
          />
          Hablemos
          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="
              transition-transform duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </a>

        {/* =====================================================
            MOBILE BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            border border-white/[0.08]
            bg-white/[0.03]
            text-white/60
            transition-all duration-300
            hover:border-red-500/30
            hover:bg-red-500/[0.05]
            hover:text-white
            lg:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X size={17} strokeWidth={1.5} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={17} strokeWidth={1.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto mt-3 max-w-[1280px]
              overflow-hidden
              rounded-[1.5rem]
              border border-white/[0.08]
              bg-[#090909]/95
              shadow-[0_30px_80px_rgba(0,0,0,0.5)]
              backdrop-blur-2xl
              lg:hidden
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Navegación
                </span>
              </div>

              <span className="text-[9px] tracking-[0.2em] text-white/10">
                01 — 04
              </span>
            </div>

            {/* Links */}

            <div className="p-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.045,
                    duration: 0.3,
                  }}
                  className="
                    group flex items-center justify-between
                    rounded-xl px-4 py-4
                    transition-colors duration-300
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex items-center gap-4">
                    <span className="w-5 text-[9px] text-white/15">
                      0{index + 1}
                    </span>

                    <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      text-white/15
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-red-500
                    "
                  />
                </motion.a>
              ))}
            </div>

            {/* Contact */}

            <motion.a
              href="#contact"
              onClick={closeMenu}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
              }}
              className="
                mx-3 mb-3 flex items-center justify-between
                rounded-xl
                border border-red-500/20
                bg-red-500/[0.06]
                px-4 py-4
                text-sm text-white
                transition-all duration-300
                hover:bg-red-500/[0.1]
              "
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                Hablemos
              </span>

              <ArrowUpRight size={16} strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
