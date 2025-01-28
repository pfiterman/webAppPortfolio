/* eslint-disable react/prop-types */
import React from "react";

import "./CheckListItem.css";

function CheckListItem({ item }) {
  return (
    <div className="home-check-item">
      <svg viewBox="0 0 1024 1024" className="home-check-item-icon">
        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
      </svg>
      <span className="home-check-item-text">{item}</span>
    </div>
  );
}

export default CheckListItem;
