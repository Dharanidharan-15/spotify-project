import React from "react";
import "./Footer.scss";
import FooterContainer from "../../components/FooterleftSection/FooterContainer";
import {
  FooterBottom,
  footerLeftData,
  footerRightData,
} from "../../components/FooterleftSection/dataset";
import Button from "../../components/button/button";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterTop">
        <div className="FooterLeftSection">
          {footerLeftData.map((data, index) => {
            return <FooterContainer props={data} key={index} />;
          })}
        </div>
        <div className="FooterRightSection">
          {footerRightData.map((data, index) => {
            return <Button icon={data.icon} key={index} />;
          })}
        </div>
      </div>
      <hr />
      <div className="FooterBottom">
        <div>
          {FooterBottom.map((data, index) => {
            return <Button text={data.Title} key={index} />;
          })}
        </div>
        <p>&copy;2023 Spotify DD</p>
      </div>
    </div>
  );
}

export default Footer;
