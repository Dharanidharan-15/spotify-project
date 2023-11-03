import React from "react";
import "./albumContainer.scss";
import Images from "../image/image";
import Button from "../button/button";

function AlbumContainer({ items, index }) {
  return (
    <div className="AlbumContainer">
      <div className="cardContainer">
        <div className="albumImageSection">
          <Button
            id="albumLogo"
            icon={<i className="fa-brands fa-spotify" />}
          />
          <Images src={items?.image} height="143px" width="135px" />
          <Button
            id="playNowAlbum"
            title="play"
            icon={<i className="fa fa-play" />}
          />
        </div>
        <p className="paragraph" title={items?.Title} id="Title">
          <b> {items?.Title} </b>
        </p>
        <p className="paragraph" id="para" title={items?.para}>
          {items?.para}
        </p>
      </div>
    </div>
  );
}

export default AlbumContainer;
