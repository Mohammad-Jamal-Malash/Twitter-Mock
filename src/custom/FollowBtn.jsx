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
    padding: "5px 10px",
    borderRadius: "15px",
    border: "none",
    cursor: "pointer",
  },
};
