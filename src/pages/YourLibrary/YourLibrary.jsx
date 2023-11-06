import React from "react";
import "./YourLibrary.scss";
import Footer from "../../containers/Footer/Footer";
import Button from "../../components/button/button";
import Images from "../../components/image/image";
import images from "../../assets/assetsExport";

function YourLibrary() {
  return (
    <div className="YourLibrary">
      <div className="homepageTop yourlibrary">
        <div className="LibraryTop">
          <div className="navigationButtons">
            <Button
              className="chevrons"
              title="Go back"
              icon={<i className="fa-solid fa-chevron-left" />}
            />
            <Button
              className="chevrons"
              title="Go forward"
              icon={<i className="fa-solid fa-chevron-right" />}
            />
          </div>
          <div className="homepageTopRightActions">
            <Button text="Explore Premium" title="Upgrade to Premium" />
            <Button
              id="installApp"
              text="Install App"
              icon={<i className="fa fa-circle-arrow-down" />}
            />
            <Button
              id="rightActions"
              title="What's New"
              icon={<i className="fa-regular fa-bell" />}
            />
            <Button
              id="rightActions"
              title="User"
              icon={<i className="fa-regular fa-user" />}
            />
          </div>
        </div>
        <div className="LibraryPageMainContent">
          <Images src={images.Liked_songs} height={"230rem"} />
          <div className="libraryMainSideContent">
            <p>Playlist</p>
            <h1>Daily Mix 1</h1>
            <p>A.R. Rahman, Harris Jayaraj, Hariharan and more</p>
            <p className="BrandPara">
              <i className="fa-brands fa-spotify" /> Spotify . 50 songs,{" "}
              <span>about 3 hr 30 min</span>
            </p>
          </div>
        </div>
      </div>
      <div className="songTable">
        <div className="SongTableTop">
          <i className="fa fa-circle-play" id="playButton" />
          <i className="fa-regular fa-heart" />
          <i className="fa-solid fa-ellipsis"/>
        </div>

        <table className="songTableMain" width={"1500px"}>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Date added</th>
            <th>
              <i className="fa fa-clock" />
            </th>
          </tr>
          {/* <hr /> */}

          <tr>
            <td>1</td>
            <td>Thozha</td>
            <td>Thozha</td>
            <td>today</td>
            <td>3:12</td>
          </tr>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default YourLibrary;
