/* eslint-disable react/prop-types */
import React from "react";

import "./Form.css";

function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
}

export default Form;
