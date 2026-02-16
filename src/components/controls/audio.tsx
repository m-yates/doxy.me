import { Mic, MicOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import ToggleButton from "../toggle-button";
import Menu from "./menu";
import MenuButton from "./menu-button";

interface Props {
  className?: string;
}

const MENU_ITEMS = ["Mic input", "Volume", "Acoustics"];

export default function Audio({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAudio, setHasAudio] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        title="Toggle audio"
        onClick={() => setHasAudio((prev) => !prev)}
        isActive={hasAudio}
        activeIcon={<Mic />}
        inactiveIcon={<MicOff />}
      />
      <MenuButton
        title="Audio settings"
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />
      <Menu isOpen={isMenuOpen}>
        {MENU_ITEMS.map((item) => (
          <Button
            title={item}
            onClick={() => setIsMenuOpen(false)}
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
