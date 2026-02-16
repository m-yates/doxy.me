import { motion } from "motion/react";
import { useAppStore } from "../hooks/use-app-store";
import { ANIMATION_STATE, SCREEN } from "../lib/animations";
import { cn } from "../lib/utils";

interface ScreenProps {
  className?: string;
}

export default function Screen({ className }: ScreenProps) {
  const { hasVideo } = useAppStore();

  return (
    <motion.div
      key="screen"
      {...ANIMATION_STATE}
      variants={SCREEN}
      className={cn(
        "bg-grey-200 grid-pile mx-auto max-w-[1000px] overflow-hidden rounded-lg",
        className
      )}
    >
      <img
        src="/screen.jpg"
        alt="screen"
        className={cn(
          "size-full object-cover transition-opacity duration-300 ease-out",
          hasVideo ? "opacity-100" : "opacity-0"
        )}
      />
    </motion.div>
  );
}
