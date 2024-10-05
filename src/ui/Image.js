import React from "react";
import "./index.css";

const Image = ({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  className = "",
}) => {
  return (
    <img src={src} alt={alt} style={{ width, height }} className={className} />
  );
};

export default Image;
