import { motion } from "motion/react";
import { CONTROL } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  ref?: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
  className?: string;
}

export default function Control({ ref, children, className }: Props) {
  return (
    <motion.div ref={ref} variants={CONTROL} className={cn("", className)}>
      {children}
    </motion.div>
  );
}
