import { ChevronUp, Mic, MicOff } from "lucide-react";
import { useState } from "react";
import { useMenu } from "../../hooks/use-menu";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import ToggleButton from "../toggle-button";
import Menu from "./menu";

interface Props {
  className?: string;
}

const MENU_ITEMS = ["Settings", "Report an issue"];

export default function Audio({ className }: Props) {
  const [hasAudio, setHasAudio] = useState(true);
  const { close, toggle, isOpen } = useMenu();

  return (
    <>
      <Menu isOpen={isOpen}>
        {MENU_ITEMS.map((item) => (
          <Button title={item} onClick={close} key={item} className="size-auto p-2">
            {item}
          </Button>
        ))}
      </Menu>
      <Control className={cn("group flex items-center rounded-lg", className)}>
        <ToggleButton
          title="Toggle audio"
          onClick={() => setHasAudio((prev) => !prev)}
          isActive={hasAudio}
          activeIcon={<Mic />}
          inactiveIcon={<MicOff />}
        />
        <button
          title="Audio settings"
          className="cursor-pointer pl-1 transition-opacity duration-250 ease-out hover:opacity-50"
          onClick={toggle}
        >
          <ChevronUp
            className={cn(
              "size-4 transition-transform duration-250 ease-out",
              isOpen && "rotate-180"
            )}
          />
        </button>
      </Control>
    </>
  );
}
