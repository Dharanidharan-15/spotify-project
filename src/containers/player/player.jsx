import React from "react";
import "./player.scss";
import images from "../../assets/assetsExport";
import Images from "../../components/image/image";
import Button from "../../components/button/button";
import { player_middle_section, player_right_section } from "./dataset";
import VolumeControl from "../../components/volumeControl/volumeControl";

function Player() {
  const style = { styles: "-webkit-appearance: none !important" };
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
        <Button icon={<i className="fa fa-heart" />} />
      </div>
      <div className="player-middle">
        <div>
          {player_middle_section.map((data, index) => {
            return <Button icon={data.icon} key={index} />;
          })}
        </div>
        <VolumeControl style={style.styles} />
      </div>
      <div className="player-rightSection">
        {player_right_section.map((data, index) => {
          return <Button icon={data.icon} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Player;
