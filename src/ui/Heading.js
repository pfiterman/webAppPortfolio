/* eslint-disable react/prop-types */
import React from "react";

import "./Heading.css";

function Heading({ children, type, className }) {
  const headingLevels = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  };

  const HeadingTag = headingLevels[type] || "h1";
  return <HeadingTag className={className}>{children}</HeadingTag>;
}

export default Heading;
