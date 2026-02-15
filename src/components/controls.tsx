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
        "fixed bottom-9 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 rounded-lg bg-black p-2",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
