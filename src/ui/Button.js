/* eslint-disable react/prop-types */
import React from "react";

import "./Button.css";

function Button({ children, isReset, className, onclickButton }) {
  const button = isReset ? (
    <input type="reset" className={className} />
  ) : (
    <button className={className} onClick={onclickButton}>
      {children}
    </button>
  );

  return button;
}

export default Button;
