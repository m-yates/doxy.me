import { Video as VideoOnIcon, VideoOff } from "lucide-react";
import { cn } from "../lib/utils";
import ToggleButton from "./toggle-button";

interface Props {
  className?: string;
}

export default function Video({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <ToggleButton
        activeIcon={<VideoOnIcon />}
        inactiveIcon={<VideoOff />}
      />
    </div>
  );
}
