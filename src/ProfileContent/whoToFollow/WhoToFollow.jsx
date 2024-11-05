import React from "react";
import style from "./whoToFollow.module.css";
import mightLike from "../../utils/mightLike";
import PageProfile from "../../custom/PageProfile/page";
const WhoToFollow = () => {
  return (
    <div style={{
        margin: "0 20px"
    }}>
      <h2 className={style.headerText}>Who to follow</h2>
      {mightLike.map((item) => (
          <PageProfile
            key={item.id}
            pageName={item.name}
            img={item.image}
            userName={item.email}
            isVerfied={item.isVerfied}
            description={item.description}
            followedBy={item.followedBy}
          />
        ))}
    </div>
  );
};

export default WhoToFollow;