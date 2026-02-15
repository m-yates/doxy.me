import { Mic, MicOff } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import ToggleButton from "./toggle-button";

interface Props {
  className?: string;
}

export default function Audio({ className }: Props) {
  const [hasAudio, setHasAudio] = useState(true);

  function handleClick() {
    setHasAudio(!hasAudio);
  }
  return (
    <div className={cn("", className)}>
      <ToggleButton
        onClick={handleClick}
        isActive={hasAudio}
        activeIcon={<Mic />}
        inactiveIcon={<MicOff />}
      />
    </div>
  );
}
