import React from "react";
import "./YourLibrary.scss";
import Footer from "../../containers/Footer/Footer";
import Button from "../../components/button/button";

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
        khdweiv
      </div>

      <Footer />
    </div>
  );
}

export default YourLibrary;
