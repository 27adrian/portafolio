import {
  motion,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import MagneticButton from "../../components/MagneticButton/MagneticButton";
import { useEffect } from "react";

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
    y: 120,
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
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12 lg:px-20"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
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
            backgroundSize: "90px 90px",
            maskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 15%, transparent 72%)",
          }}
        />

        {/* Main red glow */}
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            isReady
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 0.6,
                }
          }
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-[55%] top-[42%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.10] blur-[160px]"
        />

        {/* Secondary red glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute -right-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-red-900/[0.10] blur-[140px]"
        />

        {/* Center light */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[80px]"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070707_80%)]" />
      </div>

      {/* ================= DECORATIVE TOP ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute right-6 top-28 hidden text-right md:right-12 lg:right-20 md:block"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          Based in Peru
        </p>

        <p className="mt-2 text-xs text-white/30">2026</p>
      </motion.div>

      {/* ================= CONTENT ================= */}

      <div className="mx-auto w-full max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={
            isReady
              ? {
                  opacity: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: -30,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.05,
          }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-red-500" />

          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Full Stack Developer
          </p>
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={titleContainer}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          className="relative max-w-6xl text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.86] tracking-[-0.06em]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={titleItem} className="block">
              Adrian
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span variants={titleItem} className="block text-white/25">
              Muñoz
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span variants={titleItem} className="block">
              Roncal<span className="text-red-500">.</span>
            </motion.span>
          </span>
        </motion.h1>

        {/* Description + actions */}
        <div className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={
              isReady
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="max-w-md text-base leading-relaxed text-white/40 md:text-lg"
          >
            I build modern digital experiences, mobile applications and scalable
            backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isReady
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="flex items-center gap-4"
          >
            <MagneticButton variant="primary">View my work</MagneticButton>

            <MagneticButton variant="secondary">Contact me</MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ================= SIDE MARK ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 right-6 hidden md:block lg:right-20"
      >
        <div className="flex items-center gap-3 text-white/20">
          <ArrowDownRight size={16} />

          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
        </div>
      </motion.div>

      {/* ================= BOTTOM LINE ================= */}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 1.2,
          delay: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="absolute bottom-0 left-6 right-6 h-px bg-white/10 md:left-12 md:right-12 lg:left-20 lg:right-20"
      />

      {/* Red accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isReady ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="absolute bottom-0 left-6 h-px w-20 bg-red-500 md:left-12 lg:left-20"
      />
    </section>
  );
}

export default Hero;
