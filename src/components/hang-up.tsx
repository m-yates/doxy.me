import { Phone } from "lucide-react";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  className?: string;
}

export default function HangUp({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Button onClick={() => console.log("clicked")} className="bg-red hover:bg-red">
        <Phone className="rotate-135" />
      </Button>
    </div>
  );
}
