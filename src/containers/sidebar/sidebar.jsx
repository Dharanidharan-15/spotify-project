import React from "react";
import "./sidebar.scss";
import { data1, data2, FavList } from "./dataset";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="Sidebar">
      <div className="sidebar-container">
        <div className="logo">
          <i className="fa-brands fa-spotify" />
          <h2>Spotify</h2>
        </div>
        {data1.map((data, index) => {
          data.click = () => {
            navigate(data.path);
            window.location.pathname = data.path;
          };
          return (
            <Button
              className={window.location.pathname === data.path ? "btn active" : " btn"}
              key={index}
              text={data.text}
              icon={data.icon}
              onClick={data.click}
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
        {FavList.map((item, index) => {
          return <Button className="btn" key={index} text={item} />;
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
