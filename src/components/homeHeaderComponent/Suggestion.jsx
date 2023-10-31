import React from "react";
import Images from "../image/image";
import "./SuggestionComponent.scss";
import Button from "../button/button";

function Suggestion(props) {
  function handleColor(color) {
    props.setData(color);
  }
  function handleColorDown() {
    const mouseDown =
      "linear-gradient(rgba(0, 0, 0, 0.425), rgba(199, 23, 61, 0.836))";
    props.setData(mouseDown);
  }

  return (
    <div
      className="SuggestionComponent"
      onMouseOver={() => handleColor(props.color)}
      onMouseOut={() => handleColorDown()}
    >
      <Images src={props.src} height="70px" />
      <p>{props.text}</p>
      <Button icon={<i className="fa fa-play" />} />
    </div>
  );
}

export default Suggestion;
