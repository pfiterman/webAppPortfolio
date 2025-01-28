import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../../ui/Container";
import Span from "../../ui/Span";

function FooterLinks() {
  return (
    <Container type="footer-links">
      <Container type="footer-links-container">
        <Span type="span-footer-links-container-title">Links</Span>
        <Span type="footer-link">
          <NavLink to="/aboutme">About me</NavLink>
        </Span>
        <Span type="footer-link">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </Span>
      </Container>
      <Container type="footer-links-container">
        <Span type="span-footer-links-container-title">Get in touch</Span>
        <Span type="footer-link">
          <NavLink to="/contactme">Contact me</NavLink>
        </Span>
      </Container>
    </Container>
  );
}

export default FooterLinks;
