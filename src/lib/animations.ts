import type { Variants } from "motion";

export const ANIMATION_STATE = {
  initial: "initial",
  animate: "animate",
  exit: "exit"
} as const;

export const TOGGLE_ICON: Variants = {
  initial: { opacity: 0, y: "75%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "backOut" } },
  exit: { opacity: 0, y: "-75%", transition: { duration: 0.25, ease: "backIn" } }
};

export const TOGGLE_CONTROLS: Variants = {
  initial: { opacity: 0, y: "50%" },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "backOut" } },
  exit: { opacity: 0, y: "-50%", transition: { duration: 0.35, ease: "backIn" } }
};
