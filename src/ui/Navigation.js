import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import Container from "./Container";

import "./Navigation.css";

function Navigation() {
  const [closeMobileMenu, setCloseMobileMenu] = useState(true);
  const navigate = useNavigate();

  function onCloseMobileMenu() {
    setCloseMobileMenu(!closeMobileMenu);
  }

  return (
    <Container dataRole="Header" type="header">
      <Container type="navigation" isMaxWidth={true}>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Container type="navigation">
          <NavigationLinks />
          <Button
            onclickButton={() => navigate("/contactme")}
            className="button-secondary button button-md"
          >
            Get in touch
          </Button>
        </Container>
        <BurgerMenu onCloseBurgerMenu={onCloseMobileMenu} />
        <MobileMenu
          close={closeMobileMenu}
          onCloseMobileMenu={onCloseMobileMenu}
        />
      </Container>
    </Container>
  );
}

export default Navigation;
