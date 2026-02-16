import { cn } from "../lib/utils";

interface Props {
  title?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ title, children, onClick, className }: Props) {
  return (
    <button
      title={title}
      className={cn(
        "hover:bg-grey-100 flex size-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg transition-colors duration-250 ease-out focus:outline-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
