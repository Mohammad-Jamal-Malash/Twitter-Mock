import React from "react";
import ListItem from "../custom/ListItem";
import { iconConfig } from "./icons";
import sideBarStyle from "./sidebar.module.css";
import { FaXTwitter } from "react-icons/fa6";
import PersonalProfile from "../custom/personalProfile/PersonalProfile";
const SideBar = () => {
  return (
    <div className={sideBarStyle.sidebar}>
      <div >
      <div>
        <FaXTwitter className={sideBarStyle.logo} />
      </div>
        {iconConfig.map((item, index) => (
          <ListItem
            key={index}
            icon={<item.icon />}
            title={item.title}
            onClick={() => {}}
          />
        ))}
        <button className={sideBarStyle.btn}>Post</button>
      </div>
      <PersonalProfile />
    </div>
  );
};

export default SideBar;
