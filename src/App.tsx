import { AnimatePresence } from "motion/react";
import { useState } from "react";
import Nav from "./features/nav";
import Patient from "./features/patient";
import Provider from "./features/provider";

export default function App() {
  const [currentUser, setCurrentUser] = useState<string>("patient");

  return (
    <div className="h-screen">
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <AnimatePresence mode="wait" initial={false}>
        {currentUser === "patient" && <Patient key="patient" />}
        {currentUser === "provider" && <Provider key="provider" />}
      </AnimatePresence>
    </div>
  );
}
