import React from "react";
import "./homepage.scss";
import Suggestion from "../../components/homeHeaderComponent/Suggestion";
import dataSuggestion from "../../components/homeHeaderComponent/dataset";
import Button from "../../components/button/button";
import AlbumContainer from "../../components/albumContainerComponent/albumContainer";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="homepageTop">
        <div className="navigationButtons">
          <Button icon={<i className="fa-solid fa-chevron-left" />} />
          <Button icon={<i className="fa-solid fa-chevron-right" />} />
        </div>
        <div className="homepageTopRightActions">
          <Button text="Explore Premium" />
          <Button
            id="installApp"
            text="Install App"
            icon={<i className="fa fa-circle-arrow-down" />}
          />
          <Button
            id="rightActions"
            icon={<i className="fa-regular fa-bell" />}
          />
          <Button
            id="rightActions"
            icon={<i className="fa-regular fa-user" />}
          />
        </div>
      </div>
      <div className="homepageHeader">
        <h1>Good morning</h1>
        <div className="suggestions">
          {dataSuggestion.map((items, index) => {
            return (
              <Suggestion src={items.image} text={items.text} key={index} />
            );
          })}
        </div>
      </div>

      <div className="albumsContainer">
        <h1>More like Jolly vibes</h1>
        <AlbumContainer />
      </div>
    </div>
  );
}

export default Homepage;
