import React from "react";
import Search from "./search/search";
import MightLike from "./mighLike/MightLike";
import Treands from "./Trends/Trends";
import style from "./trending.module.css";
const Trending = () => {
  return (
    <div className={style.trendingContainer}>
      <Search />
      <MightLike />
      <Treands />
    </div>
  );
};

export default Trending;
