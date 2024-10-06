import React from "react";
import "./index.css";

const Flex = ({
  direction = "row",
  justify = "center",
  align = "center",
  className = "",
  children,
  backgroundColor = "",
}) => {
  const directionClass = direction === "col" ? "flex-col" : "flex-row";
  // const justifyClass =
  //   {
  //     start: "justify-start",
  //     center: "justify-center",
  //     between: "justify-between",
  //     end: "justify-end",
  //   }[justify] || "justify-center";

  // const alignClass =
  //   {
  //     start: "items-start",
  //     center: "items-center",
  //     end: "items-end",
  //   }[align] || "items-center";

  return (
    <div
      className={`flex ${directionClass} justify-${justify} items-${align}  ${className} w-full`}
      style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export default Flex;
