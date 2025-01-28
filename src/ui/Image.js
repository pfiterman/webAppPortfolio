/* eslint-disable react/prop-types */
import React from "react";

import "./Image.css";

function Image({
  type = "img",
  alt,
  src,
  className = "image",
  viewBox,
  children,
}) {
  const image =
    type === "img" ? (
      <img alt={alt} src={src} className={className} />
    ) : (
      <svg viewBox={viewBox} className={className}>
        {children}
      </svg>
    );

  return image;
}

export default Image;
