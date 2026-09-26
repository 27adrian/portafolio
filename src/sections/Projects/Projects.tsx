import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative w-full py-32 md:py-40">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Red ambient glow */}
        <div
          className="
            absolute
            left-[65%]
            top-[25%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-red-600/[0.035]
            blur-[150px]
          "
        />

        {/* Bottom glow */}
        <div
          className="
            absolute
            bottom-[5%]
            left-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-red-900/[0.025]
            blur-[140px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 75%)",
          }}
        />
      </div>

      <div className="container-page">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Selected work
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2
              className="
                max-w-5xl
                text-[clamp(3.4rem,7vw,7rem)]
                font-medium
                leading-[0.9]
                tracking-[-0.055em]
              "
            >
              Cosas que
              <br />
              <span className="text-white/[0.18]">he construido.</span>
            </h2>

            <div className="max-w-xs pb-2 lg:text-right">
              <p className="text-sm leading-6 text-white/30">
                Productos, aplicaciones y sistemas construidos desde la idea
                hasta la implementación.
              </p>
            </div>
          </div>
        </motion.div>
        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}
        {featuredProject && (
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-20 md:mt-24"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[9px] uppercase tracking-[0.3em] text-red-500/70">
                  01
                </span>

                <span className="h-px w-8 bg-white/10" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Featured project
                </span>
              </div>

              <ArrowDownRight
                size={15}
                strokeWidth={1.2}
                className="text-white/20"
              />
            </div>

            <ProjectCard project={featuredProject} featured />
          </motion.div>
        )}
        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}
        {otherProjects.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
        {/* =====================================================
            FOOTER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-16 flex items-center justify-between border-t border-white/[0.07] pt-6"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/15">
            02 / Projects
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/15">
            More coming soon
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
