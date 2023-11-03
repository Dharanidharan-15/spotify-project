import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Searchpage from "../pages/searchpage/searchpage";
import YourLibrary from "../pages/YourLibrary/YourLibrary";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/YourLibrary" element={<YourLibrary />} />
    </Routes>
  );
}

export default Routing;
