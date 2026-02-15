import Audio from "../components/audio";
import Controls from "../components/controls";
import HangUp from "../components/hang-up";
import Help from "../components/help";
import Settings from "../components/settings";
import Video from "../components/video";

export default function Patient() {
  return (
    <Controls>
      <Video />
      <Audio />
      <Help />
      <Settings />
      <HangUp />
    </Controls>
  );
}
