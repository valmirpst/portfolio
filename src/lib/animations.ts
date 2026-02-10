import type { Transition, Variants } from "framer-motion";

// ── Base transitions ──
// Use spring for physical movements (scale, translate) for a more organic feel
export const springTransition: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

// Use soft spring for subtle entry animations
export const entrySpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

// Use smooth bezier for fades and color changes
export const smoothTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

// ── Fade variants ──
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: smoothTransition },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: entrySpring },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: entrySpring },
};

// ── Scale variants ──
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: springTransition },
};

// ── Slide variants ──
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: entrySpring },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: entrySpring },
};

// ── Stagger container ──
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

// ── Hover presets ──
export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  whileTap: { scale: 0.98 },
} as const;

export const hoverScaleSmall = {
  whileHover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  whileTap: { scale: 0.95 },
} as const;

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 25px -5px hsl(38 90% 55% / 0.3)",
    borderColor: "hsl(38 90% 55% / 0.4)",
    transition: { duration: 0.2 },
  },
} as const;

// ── Float Animation (Para orbes e indicadores) ──
export const floatAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: [0, -6, 0],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
      opacity: { duration: 0.5 },
    },
  },
};
