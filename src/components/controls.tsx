import { motion } from "motion/react";
import { useAppStore } from "../hooks/use-app-store";
import { ANIMATION_STATE, CONTROLS } from "../lib/animations";
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
      variants={CONTROLS}
      onAnimationComplete={handleAnimationComplete}
      className={cn(
        "bg-grey-200 relative mx-auto mt-auto flex items-center justify-center gap-3 rounded-2xl p-2",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
