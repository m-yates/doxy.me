import { AnimatePresence, motion } from "motion/react";
import { useAppStore } from "../hooks/use-app-store";
import { ANIMATION_STATE, TOGGLE_SCREEN } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

export default function Screen({ className }: Props) {
  const { currentUser } = useAppStore();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {currentUser && (
        <motion.div
          key="screen"
          {...ANIMATION_STATE}
          variants={TOGGLE_SCREEN}
          className={cn(
            "bg-grey-200 mx-auto max-w-[1000px] flex-1 overflow-hidden rounded-lg",
            className
          )}
        >
          <img src="/screen.jpg" alt="screen" className="size-full object-cover" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
