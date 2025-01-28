/* eslint-disable react/prop-types */
import React from "react";

import "./FormRow.css";

function FormRow({ label, error, children }) {
  return (
    <div className="formRow">
      {label && (
        <label htmlFor={children.props.id} className="label">
          {label}
        </label>
      )}
      {children}
      {error && <span className="span">{error}</span>}
    </div>
  );
}

export default FormRow;
