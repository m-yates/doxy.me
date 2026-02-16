import Appearance from "../components/appearance";
import Audio from "../components/audio";
import Controls from "../components/controls";
import Dashboard from "../components/dashboard";
import HangUp from "../components/hang-up";
import Options from "../components/options";
import Screen from "../components/screen";
import Video from "../components/video";

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
