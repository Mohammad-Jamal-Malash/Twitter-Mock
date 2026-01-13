import React from 'react';
import style from './personalProfile.module.css';
import { IoIosMore } from "react-icons/io";
import img from "../../assets/pic.jpg";
const PersonalProfile = () => {
  return (
    <div className={style.profile}>
      <img
        src={img}
        alt="profile image"
        title="profile image"
        className={style.profileImage}
      />
      <div className={style.info}>
        <b className={style.name}>Mohammad Dwika...</b>
        <b className={style.email}>@Mohammad Dwika...</b>
      </div>
      <IoIosMore className={style.moreIcon}/>
    </div>
  );
}
export default PersonalProfile;