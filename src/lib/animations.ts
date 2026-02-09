import type { Variants, Transition } from "framer-motion";

// ── Base transitions ──
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

// ── Fade variants ──
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: smoothTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

// ── Scale variants ──
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: smoothTransition },
};

// ── Slide variants ──
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: smoothTransition },
};

// ── Stagger container ──
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ── Hover / Tap presets ──
export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.25 } },
  whileTap: { scale: 0.97 },
};

export const hoverScaleSmall = {
  whileHover: { scale: 1.08, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px -5px hsl(38 90% 55% / 0.25)",
    borderColor: "hsl(38 90% 55% / 0.4)",
    transition: { duration: 0.3 },
  },
};

// ── Float / parallax ──
export const floatAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: [0, -8, 0],
    transition: {
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
      opacity: smoothTransition,
    },
  },
};
