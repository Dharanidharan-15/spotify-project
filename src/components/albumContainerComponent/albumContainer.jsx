import React from "react";
import "./albumContainer.scss";
import Images from "../image/image";
import images from "../../assets/assetsExport";
import Button from "../button/button";
import dataAlbumData from "./dataset";

function AlbumContainer() {
  return (
    <div className="AlbumContainer">
      {dataAlbumData.map((items, index) => {
        return (
          <div className="cardContainer">
            <div className="albumImageSection">
              <Button
                id="albumLogo"
                icon={<i className="fa-brands fa-spotify" />}
              />
              <Images
                src={items.image}
                height="143px"
                width="135px"
              />
              <Button id="playNowAlbum" icon={<i className="fa fa-play" />} />
            </div>
            <p title={items.Title} id="Title"><b> {items.Title}</b></p>
            <p id="para">{items.para}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AlbumContainer;
