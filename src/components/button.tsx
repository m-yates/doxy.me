import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ANIMATION_STATE, POPOVER } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  title?: string;
  hasPopover?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ title, hasPopover = true, children, onClick, className }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      aria-label={title}
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "hover:bg-grey-100 relative flex size-12 cursor-pointer items-center justify-center rounded-lg transition-colors duration-250 ease-out focus:outline-white",
        className
      )}
      onClick={onClick}
    >
      {children}
      <AnimatePresence>
        {hasPopover && isHovered && (
          <motion.span
            {...ANIMATION_STATE}
            variants={POPOVER}
            className="bg-grey-100 pointer-events-none absolute top-0 left-0 translate-y-[-175%] rounded-sm p-1 text-left text-xs whitespace-nowrap"
          >
            {title}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
