import { AnimatePresence, motion } from "motion/react";
import { ANIMATION_STATE, ICON } from "../lib/animations";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  title?: string;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export default function ToggleButton({
  title,
  activeIcon,
  inactiveIcon,
  isActive,
  onClick,
  className
}: Props) {
  return (
    <Button
      title={title}
      className={cn(!isActive && "bg-red/30 hover:bg-red/30", className)}
      onClick={onClick}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.span key="active" {...ANIMATION_STATE} variants={ICON}>
            {activeIcon}
          </motion.span>
        ) : (
          <motion.span key="inactive" {...ANIMATION_STATE} variants={ICON}>
            {inactiveIcon}
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
