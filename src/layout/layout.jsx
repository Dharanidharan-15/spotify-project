import React from "react";
import Sidebar from "../containers/sidebar/sidebar";
import Player from "../containers/player/player";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", background: "black" }}>
        <Sidebar />
        {children}
      </div>
      <Player />
    </>
  );
};

export default Layout;
