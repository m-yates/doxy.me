import { VideoOff, Video as VideoOnIcon } from "lucide-react";
import { useAppStore } from "../../hooks/use-app-store";
import { useMenu } from "../../hooks/use-menu";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import ToggleButton from "../toggle-button";
import Menu from "./menu";
import MenuButton from "./menu-button";

interface Props {
  className?: string;
}

const MENU_ITEMS = ["Background", "Quality"];

export default function Video({ className }: Props) {
  const { hasVideo, setHasVideo } = useAppStore();
  const { isOpen, setIsOpen, containerRef } = useMenu();

  function handleClick() {
    setHasVideo(!hasVideo);
  }

  return (
    <Control ref={containerRef} className={cn("group flex items-center rounded-lg", className)}>
      <ToggleButton
        title="Toggle video"
        onClick={handleClick}
        isActive={hasVideo}
        activeIcon={<VideoOnIcon />}
        inactiveIcon={<VideoOff />}
      />
      <MenuButton
        title="Video settings"
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <Menu isOpen={isOpen}>
        {MENU_ITEMS.map((item) => (
          <Button
            title={item}
            onClick={() => setIsOpen(false)}
            key={item}
            className="size-auto p-2"
          >
            {item}
          </Button>
        ))}
      </Menu>
    </Control>
  );
}
