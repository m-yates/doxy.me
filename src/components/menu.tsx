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
            "bg-grey-200 absolute top-0 left-0 flex translate-y-[-110%] flex-col gap-2 overflow-hidden rounded-lg p-4 text-sm",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
