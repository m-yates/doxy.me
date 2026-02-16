import { MessageCircleMore } from "lucide-react";
import { cn } from "../lib/utils";
import Button from "./button";
import ControlItem from "./control-item";

interface Props {
  className?: string;
}

export default function Help({ className }: Props) {
  return (
    <ControlItem className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <MessageCircleMore />
      </Button>
    </ControlItem>
  );
}
