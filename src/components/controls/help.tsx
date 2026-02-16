import { MessageCircleMore } from "lucide-react";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";

interface Props {
  className?: string;
}

export default function Help({ className }: Props) {
  return (
    <Control className={cn("", className)}>
      <Button onClick={() => console.log("clicked")}>
        <MessageCircleMore />
      </Button>
    </Control>
  );
}
