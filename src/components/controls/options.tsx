import { EllipsisVertical } from "lucide-react";
import { useMenu } from "../../hooks/use-menu";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import Menu from "../menu";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MENU_ITEMS = ["Settings", "Help", "Leave"];

export default function Options({ className }: Props) {
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
      <Control ref={controlRef} className={cn("", className)}>
        <Button title="Options" onClick={() => setIsOpen((prev) => !prev)}>
          <EllipsisVertical />
        </Button>
      </Control>
    </>
  );
}
