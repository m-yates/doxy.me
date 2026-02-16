import { Phone } from "lucide-react";
import { useAppStore } from "../../hooks/use-app-store";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";

interface Props {
  className?: string;
}

export default function HangUp({ className }: Props) {
  const { setCurrentUser } = useAppStore();

  function handleClick() {
    setCurrentUser(null);
  }

  return (
    <Control className={cn("", className)}>
      <Button title="Hang up" onClick={handleClick} className="bg-red hover:bg-red">
        <Phone className="rotate-135" />
      </Button>
    </Control>
  );
}
