import React from "react";
import FollowBtn from "../FollowBtn";
import style from "./page.module.css";
import { HiBadgeCheck } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
const PageProfile = ({
  pageName,
  img,
  userName,
  isVerfied,
  description = null,
  followedBy = null,
}) => {
  return (
    <div>
        {followedBy && ( <p 
          style={{
            margin:"20px 55px  -10px 32px"
          }}
        className="secondary"><FaUser/> &nbsp; {followedBy}</p>)}
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

      {description && <p
      style={{
        margin:"-7px 55px 10px 60px"
      }}
      >{description}</p>}
    </div>
  );
};

export default PageProfile;
