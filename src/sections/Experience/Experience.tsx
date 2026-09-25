import { motion } from "framer-motion";

const experiences = [
  {
    period: "Nov 2025 — Ene 2026",
    title: "Desarrollador Web Junior",
    company: "NEONHOUSELED S.A.C.",
    description:
      "Desarrollo y mantenimiento de soluciones web para proyectos como ASDEN y CONTIGOVOY, participando en la implementación de interfaces, funcionalidades y mejoras de experiencia de usuario.",
    technologies: "ReactJS · Laravel · PHP  · SQL Workbench · Git · GitHub · NextJS · TailwindCSS ",
  },
  {
    period: "Ago 2024 — Nov 2024",
    title: "Practicante Preprofesional",
    company: "Municipalidad Distrital de Casa Grande",
    description:
      "Realicé el desarrollo de un sistema de inventario utilizando C#, además de actividades de organización documental, consultas y apoyo en procesos internos.",
    technologies: "C# · SQL · Sistemas de información",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-600/[0.04] blur-[150px]" />
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
              Experiencia
            </p>
          </div>

          <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Experiencia que
            <br />
            <span className="text-white/20">me hizo crecer.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Línea */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/[0.08] md:left-[140px]" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.period}-${experience.title}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid gap-6 pl-10 md:grid-cols-[140px_1fr] md:gap-12 md:pl-0"
              >
                {/* Punto */}
                <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#080808] md:left-[133px]">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>

                {/* Periodo */}
                <div className="pt-1">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/30">
                    {experience.period}
                  </p>
                </div>

                {/* Contenido */}
                <div className="border-b border-white/[0.08] pb-16">
                  <p className="text-xs uppercase tracking-[0.2em] text-red-500/60">
                    {experience.company}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-white md:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                    {experience.description}
                  </p>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.15em] text-white/25">
                    {experience.technologies}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
