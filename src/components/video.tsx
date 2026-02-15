import { VideoOff, Video as VideoOnIcon } from "lucide-react";
import { useAppStore } from "../hooks/use-app-store";
import { cn } from "../lib/utils";
import ToggleButton from "./toggle-button";

interface Props {
  className?: string;
}

export default function Video({ className }: Props) {
  const { hasVideo, setHasVideo } = useAppStore();

  function handleClick() {
    setHasVideo(!hasVideo);
  }

  return (
    <div className={cn("", className)}>
      <ToggleButton
        onClick={handleClick}
        isActive={hasVideo}
        activeIcon={<VideoOnIcon />}
        inactiveIcon={<VideoOff />}
      />
    </div>
  );
}
