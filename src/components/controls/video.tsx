import { VideoOff, Video as VideoOnIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useAppStore } from "../../hooks/use-app-store";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import ToggleButton from "../toggle-button";
import Menu from "./menu";
import MenuButton from "./menu-button";

interface Props {
  className?: string;
}

const MENU_ITEMS = ["Settings", "Report an issue"];

export default function Video({ className }: Props) {
  const { hasVideo, setHasVideo } = useAppStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setHasVideo(!hasVideo);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

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
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      <Menu isOpen={isMenuOpen}>
        {MENU_ITEMS.map((item) => (
          <Button title={item} onClick={close} key={item} className="size-auto p-2">
            {item}
          </Button>
        ))}
      </Menu>
    </Control>
  );
}
