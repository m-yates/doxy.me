import Controls from "../components/controls";
import Appearance from "../components/controls/appearance";
import Audio from "../components/controls/audio";
import Dashboard from "../components/controls/dashboard";
import HangUp from "../components/controls/hang-up";
import Options from "../components/controls/options";
import Video from "../components/controls/video";
import Screen from "../components/screen";

export default function Provider() {
  return (
    <>
      <Screen />
      <Controls>
        <Video />
        <Audio />
        <Dashboard />
        <Appearance />
        <Options />
        <HangUp />
      </Controls>
    </>
  );
}
