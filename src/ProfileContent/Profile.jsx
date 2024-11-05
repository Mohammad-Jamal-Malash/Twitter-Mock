import React from "react";
import style from "./profile.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Posts from "./posts/posts";
import WhoToFollow from "./whoToFollow/WhoToFollow";

const Profile = () => {
  return (
    <div className={style.profileContentContainer}>
      {/* Profile Header */}
      <div className={style.headrContainer}>
        <button className={style.backBtn}>
          <MdKeyboardBackspace />
        </button>
        <div>
          <h3 className="primary">React</h3>
          <p className="secondary">2,611 posts</p>
        </div>
      </div>
      <div>
        {/* Profile Info */}
        <ProfileInfo />
        {/* Profile Posts */}
        <Posts />
        <hr />
        {/*Who To Follow */}
        <WhoToFollow />
        <br/>
        <hr />
        {/* Footer */}
        <div className={style.footer}>
          Mohammad Malash Abo Malash
          <br />
          <p className="secondary">© mohammadmalashcareer@gmail.com</p>
          </div>
      </div>
    </div>
  );
};

export default Profile;
