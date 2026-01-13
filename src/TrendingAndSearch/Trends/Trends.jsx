import React from "react";
import global from "../trending.module.css";
import style from "./trends.module.css";
import Trend from "../../custom/trend";
const Trends = () => {
  return (
    <div className={`${global.container} ${style.trendingContainer}`}>
     <h3>Trends for you</h3>
     <Trend header={"Gaming- Trending"} text={"#VALORANTChampions"} posts={"27.9K posts"} />
     <Trend header={""} text={"الانستا"} posts={"1,411 posts"} eng= {false}/>
     <Trend header={"Gaming- Trending"} text={"Mako"} posts={"14.1k posts"}/>
     <Trend header={""} text={"#الرسالة_اليوم"} posts={"22.3K posts"} eng= {false}/>
     <Trend header={""} text={"#Messi🦌"} posts={"77.2K posts"}/>
     <Trend header={""} text={"#جامعة_طيبه"} posts={""} eng= {false}/>
     <Trend header={""} text={"ايفون"} posts={"27.6k"} eng= {false}/>
     <Trend header={"Gaming- Trending"} text={"fantic"} posts={"8,748 posts"}/>
     <Trend header={""} text={"الاعلام العبري"} posts={""} eng= {false}/>
     <Trend header={""} text={"#InterMiamiCF🎡"} posts={"68.4k posts"}/>
     <button className={global.showMore}>Show more</button>
    </div>
  );
};

export default Trends;