import { motion } from "framer-motion";
import { useState } from "react";
import type { Technology } from "../../data/technologies";

interface TechKeyProps {
  technology: Technology;
  onSelect?: (technology: Technology) => void;
  isSelected?: boolean;
}

function TechKey({ technology, onSelect, isSelected = false }: TechKeyProps) {
  const [isHovered, setIsHovered] = useState(false);

  const activeColor =
    technology.color.toLowerCase() === "#000000" ? "#ffffff" : technology.color;

  // El glow SOLO existe mientras haces hover.
  // Si está seleccionado, no tiene glow.
  const showGlow = isHovered && !isSelected;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect?.(technology)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      whileTap={{
        y: 4,
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={[
        "relative",
        "flex",
        "h-28",
        "w-28",
        "flex-col",
        "items-center",
        "justify-center",
        "gap-3",
        "overflow-hidden",
        "rounded-xl",
        "border",
        "bg-[#151515]",
        "shadow-[0_8px_0_#080808,0_15px_30px_rgba(0,0,0,0.35)]",
        "transition-all",
        "duration-300",
        isSelected
          ? "border-white/40"
          : "border-white/[0.08] hover:border-white/20",
      ].join(" ")}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl bg-red-500/[0.06] blur-xl transition-opacity duration-300"
        style={{
          opacity: showGlow ? 1 : 0,
        }}
      />

      {/* Technology glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-300"
        style={{
          backgroundColor: activeColor,
          opacity: showGlow ? 0.5 : 0,
        }}
      />

      {/* Icon */}
      <div
        className="relative z-10 h-9 w-9 transition-all duration-300"
        style={{
          backgroundColor: activeColor,

          opacity: isSelected || isHovered ? 1 : 0.4,

          transform: isSelected || isHovered ? "scale(1.1)" : "scale(1)",

          WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent(
            technology.icon,
          )}")`,

          maskImage: `url("data:image/svg+xml,${encodeURIComponent(
            technology.icon,
          )}")`,

          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",

          WebkitMaskPosition: "center",
          maskPosition: "center",

          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      {/* Name */}
      <span
        className={[
          "relative",
          "z-10",
          "text-[10px]",
          "font-medium",
          "uppercase",
          "tracking-[0.12em]",
          "transition-colors",
          "duration-300",
          isSelected || isHovered ? "text-white" : "text-white/40",
        ].join(" ")}
      >
        {technology.name}
      </span>
    </motion.button>
  );
}

export default TechKey;
