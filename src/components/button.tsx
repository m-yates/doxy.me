import { cn } from "../lib/utils";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: Props) {
  return (
    <button
      className={cn(
        "hover:bg-grey-100 flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg transition-colors duration-250 ease-out",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
