import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useEffect } from "react";

import profileImage from "../../assets/foto.png";

function About() {
  /* =========================
     MOUSE PARALLAX
  ========================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imageX = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const imageY = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x * 10);
      mouseY.set(y * 10);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-20"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main red glow */}
        <div className="absolute left-[15%] top-[40%] h-[420px] w-[420px] rounded-full bg-red-600/[0.06] blur-[150px]" />

        {/* Secondary red glow */}
        <div className="absolute right-[10%] top-[20%] h-[280px] w-[280px] rounded-full bg-red-900/[0.06] blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
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
              "radial-gradient(ellipse at center, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-red-500" />

            <p className="text-xs uppercase tracking-[0.35em] text-white/30">
              About me
            </p>
          </div>

          <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            I build digital products
            <br />
            <span className="text-white/20">that solve real problems.</span>
          </h2>
        </motion.div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="mt-24 grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* =========================
              PORTRAIT
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex min-h-[470px] items-center justify-center md:min-h-[500px]"
          >
            {/* =========================
                RED GLOW
            ========================= */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[240px]
                w-[240px]
                rounded-full
                bg-red-600/[0.16]
                blur-[80px]
                md:h-[290px]
                md:w-[290px]
              "
            />

            {/* =========================
                PARALLAX CONTAINER
            ========================= */}

            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="relative"
            >
              {/* =========================
                  MAIN CIRCLE
              ========================= */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  h-[260px]
                  w-[260px]
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-[#101010]
                  shadow-[0_0_70px_rgba(220,38,38,0.08)]
                  md:h-[320px]
                  md:w-[320px]
                "
              >
                {/* Inner red gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.18),transparent_62%)]
                  "
                />

                {/* Subtle grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to right,
                        rgba(255,255,255,0.3) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.3) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: "42px 42px",
                  }}
                />

                {/* =========================
                    PORTRAIT
                ========================= */}

                <motion.img
                  src={profileImage}
                  alt="Adrian Muñoz Roncal"
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.035,
                  }}
                  className="
                    absolute
                    left-1/2
                    h-[115%]
                    w-[115%]
                    -translate-x-1/2
                    object-contain
                    object-bottom
                    drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
                  "
                />

                {/* Bottom cinematic fade */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/3
                    bg-gradient-to-t
                    from-black/35
                    to-transparent
                  "
                />
              </motion.div>

              {/* =========================
                  OUTER RING
              ========================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[295px]
                  w-[295px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-red-500/[0.18]
                  md:h-[355px]
                  md:w-[355px]
                "
              />

              {/* =========================
                  ORBIT POINT
              ========================= */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[295px]
                  w-[295px]
                  -translate-x-1/2
                  -translate-y-1/2
                  md:h-[355px]
                  md:w-[355px]
                "
              >
                <div
                  className="
                    absolute
                    -top-1
                    left-1/2
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-red-500
                    shadow-[0_0_15px_rgba(239,68,68,0.8)]
                  "
                />
              </motion.div>
            </motion.div>

            {/* =========================
                DECORATIVE PLUS
            ========================= */}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                duration: 0.5,
              }}
              className="
                absolute
                left-[10%]
                top-[18%]
                text-red-500
              "
            >
              <Plus size={18} strokeWidth={1.5} />
            </motion.div>

            {/* =========================
                SECTION LABEL
            ========================= */}

            <div className="absolute bottom-[3%] left-[8%]">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                01 / About
              </p>
            </div>
          </motion.div>

          {/* =========================
              TEXT
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-xl text-lg leading-relaxed text-white/45 md:text-xl">
              I&apos;m a developer focused on building modern digital
              experiences across web, mobile and backend systems.
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/30">
              I enjoy turning ideas into functional products, from the interface
              users interact with to the architecture running behind it.
            </p>

            {/* =========================
                STATS
            ========================= */}

            <div className="mt-12 grid max-w-xl grid-cols-2 border-t border-white/10">
              <div className="border-b border-white/10 py-7">
                <p className="text-xl font-medium">Web</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Development
                </p>
              </div>

              <div className="border-b border-l border-white/10 py-7 pl-6">
                <p className="text-xl font-medium">Mobile</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Applications
                </p>
              </div>

              <div className="py-7">
                <p className="text-xl font-medium">Backend</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Architecture
                </p>
              </div>

              <div className="border-l border-white/10 py-7 pl-6">
                <p className="text-xl font-medium">Cloud</p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Deployment
                </p>
              </div>
            </div>

            {/* =========================
                LINK
            ========================= */}

            <motion.a
              href="#projects"
              whileHover={{ x: 6 }}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                text-sm
                text-white/50
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Explore my work
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-red-500
                "
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
