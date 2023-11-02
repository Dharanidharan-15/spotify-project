import React, { useRef } from "react";
import "./homepage.scss";
import Suggestion from "../../components/homeHeaderComponent/Suggestion";
import dataSuggestion from "../../components/homeHeaderComponent/dataset";
import Button from "../../components/button/button";
import AlbumContainer from "../../components/albumContainerComponent/albumContainer";
import {
  dataAlbumData1,
  dataAlbumData2,
  dataAlbumData3,
} from "../../components/albumContainerComponent/dataset";

function Homepage() {
  const colorRef = useRef(null);
  // const [color, setColor] = useState("#7bc002");
  function setData(data) {
    colorRef.current.style.background = data;
  }
  return (
    <div className="Homepage" ref={colorRef}>
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
              <Suggestion
                src={items.image}
                text={items.text}
                key={index}
                color={items.color}
                setData={setData}
              />
            );
          })}
        </div>
      </div>

      <div className="albumsContainer">
        <div className="albumContainerheader">
          <h1>More like Jolly vibes</h1>
          <p className="showAll">Show all</p>
        </div>
        <div className="displayingSection">
          {dataAlbumData1.map((items, index) => {
            return <AlbumContainer items={items} key={index} />;
          })}
        </div>
      </div>

      <div className="albumsContainer">
        <div className="albumContainerheader">
          <h1>Fresh new music</h1>
          <p className="showAll">Show all</p>
        </div>
        <div className="displayingSection">
          {dataAlbumData2.map((items, index) => {
            return <AlbumContainer items={items} key={index} />;
          })}
        </div>
      </div>

      <div className="albumsContainer">
        <div className="albumContainerheader">
          <h1>Your top mixes</h1>
          <p className="showAll">Show all</p>
        </div>
        <div className="displayingSection">
          {dataAlbumData3.map((items, index) => {
            return <AlbumContainer items={items} key={index} />;
          })}
        </div>
      </div>

      <div className="albumsContainer">
        <div className="albumContainerheader">
          <h1>Made for you</h1>
          <p className="showAll">Show all</p>
        </div>
        <div className="displayingSection">
          {dataAlbumData1.map((items, index) => {
            return <AlbumContainer items={items} key={index} />;
          })}
        </div>
      </div>

      <div className="albumsContainer">
        <div className="albumContainerheader">
          <h1>Jump back in</h1>
          <p className="showAll">Show all</p>
        </div>
        <div className="displayingSection">
          {dataAlbumData2.map((items, index) => {
            return <AlbumContainer items={items} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
