import { Phone } from "lucide-react";
import { useAppStore } from "../hooks/use-app-store";
import { cn } from "../lib/utils";
import Button from "./button";

interface Props {
  className?: string;
}

export default function HangUp({ className }: Props) {
  const { setCurrentUser } = useAppStore();

  return (
    <div className={cn("", className)}>
      <Button onClick={() => setCurrentUser(null)} className="bg-red hover:bg-red">
        <Phone className="rotate-135" />
      </Button>
    </div>
  );
}
