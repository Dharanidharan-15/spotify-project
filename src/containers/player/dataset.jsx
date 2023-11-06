import VolumeControl from "../../components/volumeControl/volumeControl";

export const player_middle_section = [
  {
    icon: <i className="fa fa-shuffle" />,
  },
  { icon: <i className="fa fa-backward-step" /> },
  {
    icon: <i className="fa fa-circle-play playHeight" />,
  },
  {
    icon: <i className="fa fa-forward-step" />,
  },
  {
    icon: <i className="fa fa-repeat" />,
  },
];

export const player_right_section = [
  {
    icon: <i className="fa fa-microphone" />,
    icon2: <i className="fa-solid fa-microphone-slash " />,
  },
  {
    icon: <i className="fa fa-list" />,
    icon2: <i className="fa fa-list" />,
  },
  {
    icon: <i className="fa fa-laptop" />,
    icon2: <i className="fa fa-laptop" />,
  },
  {
    icon: <i className="fa fa-volume-high" />,
    icon2: <i className="fa-solid fa-volume-xmark" />,
  },
  {
    icon: <VolumeControl />,
    icon2: <VolumeControl />,
  },
  {
    icon: <i className="fa fa-up-right-and-down-left-from-center" />,
    icon2: <i className="fa fa-up-right-and-down-left-from-center" />,
  },
];
