import Audio from "../components/audio";
import Controls from "../components/controls";
import Dashboard from "../components/dashboard";
import HangUp from "../components/hang-up";
import Options from "../components/options";
import Video from "../components/video";

export default function Patient() {
  return (
    <Controls>
      <Video />
      <Audio />
      <Dashboard />
      <Options />
      <HangUp />
    </Controls>
  );
}
