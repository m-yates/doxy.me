import { VideoOff, Video as VideoOnIcon } from "lucide-react";
import { useAppStore } from "../../hooks/use-app-store";
import { useMenu } from "../../hooks/use-menu";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import Menu from "../menu";
import MenuButton from "../menu-button";
import ToggleButton from "../toggle-button";

interface Props {
  className?: string;
}

const MENU_ITEMS = ["Background", "Quality"];

export default function Video({ className }: Props) {
  const { hasVideo, setHasVideo } = useAppStore();
  const { isOpen, setIsOpen, controlRef, menuRef } = useMenu();

  function handleClick() {
    setHasVideo(!hasVideo);
  }

  return (
    <>
      <Menu isOpen={isOpen} menuRef={menuRef}>
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
      <Control ref={controlRef} className={cn("group flex items-center rounded-lg", className)}>
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
      </Control>
    </>
  );
}
