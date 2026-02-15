import { LayoutGrid } from "lucide-react";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Dashboard({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <LayoutGrid />
      </Button>
    </div>
  );
}
