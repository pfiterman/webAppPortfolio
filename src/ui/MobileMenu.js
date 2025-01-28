/* eslint-disable react/prop-types */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

import Container from "./Container";
import Button from "./Button";

function MobileMenu({ close, onCloseMobileMenu }) {
  const navigate = useNavigate();

  return (
    <Container type="mobile" dataRole="MobileMenu" closeMenuMobile={close}>
      <Container type="mobile-nav">
        <Container type="mobile-nav-container">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Container type="mobile-nav-close" dataRole="CloseMobileMenu">
            <svg
              viewBox="0 0 1024 1024"
              className="navigation-icon2"
              onClick={onCloseMobileMenu}
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </Container>
        </Container>
        <NavigationLinks
          rootClassName="navigation-links-root-class-name18"
          onClick={onCloseMobileMenu}
        ></NavigationLinks>
        <Button
          type="secondary"
          onclickButton={() => {
            navigate("/contactme");
            onCloseMobileMenu();
          }}
          className="button-secondary button button-md"
        >
          Get in touch
        </Button>
      </Container>
    </Container>
  );
}

export default MobileMenu;
