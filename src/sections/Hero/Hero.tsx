import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { useEffect } from "react";

import MagneticButton from "../../components/MagneticButton/MagneticButton";
import profileImage from "../../assets/foto.png";

interface HeroProps {
  isReady: boolean;
}

const titleContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleItem: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero({ isReady }: HeroProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x * 12);
      mouseY.set(y * 12);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="
    relative
    min-h-screen
    w-full
    overflow-hidden
    pb-10
    pt-28
    md:pt-32
    lg:pt-28
  "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#080808]" />

        {/* Large red atmospheric glow */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            isReady
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 0.7,
                }
          }
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-[62%]
            top-[45%]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-red-600/[0.075]
            blur-[170px]
          "
        />

        {/* Left atmospheric glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="
            absolute
            -left-[15%]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-900/[0.055]
            blur-[150px]
          "
        />

        {/* Top glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="
            absolute
            right-[5%]
            top-[-15%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-red-700/[0.05]
            blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.55) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.55) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 78%)",
          }}
        />

        {/* Large radial light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-white/[0.012]
            blur-[100px]
          "
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080808_88%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div
        className="
    container-page
    relative
    flex
    min-h-[calc(100vh-8rem)]
    items-center
  "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-red-500" />

              <span className="text-[10px] uppercase tracking-[0.4em] text-white/35">
                Full Stack Developer
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate={isReady ? "visible" : "hidden"}
              className="
                text-[clamp(4rem,9.5vw,9.2rem)]
                font-semibold
                leading-[0.82]
                tracking-[-0.07em]
              "
            >
              <span className="block overflow-hidden">
                <motion.span variants={titleItem} className="block">
                  Adrián
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span
                  variants={titleItem}
                  className="block text-white/[0.18]"
                >
                  Muñoz
                </motion.span>
              </span>

              <span className="block overflow-hidden">
                <motion.span variants={titleItem} className="block">
                  Roncal<span className="text-red-500">.</span>
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-9 max-w-xl"
            >
              <p className="text-base leading-7 text-white/40 md:text-lg">
                Desarrollo productos digitales para{" "}
                <span className="text-white/65">web, móvil y sistemas</span>,
                combinando diseño, experiencia de usuario y arquitectura.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton variant="primary">Ver proyectos</MagneticButton>

              <MagneticButton variant="secondary">Contáctame</MagneticButton>
            </motion.div>

            {/* Bottom information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="
                mt-14
                grid
                max-w-xl
                grid-cols-2
                border-t
                border-white/[0.08]
                sm:grid-cols-3
              "
            >
              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/20">
                  Especialidad
                </p>

                <p className="mt-2 text-sm text-white/60">Full Stack</p>
              </div>

              <div className="border-l border-white/[0.08] py-5 pl-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/20">
                  Desarrollo
                </p>

                <p className="mt-2 text-sm text-white/60">Web · Mobile</p>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT — PROFILE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[560px]
              items-center
              justify-center
              lg:ml-auto
            "
          >
            {/* Big glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                bg-red-600/[0.16]
                blur-[100px]
                md:h-[400px]
                md:w-[400px]
              "
            />

            {/* Outer circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                h-[350px]
                w-[350px]
                rounded-full
                border
                border-dashed
                border-red-500/[0.16]
                md:h-[500px]
                md:w-[500px]
              "
            />

            {/* Second ring */}
            <div
              className="
                absolute
                h-[310px]
                w-[310px]
                rounded-full
                border
                border-white/[0.05]
                md:h-[450px]
                md:w-[450px]
              "
            />

            {/* Plus */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute right-[9%] top-[8%] text-red-500"
            >
              <Plus size={20} strokeWidth={1.3} />
            </motion.div>

            {/* Image */}
            <motion.div
              style={{
                x: smoothX,
                y: smoothY,
              }}
              className="relative"
            >
              <div
                className="
                  relative
                  h-[320px]
                  w-[320px]
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.13]
                  bg-[#0b0b0b]
                  shadow-[0_40px_120px_rgba(0,0,0,0.7)]
                  md:h-[410px]
                  md:w-[410px]
                "
              >
                {/* Inner glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_25%,rgba(239,68,68,0.18),transparent_60%)]
                  "
                />

                {/* Grid inside image */}
                <div
                  className="absolute inset-0 opacity-[0.055]"
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
                    backgroundSize: "45px 45px",
                  }}
                />

                <motion.img
                  src={profileImage}
                  alt="Adrián Muñoz Roncal"
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.94,
                  }}
                  animate={
                    isReady
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                      : {
                          opacity: 0,
                          y: 40,
                          scale: 0.94,
                        }
                  }
                  transition={{
                    duration: 1,
                    delay: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: 1.035 }}
                  className="
                    absolute
                    left-1/2
                    h-[116%]
                    w-[116%]
                    -translate-x-1/2
                    object-contain
                    object-bottom
                    drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]
                  "
                />

                {/* Bottom fade */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/3
                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                  "
                />
              </div>
            </motion.div>

            {/* =================================================
    ABOUT CARD
================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="
    absolute
    -bottom-8
    left-1/2
    w-[min(90%,380px)]
    -translate-x-1/2
    md:left-auto
    md:-translate-x-0
    md:-bottom-10
    md:w-[390px]
  "
            >
              <div
                className="
      relative
      rounded-2xl
      border
      border-white/[0.09]
      bg-[#0b0b0b]/85
      px-6
      py-5
      shadow-[0_25px_70px_rgba(0,0,0,0.45)]
      backdrop-blur-xl
      md:px-7
      md:py-6
    "
              >
                {/* Red accent */}
                <div
                  className="
        absolute
        left-0
        top-6
        h-10
        w-px
        bg-red-500
      "
                />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-red-500/70">
                    Sobre mí
                  </span>

                  <ArrowUpRight size={16} className="text-white/20" />
                </div>

                <p className="mt-4 text-sm leading-6 text-white/45 md:text-[15px]">
                  Creo experiencias digitales donde el{" "}
                  <span className="text-white/70">diseño</span> y el{" "}
                  <span className="text-white/70">código</span> trabajan juntos.
                </p>
              </div>
            </motion.div>

            {/* Number */}
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
              <span className="text-[9px] uppercase tracking-[0.35em] text-white/[0.12] [writing-mode:vertical-rl]">
                01 / Profile
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-white/20">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} className="text-red-500/60" />
        </motion.div>
      </motion.div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1.2,
          delay: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="
          absolute
          bottom-0
          left-6
          right-6
          h-px
          bg-white/[0.08]
          md:left-12
          md:right-12
          lg:left-20
          lg:right-20
        "
      />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="
          absolute
          bottom-0
          left-6
          h-px
          w-24
          bg-red-500
          md:left-12
          lg:left-20
        "
      />
    </section>
  );
}

export default Hero;
