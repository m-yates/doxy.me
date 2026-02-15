import { motion } from "motion/react";
import { useAppStore } from "../hooks/use-app-store";
import { ANIMATION_STATE, TOGGLE_CONTROLS } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Controls({ children, className }: Props) {
  const { setHasVideo } = useAppStore();

  function handleAnimationComplete(definition: string) {
    if (definition === "exit") {
      setHasVideo(true);
    }
  }

  return (
    <motion.div
      {...ANIMATION_STATE}
      variants={TOGGLE_CONTROLS}
      onAnimationComplete={handleAnimationComplete}
      className={cn(
        "bg-grey-200 mx-auto flex items-center justify-center gap-2 rounded-lg p-2",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
