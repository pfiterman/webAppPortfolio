/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLink.css";

function NavigationLink({ icon, itemName, itemURL, onClick }) {
  return (
    <span className="navigation-links-text Navigation-Link" onClick={onClick}>
      <NavLink to={itemURL} className="navigation-links-item">
        {icon} {itemName}
      </NavLink>
    </span>
  );
}

export default NavigationLink;
