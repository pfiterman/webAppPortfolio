/* eslint-disable react/prop-types */
import React from "react";

function Input({ type, placeholder, className }) {
  return <input type={type} placeholder={placeholder} className={className} />;
}

export default Input;
