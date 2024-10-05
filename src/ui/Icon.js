import React from "react";
import "./index.css";

// The icon component should be passed as a prop directly
const Icon = ({
  IconComponent,
  size = "24px",
  color = "white",
  className = "",
}) => {
  return (
    <IconComponent
      style={{ fontSize: size, color: color }}
      className={className}
    />
  );
};

export default Icon;
