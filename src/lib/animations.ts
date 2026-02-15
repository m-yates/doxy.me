import type { Variants } from "motion";

export const ANIMATION_STATE = {
  initial: "initial",
  animate: "animate",
  exit: "exit"
} as const;

const EASE_ANIMATE = "backOut";
const EASE_EXIT = "backIn";

export const TOGGLE_ICON: Variants = {
  initial: { opacity: 0, y: "75%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_ANIMATE } },
  exit: { opacity: 0, y: "-75%", transition: { duration: 0.25, ease: EASE_EXIT } }
};

export const TOGGLE_CONTROLS: Variants = {
  initial: { opacity: 0, y: "50%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_ANIMATE } },
  exit: { opacity: 0, y: "50%", transition: { duration: 0.35, ease: EASE_EXIT } }
};

export const TOGGLE_SCREEN: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: EASE_ANIMATE } },
  exit: { scale: 0.5, opacity: 0, transition: { duration: 0.35, ease: EASE_EXIT } }
};
