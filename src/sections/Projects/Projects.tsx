import { motion } from "framer-motion";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
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
              Selected work
            </p>
          </div>

          <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Projects I&apos;ve
            <br />
            <span className="text-white/20">built along the way.</span>
          </h2>
        </motion.div>

        {/* Featured */}
        {featuredProject && (
          <div className="mt-20">
            <ProjectCard project={featuredProject} />
          </div>
        )}

        {/* Other projects */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
