import React from "react";
import "./index.css";

const Flex = ({
  direction = "",
  justify = "center",
  align = "start",
  className = "",
  children,
}) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} items-${align} ${className} w-full`}>
      {children}
    </div>
  );
};

export default Flex;
