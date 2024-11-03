import React from "react";
import PageProfile from "../../custom/PageProfile/page";
import mightLike from "../../utils/mightLike";
import style from "./mightLike.module.css";
import global from "../trending.module.css";
const MightLike = () => {
  return (
    <div className={`${style.MightLikeContainer} ${global.container}`}>
        <h3>You might like</h3>
        {mightLike.map((item) => (
          <PageProfile
            key={item.id}
            pageName={item.name}
            img={item.image}
            userName={item.email}
            isVerfied={item.isVerfied}
          />
        ))}
        <button className={global.showMore}>Show more</button>
      </div>
  );
};

export default MightLike;
