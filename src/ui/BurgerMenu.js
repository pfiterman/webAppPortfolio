/* eslint-disable react/prop-types */
import React from "react";

import "./BurgerMenu.css";

function BurgerMenu({ onCloseBurgerMenu }) {
  return (
    <div data-role="BurgerMenu" className="navigation-burger-menu">
      <svg
        viewBox="0 0 1024 1024"
        className="navigation-icon"
        onClick={onCloseBurgerMenu}
      >
        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
      </svg>
    </div>
  );
}

export default BurgerMenu;
