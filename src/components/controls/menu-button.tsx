import { ChevronUp } from "lucide-react";
import { cn } from "../../lib/utils";

interface Props {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function MenuButton({ title, isOpen, onClick, className }: Props) {
  return (
    <button
      aria-label={title}
      title={title}
      className={cn(
        "hidden cursor-pointer items-center justify-start transition-opacity duration-250 ease-out hover:opacity-50 focus:outline-white lg:flex",
        className
      )}
      onClick={onClick}
    >
      <ChevronUp
        className={cn(
          "relative size-4 transition-transform duration-250 ease-out",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}
