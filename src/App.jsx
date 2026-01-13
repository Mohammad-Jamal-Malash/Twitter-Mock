import React from "react";

import Profile from "./ProfileContent/Profile";
import SideBar from "./SideBar/SideBar";
import Trending from "./TrendingAndSearch/Trending";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="sidebar">
      <SideBar />
      </div >
      <div className="profile">
      <Profile />
      </div>
      <div className="trending">
      <Trending />
      </div>
    </div>
  );
};

export default App;
