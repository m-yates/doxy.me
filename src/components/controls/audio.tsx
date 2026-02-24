import { Mic, MicOff } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import Control from "../control";
import ToggleButton from "../toggle-button";

interface Props {
  className?: string;
}

export default function Audio({ className }: Props) {
  const [hasAudio, setHasAudio] = useState(true);

  return (
    <>
      <Control className={cn("group flex items-center rounded-lg", className)}>
        <ToggleButton
          title="Toggle audio"
          onClick={() => setHasAudio((prev) => !prev)}
          isActive={hasAudio}
          activeIcon={<Mic />}
          inactiveIcon={<MicOff />}
        />
      </Control>
    </>
  );
}
