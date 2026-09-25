import { motion } from "framer-motion";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] shadow-[0_28px_80px_rgba(0,0,0,0.18)]"
    >
      {/* Visual */}
      <div className="relative flex min-h-[450px] items-center justify-center overflow-hidden bg-[#0b0b0b]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.4) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />

        {/* Red glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute h-[350px] w-[350px] rounded-full bg-red-600/[0.10] blur-[120px]"
        />

        {/* Content */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 px-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-red-500/70">
            {project.category}
          </p>

          <h3 className="mt-5 text-6xl font-semibold tracking-tight sm:text-7xl md:text-9xl">
            {project.title}
          </h3>

          <p className="mt-5 text-sm text-white/40 md:text-base">
            {project.subtitle}
          </p>
        </motion.div>

        {/* Number */}
        <span className="absolute right-6 top-6 rounded-full border border-white/10 px-4 py-2 text-xs text-white/30">
          {project.number}
        </span>
      </div>

      {/* Information */}
      <div className="grid gap-12 p-8 md:grid-cols-[1fr_auto] md:p-12">
        <div>
          <p className="max-w-3xl text-lg leading-relaxed text-white/50 md:text-xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 transition-colors duration-300 hover:border-red-500/40 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <motion.button
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
            className="group/button rounded-full border border-white/20 px-6 py-3 text-sm text-white transition-all duration-300 hover:border-red-500/50 hover:bg-white hover:text-black"
          >
            Ver proyecto
            <span className="ml-2 inline-block transition-transform duration-300 group-hover/button:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
