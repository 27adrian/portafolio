import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-sm uppercase tracking-[0.3em] text-white/30"
        >
          Contact
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Have a project
          <br />
          <span className="text-white/30">in mind?</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "left" }}
          className="my-16 h-px w-full bg-white/10"
        />

        {/* Contact content */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="mb-4 text-sm text-white/30">
              Let&apos;s work together
            </p>

            <a
              href="mailto:your@email.com"
              className="group flex items-center gap-3 text-xl text-white transition-colors duration-300 hover:text-white/60 md:text-2xl"
            >
              <Mail size={22} strokeWidth={1.5} className="text-white/40" />

              <span>dadrianmr.27@gmail.com</span>

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="mailto:dadrianmr.27@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-colors duration-300 hover:bg-white/90"
          >
            Start a conversation
            <ArrowUpRight size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
