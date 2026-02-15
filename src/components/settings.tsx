import { EllipsisVertical } from "lucide-react";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  className?: string;
}

export default function Settings({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <EllipsisVertical />
      </Button>
    </div>
  );
}
