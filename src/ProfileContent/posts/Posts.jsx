import React from "react";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import style from "./posts.module.css";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
const Posts = () => {
  return (
    <div
      style={{
        marginLeft: "20px",
      }}
    >
      <div className={style.postsHeader}>
        <HiArrowPathRoundedSquare className="secondary" />
        <span className="secondary">&nbsp;&nbsp;&nbsp; React Reposted</span>
      </div>
      <div className={style.postContainer}>
        <img
          src="https://i.imgur.com/15460.jpg"
          alt="post"
          className={style.postImage}
        />
        <div>
          <p>
            {" "}
            danabramov.bsky.social{" "}
            <span className="secondary"> @dan_abramov - May29</span>
          </p>
          <p>
            {" "}
            happy 10th birthday to{" "}
            <span className={style.mention}>@reactjs</span>!
          </p>
        </div>
      </div>
      <div className={style.interactionContainer}>
        <div className={style.action} title="comment">
          <FiMessageCircle />
          <span>46</span>
        </div>
        <div className={style.action} title="repost">
          <HiArrowPathRoundedSquare />
          <span>46</span>
        </div>

        <div className={style.action} title="like">
          <FaRegHeart />

          <span>3,701</span>
        </div>

        <div className={style.action} title="view">
          <AiOutlineAlignCenter />
          <span>1.1M</span>
        </div>
        <LuShare title="share" />
      </div>
    </div>
  );
};

export default Posts;
