import { motion } from "framer-motion";
import az900 from "../../assets/az900.svg";

const credentials = [
  {
    number: "01",
    type: "Educación",
    title: "Ingeniería de Sistemas Computacionales",
    institution: "Universidad Privada del Norte",
    year: "2025",
  },
  {
    number: "02",
    type: "Certificación",
    title: "Microsoft Azure Fundamentals",
    institution: "AZ-900",
    year: "2026",
    link: "https://learn.microsoft.com/es-mx/users/davidadrianmuozroncal-4025/credentials/b98aa2bc1f02554c?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-red-600/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-8 bg-red-500" />

            <p className="text-xs uppercase tracking-[0.35em] text-white/">
              Educación & certificaciones
            </p>
          </div>

          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
            La base de <span className="text-white/20">mi camino.</span>
          </h2>
        </motion.div>

        {/* Credentials */}
        <div className="grid overflow-hidden rounded-xl border border-white/[0.08] md:grid-cols-2">
          {credentials.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[320px] overflow-hidden bg-[#0b0b0b] p-8 transition-colors duration-500 hover:bg-[#101010] md:min-h-[150px] md:p-10"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/20">
                  {item.year}
                </span>
              </div>

              {/* Azure logo */}
              {item.type === "Certificación" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="pointer-events-none absolute right-5 top-3 opacity-70 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 md:right-10"
                >
                  <img
                    src={az900}
                    alt="Microsoft Azure Fundamentals AZ-900"
                    className="h-30 w-auto object-contain"
                  />
                </motion.div>
              )}

              {/* Content */}
              <div className="mt-6 flex flex-col gap-1">
                <p className="text-[12px] font-medium uppercase tracking-[0.3em] text-red-500/60">
                  {item.type}
                </p>

                <h3 className="mt-3 max-w-lg text-2xl font-medium leading-tight tracking-[-0.02em] text-white md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm text-white/35">{item.institution}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 hover:text-white"
                  >
                    Ver certificado
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
