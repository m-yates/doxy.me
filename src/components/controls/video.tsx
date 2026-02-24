import { VideoOff, Video as VideoOnIcon } from "lucide-react";
import { useAppStore } from "../../hooks/use-app-store";
import { cn } from "../../lib/utils";
import Control from "../control";
import ToggleButton from "../toggle-button";

interface Props {
  className?: string;
}

export default function Video({ className }: Props) {
  const { hasVideo, setHasVideo } = useAppStore();

  function handleClick() {
    setHasVideo(!hasVideo);
  }

  return (
    <>
      <Control className={cn("group flex items-center rounded-lg", className)}>
        <ToggleButton
          title="Toggle video"
          onClick={handleClick}
          isActive={hasVideo}
          activeIcon={<VideoOnIcon />}
          inactiveIcon={<VideoOff />}
        />
      </Control>
    </>
  );
}
