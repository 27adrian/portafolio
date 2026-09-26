import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const repositories = [
    project.repoFrontend && {
      label: "Frontend",
      url: project.repoFrontend,
    },
    project.repoBackend && {
      label: "Backend",
      url: project.repoBackend,
    },
    project.repository && {
      label: "GitHub",
      url: project.repository,
    },
  ].filter(Boolean) as { label: string; url: string }[];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative overflow-hidden
        rounded-[1.5rem]
        border border-white/[0.08]
        bg-[#0b0b0b]
        shadow-[0_25px_80px_rgba(0,0,0,0.28)]
        transition-all duration-500
        hover:border-white/[0.14]
        ${featured ? "min-h-[420px] md:min-h-[450px]" : "min-h-[320px] md:min-h-[350px]"}
      `}
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute inset-0
            opacity-[0.035]
            transition-opacity duration-700
            group-hover:opacity-[0.055]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.45) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.45) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 75%)",
          }}
        />

        <motion.div
          className={`
            absolute rounded-full
            bg-red-600/[0.07]
            blur-[120px]
            transition-all duration-700
            group-hover:bg-red-600/[0.11]
            ${
              featured
                ? "right-[5%] top-[5%] h-[400px] w-[400px]"
                : "right-[5%] top-[10%] h-[260px] w-[260px]"
            }
          `}
          whileHover={{ scale: 1.15 }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#080808_92%)]" />
      </div>

      {/* TOP META */}
      <div
        className="
          absolute left-6 right-6 top-6 z-20
          flex items-center justify-between
          md:left-8 md:right-8 md:top-8
        "
      >
        <div className="flex items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.28em] text-red-500/70">
            {project.category}
          </span>

          <span className="h-px w-5 bg-white/10" />

          <span className="text-[9px] tracking-[0.2em] text-white/20">
            {project.number}
          </span>
        </div>

        <motion.div
          whileHover={{
            rotate: 45,
            scale: 1.1,
          }}
          className="
            flex h-8 w-8 items-center justify-center
            rounded-full
            border border-white/[0.08]
            text-white/30
            transition-all duration-300
            group-hover:border-white/20
            group-hover:text-white
          "
        >
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-10 flex h-full flex-col justify-between
          ${
            featured
              ? "min-h-[420px] md:min-h-[450px]"
              : "min-h-[320px] md:min-h-[350px]"
          }
        `}
      >
        {/* PROJECT TITLE */}
        <div
          className={`
            flex flex-1 flex-col justify-center
            px-6
            ${featured ? "md:px-10" : "md:px-8"}
          `}
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/25">
              {project.subtitle}
            </p>

            <h3
              className={`
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
                ${
                  featured
                    ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                    : "text-4xl sm:text-5xl md:text-6xl"
                }
              `}
            >
              {project.title}
              <span className="text-red-500">.</span>
            </h3>
          </motion.div>
        </div>

        {/* INFORMATION */}
        <div
          className="
            relative
            border-t border-white/[0.07]
            bg-black/20
            px-6 py-5
            backdrop-blur-sm
            md:px-8
          "
        >
          <div
            className={`
              flex flex-col gap-5
              ${
                featured
                  ? "md:flex-row md:items-end md:justify-between md:gap-10"
                  : "md:flex-row md:items-center md:justify-between md:gap-8"
              }
            `}
          >
            {/* DESCRIPTION + TECHNOLOGIES */}
            <div className="max-w-2xl">
              <p
                className={`
                  leading-6 text-white/35
                  ${featured ? "text-sm md:text-base" : "text-sm"}
                `}
              >
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                {project.technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className="
                      flex items-center gap-2
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-white/20
                      transition-colors duration-300
                      group-hover:text-white/35
                    "
                  >
                    {technology}

                    {index < project.technologies.length - 1 && (
                      <span className="ml-4 text-red-500/30">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* REPOSITORIES */}
            {repositories.length > 0 && (
              <div className="flex shrink-0 flex-wrap items-center gap-4">
                {repositories.map((repo) => (
                  <motion.a
                    key={repo.label}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                    className="
                      group/repo
                      flex items-center gap-2
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-white/35
                      transition-colors duration-300
                      hover:text-white
                    "
                  >
                    {repo.label}

                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.5}
                      className="
                        transition-transform duration-300
                        group-hover/repo:-translate-y-0.5
                        group-hover/repo:translate-x-0.5
                      "
                    />
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RED ACCENT */}
      <div
        className="
          absolute bottom-0 left-0
          h-px w-0
          bg-red-500
          transition-all duration-700
          group-hover:w-full
        "
      />
    </motion.article>
  );
}

export default ProjectCard;
