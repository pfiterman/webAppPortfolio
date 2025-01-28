/* eslint-disable react/prop-types */
import React from "react";

import "./Span.css";

function Span({ children, type, onClick }) {
  const className = type ? type : `span-text`;
  return (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  );
}

export default Span;
