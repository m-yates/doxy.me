import { AnimatePresence, motion } from "motion/react";
import { ANIMATION_STATE, MENU } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  menuRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Menu({ isOpen, children, className, menuRef }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          {...ANIMATION_STATE}
          variants={MENU}
          className={cn(
            "bg-grey-200 absolute top-0 right-0 left-0 flex translate-y-[-120%] gap-1.5 rounded-lg p-2 text-xs",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
