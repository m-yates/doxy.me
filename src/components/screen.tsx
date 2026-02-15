import { motion } from "motion/react";
import { useAppStore } from "../hooks/use-app-store";
import { ANIMATION_STATE, TOGGLE_SCREEN } from "../lib/animations";
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
      variants={TOGGLE_SCREEN}
      className={cn(
        "bg-grey-200 grid-pile mx-auto max-w-[1000px] overflow-hidden rounded-lg",
        className
      )}
    >
      <motion.img
        animate={hasVideo ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        src="/screen.jpg"
        alt="screen"
        className="size-full object-cover opacity-0"
      />
    </motion.div>
  );
}
