import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title: "Full Stack Developer",
    description:
      "Building modern web and mobile applications with scalable backend architectures, cloud services and database-driven systems.",
    technologies: "React · Flutter · NestJS · Laravel · PostgreSQL · Azure",
  },
  {
    year: "2026",
    title: "MedAlert",
    description:
      "Designed and developed a family medication management platform focused on schedules, medication tracking, stock control and real-time notifications.",
    technologies: "Flutter · NestJS · Prisma · PostgreSQL · Firebase",
  },
  {
    year: "2025",
    title: "Backend & API Development",
    description:
      "Developed REST APIs and backend systems with authentication, database relationships, file storage, notifications and role-based access.",
    technologies: "Node.js · NestJS · Laravel · PostgreSQL",
  },
];

function Experience() {
  return (
    <section
      id="experience"
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
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30">
            Experience
          </p>

          <h2 className="max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Building, learning and
            <span className="text-white/30"> creating.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10 md:left-[120px]" />

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.year}-${experience.title}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid gap-6 pl-10 md:grid-cols-[120px_1fr] md:gap-12 md:pl-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center md:left-[113px]">
                  <div className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-150" />
                </div>

                {/* Year */}
                <div className="text-sm text-white/30">{experience.year}</div>

                {/* Content */}
                <div className="group border-b border-white/10 pb-16">
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/40 md:text-lg">
                    {experience.description}
                  </p>

                  <p className="mt-6 text-xs uppercase tracking-[0.15em] text-white/25">
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
