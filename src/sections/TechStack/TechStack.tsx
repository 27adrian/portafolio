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
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[55%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.035] blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              Stack tecnológico
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Herramientas que
              <br />
              <span className="text-white/20">dan forma al trabajo.</span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-white/30 md:pb-2">
              Una selección de tecnologías que utilizo para construir productos
              modernos y escalables.
            </p>
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-20"
        >
          {/* Outer glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-red-600/[0.025] blur-3xl" />

          {/* Hardware frame */}
          <div className="relative rounded-[1.75rem] border border-white/[0.09] bg-[#0b0b0b] p-[1px] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            {/* Top reflection */}
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {/* Inner surface */}
            <div className="relative overflow-hidden rounded-[1.65rem] bg-[#0d0d0d] p-5 md:p-8 lg:p-10">
              {/* Ambient light */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.025] blur-[140px]" />

              {/* Keyboard + Information */}
              <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
                {/* Keyboard */}
                <div className="relative flex flex-col justify-center">
                  {/* Top row */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {technologies.slice(0, 4).map((technology) => (
                      <TechKey
                        key={technology.name}
                        technology={technology}
                        onSelect={setSelectedTechnology}
                        isSelected={
                          selectedTechnology?.name === technology.name
                        }
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
                        isSelected={
                          selectedTechnology?.name === technology.name
                        }
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
                        isSelected={
                          selectedTechnology?.name === technology.name
                        }
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
                        isSelected={
                          selectedTechnology?.name === technology.name
                        }
                      />
                    ))}
                  </div>
                </div>

                {/* Technology information */}
                <div className="relative flex min-h-[300px] items-center lg:pl-10">
                  <AnimatePresence mode="wait">
                    {selectedTechnology ? (
                      <motion.div
                        key={selectedTechnology.name}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -20,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="w-full"
                      >
                        {/* Icon */}
                        <div className="mb-8">
                          <div
                            className="h-16 w-16"
                            style={{
                              backgroundColor:
                                selectedTechnology.color.toLowerCase() ===
                                "#000000"
                                  ? "#ffffff"
                                  : selectedTechnology.color,
                              WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(
                                selectedTechnology.icon,
                              )}")`,
                              maskImage: `url("data:image/svg+xml,${encodeURIComponent(
                                selectedTechnology.icon,
                              )}")`,
                              WebkitMaskRepeat: "no-repeat",
                              maskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              maskPosition: "center",
                              WebkitMaskSize: "contain",
                              maskSize: "contain",
                            }}
                          />
                        </div>

                        {/* Category */}
                        <p className="text-[10px] uppercase tracking-[0.35em] text-red-500/70">
                          {selectedTechnology.category}
                        </p>

                        {/* Name */}
                        <h3 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white">
                          {selectedTechnology.name}
                        </h3>

                        {/* Description */}
                        <p className="mt-5 max-w-md text-base leading-7 text-white/40">
                          {selectedTechnology.description}
                        </p>

                        {/* Bottom detail */}
                        <div className="mt-8 flex items-center gap-3">
                          <span className="h-px w-10 bg-red-500/60" />

                          <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                            Technology
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                      >
                        <div className="mb-7 text-4xl font-light text-white/[0.08]">
                          +
                        </div>

                        <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                          Explora el stack
                        </p>

                        <p className="mt-3 max-w-xs text-sm leading-6 text-white/25">
                          Selecciona una tecnología para conocer más sobre las
                          herramientas que utilizo.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
