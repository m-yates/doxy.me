import type { Variants } from "motion";

export const ANIMATION_STATE = {
  initial: "initial",
  animate: "animate",
  exit: "exit"
} as const;

const DURATION_FAST = 0.25;
const DURATION_MEDIUM = 0.35;
const DURATION_SLOW = 0.5;

const EASE_ANIMATE = "backOut";
const EASE_EXIT = "backIn";

const STAGGER = 0.03;

export const SCREEN: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: DURATION_MEDIUM, ease: EASE_ANIMATE } },
  exit: { scale: 0.5, opacity: 0, transition: { duration: DURATION_MEDIUM, ease: EASE_EXIT } }
};

export const CONTROLS: Variants = {
  initial: { opacity: 0, y: "50%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_MEDIUM,
      ease: EASE_ANIMATE,
      staggerChildren: STAGGER
    }
  },
  exit: {
    opacity: 0,
    y: "50%",
    transition: {
      duration: DURATION_MEDIUM,
      delay: 0.15,
      ease: EASE_EXIT,
      staggerChildren: STAGGER
    }
  }
};

export const CONTROL: Variants = {
  initial: { opacity: 0, y: "50%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_SLOW, ease: EASE_ANIMATE }
  },
  exit: { opacity: 0, y: "50%", transition: { duration: DURATION_SLOW, ease: EASE_EXIT } }
};

export const ICON: Variants = {
  initial: { opacity: 0, y: "75%" },
  animate: { opacity: 1, y: 0, transition: { duration: DURATION_FAST, ease: EASE_ANIMATE } },
  exit: { opacity: 0, y: "-75%", transition: { duration: DURATION_FAST, ease: EASE_EXIT } }
};

export const MENU: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION_MEDIUM,
      ease: EASE_ANIMATE,
      staggerChildren: STAGGER,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: DURATION_MEDIUM,
      ease: EASE_EXIT,
      staggerChildren: -STAGGER,
      when: "afterChildren"
    }
  }
};

export const MENU_ITEM: Variants = {
  initial: { opacity: 0, y: "50%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_SLOW, ease: EASE_ANIMATE }
  },
  exit: { opacity: 0, y: "50%", transition: { duration: DURATION_SLOW, ease: EASE_EXIT } }
};
