import React from "react";
import "./sidebar.scss";
import { data1, data2, FavList } from "./dataset";
import Button from "../../components/button/button";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar-container">
        <div className="logo">
          <i className="fa-brands fa-spotify"></i>
          <h2>Spotify</h2>
        </div>
        {data1.map((data, index) => {
          return (
            <Button
              className=" btn"
              key={index}
              text={data.text}
              icon={data.icon}
            />
          );
        })}
      </div>

      <div className="sidebar-container">
        {data2.map((data, index) => {
          return (
            <Button
              className=" btn"
              key={index}
              text={data.text}
              icon={data.icon}
            />
          );
        })}
      </div>

      <div className="sidebar-container">
        <h3>FAV</h3>
        {FavList.map((item, id) => {
          return <Button className="btn" key={id} text={item} />;
        })}
      </div>

      {/* <div className="sidebar-install-app">
        <i className="fa fa-download"></i>
        <a href="#">Install App</a>
      </div> */}
    </div>
  );
}

export default Sidebar;
