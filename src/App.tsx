import { AnimatePresence } from "motion/react";
import Screen from "./components/screen";
import Nav from "./features/nav";
import Patient from "./features/patient";
import Provider from "./features/provider";
import { useAppStore } from "./hooks/use-app-store";

export default function App() {
  const { currentUser } = useAppStore();

  return (
    <div className="flex h-screen flex-col gap-6 overflow-hidden bg-black p-4 pb-10">
      <Nav />
      <Screen />
      <AnimatePresence mode="wait" initial={false}>
        {currentUser === "patient" && <Patient key="patient" />}
        {currentUser === "provider" && <Provider key="provider" />}
      </AnimatePresence>
    </div>
  );
}
