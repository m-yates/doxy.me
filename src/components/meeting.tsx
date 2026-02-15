import { AnimatePresence } from "motion/react";
import { useAppStore } from "../hooks/use-app-store";
import Screen from "./screen";

export default function Meeting() {
  const { currentUser } = useAppStore();

  return (
    <AnimatePresence mode="wait" initial={false}>
      {currentUser === "patient" && <Screen key="patient" />}
      {currentUser === "provider" && <Screen key="provider" />}
    </AnimatePresence>
  );
}
