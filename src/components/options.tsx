import { EllipsisVertical } from "lucide-react";
import { cn } from "../lib/utils";
import Button from "./button";
import ControlItem from "./control-item";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Options({ className }: Props) {
  return (
    <ControlItem className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <EllipsisVertical />
      </Button>
    </ControlItem>
  );
}
