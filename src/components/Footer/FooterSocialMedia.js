import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../../ui/Container";
import Span from "../../ui/Span";

import Linkedin from "../SocialMedia/Linkedin";
import Youtube from "../SocialMedia/Youtube";

function FooterSocialMedia() {
  return (
    <Container type="footer-left-side">
      <Container type="footer-social-media">
        <Span type="span-footer-social-media-text">Follow me</Span>
        <Container type="footer-container-icon">
          <NavLink to="https://www.linkedin.com/in/pfiterman/" target="_blank">
            <Linkedin />
          </NavLink>
          <NavLink to="https://www.youtube.com/pfiterman" target="_blank">
            <Youtube />
          </NavLink>
        </Container>
      </Container>
    </Container>
  );
}

export default FooterSocialMedia;
