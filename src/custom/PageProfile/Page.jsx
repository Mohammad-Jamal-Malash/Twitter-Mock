import React from "react";
import FollowBtn from "../FollowBtn";
import style from "./page.module.css";
import { HiBadgeCheck } from "react-icons/hi";
const PageProfile = ({ pageName, img, userName, isVerfied }) => {
  return (
    <div className={style.container}>
      <div className={style.profileContainer}>
        <img
          src={img}
          alt={pageName}
          title={pageName}
          className={style.profileImage}
        />

        <div className={style.pageInfo}>
          <p className="primary">
            {pageName}
            {isVerfied && <HiBadgeCheck className={style.verfiedIcon} />}
          </p>
          <p className="secondary">{userName}</p>
        </div>
      </div>
      <FollowBtn />
    </div>
  );
};

export default PageProfile;
