import React from "react";
import './homepage.scss'
import Suggestion from "../../components/homeHeaderComponent/Suggestion";

function Homepage() {
  return <div className="Homepage">
    <div className="homepageHeader">
        <h1>Good morning</h1>
        <Suggestion />
    </div>
  </div>;
}

export default Homepage;
