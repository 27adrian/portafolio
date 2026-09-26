import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MoveUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden py-32 md:py-40 lg:py-48"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main red glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 top-[42%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.055] blur-[170px]"
        />

        {/* Secondary glow */}
        <div className="absolute right-[-10%] top-[15%] h-[350px] w-[350px] rounded-full bg-red-900/[0.035] blur-[140px]" />

        {/* Subtle grid */}
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

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070707] to-transparent" />
      </div>

      <div className="container-page relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-red-500" />

          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
            Contacto
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
            ¿Tienes un
            <br />
            <span className="text-white/[0.18]">proyecto en mente?</span>
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "left" }}
          className="my-16 h-px w-full bg-white/[0.08] md:my-20"
        />

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl md:p-8 lg:p-10"
        >
          {/* Card glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-600/[0.06] blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
            {/* Email */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/25">
                Hablemos
              </p>

              <a
                href="mailto:dadrianmr.27@gmail.com"
                className="group inline-flex items-center gap-3 text-lg text-white transition-colors duration-300 hover:text-white/60 md:text-2xl"
              >
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="text-white/35 transition-colors duration-300 group-hover:text-red-500"
                />

                <span>dadrianmr.27@gmail.com</span>

                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500"
                />
              </a>
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:dadrianmr.27@gmail.com"
              whileHover={{ scale: 1.03 }}
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-red-500 hover:text-black"
            >
              Iniciar conversación
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:rotate-45">
                <MoveUpRight size={15} />
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mt-8 flex flex-col justify-between gap-3 text-[9px] uppercase tracking-[0.3em] text-white/15 sm:flex-row"
        >
          <span>Disponible para nuevos proyectos</span>

          <span>© {new Date().getFullYear()} ADRIAN.DEV</span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
