import { motion } from "motion/react";
import { ICON } from "../lib/animations";
import { cn } from "../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ControlItem({ children, className }: Props) {
  return (
    <motion.div variants={ICON} className={cn("", className)}>
      {children}
    </motion.div>
  );
}
