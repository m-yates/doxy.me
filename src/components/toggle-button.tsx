import { AnimatePresence, motion } from "motion/react";
import { ANIMATION_STATE, TOGGLE_ICON } from "../lib/animations";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function ToggleButton({
  activeIcon,
  inactiveIcon,
  isActive,
  onClick,
  className
}: Props) {
  return (
    <Button className={cn(!isActive && "bg-red hover:bg-red", className)} onClick={onClick}>
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.span key="active" {...ANIMATION_STATE} variants={TOGGLE_ICON}>
            {activeIcon}
          </motion.span>
        ) : (
          <motion.span key="inactive" {...ANIMATION_STATE} variants={TOGGLE_ICON}>
            {inactiveIcon}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
