import { EllipsisVertical } from "lucide-react";
import { useMenu } from "../../hooks/use-menu";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import Menu from "./menu";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MENU_ITEMS = ["Settings", "Report an issue"];

export default function Options({ className }: Props) {
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
      <Control className={cn("", className)}>
        <Button title="Options" onClick={toggle}>
          <EllipsisVertical />
        </Button>
      </Control>
    </>
  );
}
