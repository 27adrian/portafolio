import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 1.5,
        ease: "easeOut",
      }}
      className="fixed left-0 right-0 top-0 z-50 px-6 py-6 md:px-12 lg:px-20"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.2em] text-white"
        >
          ADRIAN.DEV
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
