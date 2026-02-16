import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";
import Menu from "./menu";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MENU_ITEMS = ["Settings", "Help", "Leave"];

export default function Options({ className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
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
    <Control ref={containerRef} className={cn("", className)}>
      <Button title="Options" onClick={() => setIsMenuOpen((prev) => !prev)}>
        <EllipsisVertical />
      </Button>
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
