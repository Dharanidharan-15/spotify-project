import React, { useState } from "react";
import "./player.scss";
import images from "../../assets/assetsExport";
import Images from "../../components/image/image";
import Button from "../../components/button/button";
// import { player_middle_section } from "./dataset";
import VolumeControl from "../../components/volumeControl/volumeControl";

function Player() {
  // const style = { styles: "-webkit-appearance: none !important" };
  const [songLike, setSongLike] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [IsPlaying, setIsPlaying] = useState(true)
  const [isvolumeOn, setIsVolumeOn] = useState(true);
  const [isShrink,setIsShirnk] = useState(true);
  const handleLikeCLick = () => {
    setSongLike(!songLike);
  };
  // const onClickData = [
  //   () => setIsMicOn(!isMicOn),
  //   () => {},
  //   () => {},
  //   () => setIsVolumeOn(!isvolumeOn),
  // ];
  // player_right_section.map((data, index) => {
  //   data.onClick = onClickData[index];
  //   if(index === 0){

  //   }
  // });
  // icon: isMicOn
  // ? player_right_section[0].icon
  // : player_right_section[0].icon2,

   const player_middle_section = [
    {
      icon: <i className="fa fa-shuffle" />,
    },
    { icon: <i className="fa fa-backward-step" /> },
    {
      icon: IsPlaying ? <i className="fa fa-circle-pause playHeight" /> : <i className="fa fa-circle-play playHeight" />,
      onClick: ()=>setIsPlaying(!IsPlaying),
    },
    {
      icon: <i className="fa fa-forward-step" />,
    },
    {
      icon: <i className="fa fa-repeat" />,
    },
  ];

  const player_right_section = [
    {
      icon: isMicOn ? (
        <i className="fa fa-microphone" />
      ) : (
        <i className="fa-solid fa-microphone-slash " />
      ),
      onClick: () => setIsMicOn(!isMicOn),
    },
    {
      icon: <i className="fa fa-list" />,
    },
    {
      icon: <i className="fa fa-laptop" />,
    },
    {
      icon: isvolumeOn ? (
        <i className="fa fa-volume-high" />
      ) : (
        <i className="fa-solid fa-volume-xmark" />
      ),
      onClick: () => setIsVolumeOn(!isvolumeOn),
    },
    {
      icon: <VolumeControl />,
    },
    {
      icon: isShrink ? <i className="fa-solid fa-down-left-and-up-right-to-center"/>:<i className="fa fa-up-right-and-down-left-from-center" />,
      onClick: ()=> setIsShirnk(!isShrink),
    },
  ];

  return (
    <div className="Player">
      <div className="player-leftSection">
        <Images
          src={images.player_song_cover}
          height="70px"
          text="Dreamin On"
          tag="Netflix"
        />
        <p>
          <strong>Dreamin On</strong> Netflix
        </p>
        <Button
          icon={
            <i className={songLike ? "fa-regular fa-heart " : "fa fa-heart"} />
          }
          onClick={handleLikeCLick}
        />
      </div>
      <div className="player-middle">
        <div>
          {player_middle_section.map((data, index) => {
            return <Button icon={data.icon} key={index} onClick={data.onClick}/>;
          })}
        </div>
        <VolumeControl />
      </div>
      <div className="player-rightSection">
        {player_right_section.map((data, index) => {
          return <Button icon={data.icon} key={index} onClick={data.onClick} />;
        })}
      </div>
    </div>
  );
}

export default Player;
