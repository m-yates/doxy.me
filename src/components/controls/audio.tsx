import { Mic, MicOff } from "lucide-react";
import { useState } from "react";
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

const MENU_ITEMS = ["Mic input", "Volume", "Acoustics"];

export default function Audio({ className }: Props) {
  const [hasAudio, setHasAudio] = useState(true);
  const { isOpen, setIsOpen, controlRef, menuRef } = useMenu();

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
          title="Toggle audio"
          onClick={() => setHasAudio((prev) => !prev)}
          isActive={hasAudio}
          activeIcon={<Mic />}
          inactiveIcon={<MicOff />}
        />
        <MenuButton
          title="Audio settings"
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </Control>
    </>
  );
}
