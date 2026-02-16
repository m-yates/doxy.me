import Controls from "../components/controls";
import Audio from "../components/controls/audio";
import HangUp from "../components/controls/hang-up";
import Help from "../components/controls/help";
import Options from "../components/controls/options";
import Video from "../components/controls/video";
import Screen from "../components/screen";

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
