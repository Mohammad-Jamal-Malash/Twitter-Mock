import React from "react";

const FollowBtn = () => {
  return (
    <div>
      <button style={style.followBtn}>Follow</button>
    </div>
  );
};

export default FollowBtn;
const style = {
  followBtn: {
    backgroundColor: "white",
    color: "black",
    padding: "7px 14px",
    borderRadius: "15px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
