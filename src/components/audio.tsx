import { Mic, MicOff } from "lucide-react";
import { cn } from "../lib/utils";
import ToggleButton from "./toggle-button";

interface Props {
  className?: string;
}

export default function Audio({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <ToggleButton activeIcon={<Mic />} inactiveIcon={<MicOff />} />
    </div>
  );
}
