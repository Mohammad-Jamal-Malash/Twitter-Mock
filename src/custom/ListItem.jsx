import React from "react";
import style from "../SideBar/sidebar.module.css";
const ListItem = ({ icon, title, onClick }) => {
  return (
    <div className={style.listItem} onClick={onClick}>
      <span className={style.icon}>{icon}</span>
      <span style={styles.title}>{title}</span>
    </div>
  );
};

const styles = {
  title: {
    fontSize: "16px",
  },
};

export default ListItem;
