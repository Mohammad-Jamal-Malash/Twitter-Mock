import React from "react";
import Search from "./search/search";
import MightLike from "./mighLike/MightLike";
import Treands from "./Trends/Trends";

const Trending = () => {
  return (
    <div
      style={{
        width: "80%",
        overflow: "auto",
        height: "100vh",
        scrollbarColor: "transparent transparent",
        

      }}
    >
      <Search />
      <MightLike />
      <Treands />
    </div>
  );
};

export default Trending;
