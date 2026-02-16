import { cn } from "../../lib/utils";
import Button from "../button";
import ControlItem from "../control-item";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Appearance({ className }: Props) {
  return (
    <ControlItem className={cn("hidden md:block", className)}>
      <Button onClick={() => console.log("clicked")}>
        <span className="flex size-6 items-center justify-center rounded-sm border-2 border-white text-sm">
          A
        </span>
      </Button>
    </ControlItem>
  );
}
