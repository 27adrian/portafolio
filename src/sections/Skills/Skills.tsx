import { motion } from "framer-motion";

const skills = [
  {
    number: "01",
    title: "Frontend",
    technologies: "React · TypeScript · Tailwind CSS",
  },
  {
    number: "02",
    title: "Mobile",
    technologies: "Flutter · Dart",
  },
  {
    number: "03",
    title: "Backend",
    technologies: "NestJS · Laravel · Node.js",
  },
  {
    number: "04",
    title: "Database & Cloud",
    technologies: "PostgreSQL · Prisma · Azure",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl"
        >
          Technologies I work with.
        </motion.h2>

        <div className="border-t border-white/10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <div className="grid gap-6 md:grid-cols-[80px_220px_1fr] md:items-center">
                <span className="text-sm text-white/20">{skill.number}</span>

                <h3 className="text-xl font-medium text-white transition-transform duration-500 group-hover:translate-x-2">
                  {skill.title}
                </h3>

                <p className="text-base text-white/40 transition-colors duration-500 group-hover:text-white/70">
                  {skill.technologies}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
