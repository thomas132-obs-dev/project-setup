import React from "react";
import "./index.css";

const Text = ({
  content,
  size = "16px",
  color = "black",
  weight = "normal",
  className = "",
}) => {
  return (
    <p
      style={{ fontSize: size, color, fontWeight: weight }}
      className={className}>
      {content}
    </p>
  );
};

export default Text;
