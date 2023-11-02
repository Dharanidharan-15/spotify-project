import React from "react";
import "./searchpage.scss";
import Button from "../../components/button/button";
import CategoryComponent from "../../components/CategoryCompSearchPage/CategoryComponent";
import { categoryComponentData } from "../../components/CategoryCompSearchPage/dataset";

function Searchpage() {
  return (
    <div className="Searchpage">
      <div className="homepageTop">
        <div className="navigationButtons">
          <Button
            className="chevronLeft"
            icon={<i className="fa-solid fa-chevron-left" />}
          />
          <Button
            className="chevronRight"
            icon={<i className="fa-solid fa-chevron-right" />}
          />
          <i className="fa fa-search Searching" />
          <input
            type="input"
            className="topSearchBar"
            placeholder="What do you want to listen to?"
          />
        </div>
        <div className="homepageTopRightActions">
          {/* <Button text="Explore Premium" /> */}
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
      <div className="searchpageBody">
        <h2>Browse all</h2>
        <div className="searchpageBodyInner">
          {categoryComponentData.map((items, index) => {
            return <CategoryComponent key={index} props={items} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
