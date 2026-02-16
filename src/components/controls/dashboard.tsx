import { LayoutGrid } from "lucide-react";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Dashboard({ className }: Props) {
  return (
    <Control className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <LayoutGrid />
      </Button>
    </Control>
  );
}
