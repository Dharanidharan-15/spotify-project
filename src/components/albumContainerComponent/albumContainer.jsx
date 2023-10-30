import React from "react";
import "./albumContainer.scss";
import Images from "../image/image";
import images from "../../assets/assetsExport";
import Button from "../button/button";

function AlbumContainer() {
  return (
    <div className="AlbumContainer">
      <div className="albumImageSection">
        <Images src={images.player_song_cover} height="143px" width="135px" />
        <Button icon={<i className="fa fa-play" />} />
      </div>
      <div>
        <p>hii there hello every</p>
        <p>hello everyone</p>
      </div>
      {/* <TruncateText text="Anirudh Ravichandran is popularly known to a rockstar"/>
      <TruncateText /> */}
    </div>
  );
}

export default AlbumContainer;
