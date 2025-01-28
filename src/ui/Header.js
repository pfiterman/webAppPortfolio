/* eslint-disable react/prop-types */
import React from "react";

import "./Header.css";

function Header({ title, align, children, withMarginTop }) {
  const description = children ? (
    <span className={`header-text ${align}`}>
      <span>{children}</span>
    </span>
  ) : null;

  let className = "header-text-title-description";
  if (withMarginTop) className = `${className} header-margin-top`;
  className = `${className} Heading2`;

  return (
    <>
      <h2 className={className}>
        <span>{title}</span>
      </h2>
      {description}
    </>
  );
}

export default Header;
