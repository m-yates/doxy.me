import { EllipsisVertical } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ANIMATION_STATE, MENU } from "../../lib/animations";
import { cn } from "../../lib/utils";
import Button from "../button";
import Control from "../control";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MENU_ITEMS = ["Settings", "Report an issue"];

export default function Options({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function onSelect() {
    setIsMenuOpen(false);
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
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...ANIMATION_STATE}
            variants={MENU}
            className="bg-grey-200 absolute top-0 right-0 left-0 flex translate-y-[-120%] gap-1.5 rounded-lg p-2 text-xs"
          >
            {MENU_ITEMS.map((item) => (
              <Button title={item} onClick={onSelect} key={item} className="size-auto p-2">
                {item}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Control ref={containerRef} className={cn("", className)}>
        <Button title="Options" onClick={handleClick}>
          <EllipsisVertical />
        </Button>
      </Control>
    </>
  );
}
