import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import TechKey from "../../components/TechKey/TechKey";
import { technologies, type Technology } from "../../data/technologies";

function TechStack() {
  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology | null>(null);

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.05] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              Tech stack
            </p>
          </div>

          <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Tools behind
            <br />
            <span className="text-white/20">the work.</span>
          </h2>
        </motion.div>

        {/* Keyboard */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0a0a0a] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:p-8"
        >
          {/* Keyboard top reflection */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Top row */}
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.slice(0, 4).map((technology) => (
              <TechKey
                key={technology.name}
                technology={technology}
                onSelect={setSelectedTechnology}
                isSelected={selectedTechnology?.name === technology.name}
              />
            ))}
          </div>

          {/* Second row */}
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {technologies.slice(4, 8).map((technology) => (
              <TechKey
                key={technology.name}
                technology={technology}
                onSelect={setSelectedTechnology}
                isSelected={selectedTechnology?.name === technology.name}
              />
            ))}
          </div>

          {/* Third row */}
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {technologies.slice(8, 12).map((technology) => (
              <TechKey
                key={technology.name}
                technology={technology}
                onSelect={setSelectedTechnology}
                isSelected={selectedTechnology?.name === technology.name}
              />
            ))}
          </div>

          {/* Fourth row */}
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {technologies.slice(12, 16).map((technology) => (
              <TechKey
                key={technology.name}
                technology={technology}
                onSelect={setSelectedTechnology}
                isSelected={selectedTechnology?.name === technology.name}
              />
            ))}
          </div>

          {/* Space bar */}
          <div className="mt-5 flex justify-center">
            <motion.div
              whileHover={{ y: 2 }}
              className="
                flex
                h-16
                w-full
                max-w-xl
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-[#111111]
                shadow-[0_6px_0_#050505]
              "
            >
              <span className="text-xs font-medium uppercase tracking-[0.5em] text-white/20">
                ADRIAN.DEV
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Selected technology */}
        <AnimatePresence mode="wait">
          {selectedTechnology && (
            <motion.div
              key={selectedTechnology.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="mx-auto mt-10 max-w-2xl text-center"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-red-500/70">
                {selectedTechnology.category}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                {selectedTechnology.name}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/40">
                {selectedTechnology.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint */}
        {!selectedTechnology && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-center text-[10px] uppercase tracking-[0.35em] text-white/20"
          >
            Click a technology
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default TechStack;
