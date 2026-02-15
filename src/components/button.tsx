import { cn } from "../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={cn(
        "hover:bg-grey flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg transition-colors duration-250 ease-out",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
