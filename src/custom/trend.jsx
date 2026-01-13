import React from "react";

const Trend = ({text, posts, header, eng = true}) => {
  return (
    <div>
      <p className="secondary">{header}</p>
      <p  style={{
            textAlign: eng ? "left" : "right",
            margin:"5px 0",
        }}
      className="primary">{text}</p>
      <p className="secondary">{posts}</p>
    </div>
  );
};

export default Trend;
