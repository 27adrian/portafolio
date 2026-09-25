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
    technologies:
      "PostgreSQL · Prisma · Azure  · Supabase · Firebase · Render · Vercel",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl"
        >
          Tecnologías con las que trabajo.
        </motion.h2>

        <div className="grid gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.015] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.02] md:p-7"
            >
              <div className="grid gap-4 md:grid-cols-[80px_210px_1fr] md:items-center md:gap-8">
                <span className="text-sm font-medium tracking-[0.22em] text-white/20">
                  {skill.number}
                </span>

                <h3 className="text-xl font-medium text-white transition-transform duration-500 group-hover:translate-x-1">
                  {skill.title}
                </h3>

                <p className="text-base leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/80">
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
