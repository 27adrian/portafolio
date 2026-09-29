import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX * 0.25);
    y.set(mouseY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isPrimary = variant === "primary";

  const baseClasses = isPrimary
    ? "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
    : "inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5";

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.a>
  );
}

export default MagneticButton;
