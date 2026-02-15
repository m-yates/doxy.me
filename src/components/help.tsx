import { MessageCircleMore } from "lucide-react";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  className?: string;
}

export default function Help({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <MessageCircleMore />
      </Button>
    </div>
  );
}
