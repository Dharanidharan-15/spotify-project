import React from "react";
import "./homepage.scss";
import Suggestion from "../../components/homeHeaderComponent/Suggestion";
import dataSuggestion from "../../components/homeHeaderComponent/dataset";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="homepageHeader">
        <h1>Good morning</h1>
        <div className="suggestions">
        {dataSuggestion.map((items,index) => {
          return <Suggestion src={items.image} text={items.text} key={index}/>;
        })}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
