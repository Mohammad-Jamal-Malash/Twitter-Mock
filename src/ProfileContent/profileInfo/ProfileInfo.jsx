import React from "react";

import style from "./profileInfo.module.css";
import { MdNotificationsNone, MdOutlineMoreHoriz } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import handelHover from "./animation";

const ProfileInfo = () => {
  return (
    <div className={style.profileInfoContainer}>
      <img
        src="cover.jpg"
        alt="cover"
        title="cover"
        className={style.coverImage}
      />
      <div
        style={{
          marginLeft: "20px",
        }}
      >
        <div className={style.profileInfo}>
          <div>
            <div className={style.profileImageContainer}>
              <img
                src="profile.jpg"
                alt="profile"
                title="profile"
                className={style.profileImage}
              />
            </div>

            <div className={style.info}>
              <h3 className="primary">React</h3>
              <p className="secondary">@reactjs</p>
            </div>
          </div>
          <div>
            <button className={`${style.btn} ${style.btnIcon}`}>
              <MdOutlineMoreHoriz />
            </button>
            <button className={`${style.btn} ${style.btnIcon}`}>
              <MdNotificationsNone />
            </button>
            <button className={style.btn}>Following</button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
          }}
        >
          <p className={style.descriptionTxt}>
            The library for web and native user interfaces
          </p>
          <div>
            <FaLink className={style.linkIcon} />
            <a
              href="https://react.dev/"
              target="_blank"
              className={style.marginRight15}
            >
              {" "}
              react.dev
            </a>
            <SlCalender className="secondary" />
            <span className="secondary"> Joined July 2013</span>
          </div>
          <div>
            <span className={`${style.txt} primary`}>267</span>
            <span className={`${style.txt} secondary ${style.marginRight15}`}>
              {" "}
              Follwing
            </span>
            <span className={`${style.txt} primary`}>708.1k</span>
            <span className={`${style.txt} secondary`}> Follwers</span>
          </div>
          <div className={style.followers}>
            <img
              src="https://i.imgur.com/15522.jpg"
              alt="img 1"
              className={style.smallImg}
            />
            <img
              src="https://i.imgur.com/15523.jpg"
              alt="img 2 "
              className={style.smallImg}
            />
            <img
              src="https://i.imgur.com/15524.jpg"
              alt="img 3"
              className={style.smallImg}
            />
            <span className="secondary">
              Followed by Mohammad Kukhun, Yazen Alsade 💫 and 14 others you
              follow
            </span>
          </div>
          <div className={style.fotterBtnContainer}>
            <button
                onMouseEnter={() => {
                    handelHover(0);
                }}
              className={`${style.fotterBtn}`}
            >
              Posts
            </button>
            <button className={style.fotterBtn} onMouseEnter={()=>{
                handelHover(1);
            }}>
              Replies
            </button>
            <button onMouseEnter={()=>{
                handelHover(2);
            }} className={style.fotterBtn}>
              Media
            </button>
            <button onMouseEnter={()=>{
                handelHover(3);
            }} className={style.fotterBtn}>
              Likes
            </button>
          </div>
          <div id="underline" className={style.line}></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
