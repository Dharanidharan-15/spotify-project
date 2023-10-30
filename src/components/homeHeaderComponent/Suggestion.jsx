import React from "react";
import Images from "../image/image";
import "./SuggestionComponent.scss";
import Button from "../button/button";

function Suggestion(props) {
  return (
    <div className="SuggestionComponent">
      <Images src={props.src} height="70px" />
      <p>{props.text}</p>
      <Button icon={<i className="fa fa-play" />} />
    </div>
  );
}

export default Suggestion;
