/* eslint-disable react/prop-types */
import React from "react";

import "./Details.css";

function Details({ description, children, withMarginTwoUnits }) {
  let className = "details-description";
  className = withMarginTwoUnits
    ? `${className} with-margin-bottom-twounits`
    : `${className} with-margin-bottom`;

  return (
    <div className="details-container">
      <p className={className}>{description}</p>
      {children}
    </div>
  );
}

export default Details;
