import React from "react";

function FooterContainer(props) {
  return (
    <div className="FooterContainer">
      <h3 key={props.props.index}>{props.props.Title}</h3>
      {props.props.content.map((items, index) => {
        return <p key={index}>{items}</p>;
      })}
    </div>
  );
}

export default FooterContainer;
