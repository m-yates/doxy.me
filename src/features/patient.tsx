import Audio from "../components/audio";
import Controls from "../components/controls";
import HangUp from "../components/hang-up";
import Help from "../components/help";
import Options from "../components/options";
import Screen from "../components/screen";
import Video from "../components/video";

export default function Patient() {
  return (
    <>
      <Screen />
      <Controls>
        <Video />
        <Audio />
        <Help />
        <Options />
        <HangUp />
      </Controls>
    </>
  );
}
