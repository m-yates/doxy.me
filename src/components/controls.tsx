import { motion } from "motion/react";
import { ANIMATION_STATE, TOGGLE_CONTROLS } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Controls({ children, className }: Props) {
  return (
    <motion.div
      {...ANIMATION_STATE}
      variants={TOGGLE_CONTROLS}
      className={cn(
        "bg-grey-200 mx-auto flex items-center justify-center gap-2 rounded-lg p-2",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
