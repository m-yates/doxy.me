import { motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";
import { useMenu } from "../../hooks/use-menu";
import { MENU_ITEM } from "../../lib/animations";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import Menu from "../menu";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MENU_ITEMS = [
  "Adjust view",
  "Full screen",
  "Backgrounds and effects",
  "Report a problem",
  "Troubleshooting",
  "Settings"
];

export default function Options({ className }: Props) {
  const { isOpen, setIsOpen, controlRef, menuRef } = useMenu();

  return (
    <>
      <Control ref={controlRef} className={cn("relative", className)}>
        <Button title="Options" onClick={() => setIsOpen((prev) => !prev)}>
          <EllipsisVertical />
        </Button>
        <Menu isOpen={isOpen} menuRef={menuRef}>
          {MENU_ITEMS.map((item) => (
            <motion.div key={item} variants={MENU_ITEM}>
              <Button
                title={item}
                onClick={() => setIsOpen(false)}
                className="size-auto w-full justify-start p-3 text-left whitespace-nowrap"
              >
                {item}
              </Button>
            </motion.div>
          ))}
        </Menu>
      </Control>
    </>
  );
}
