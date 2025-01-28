/* eslint-disable react/prop-types */
import React from "react";

import FooterSocialMedia from "./FooterSocialMedia";
import FooterLinks from "./FooterLinks";

import Container from "../../ui/Container";
import Span from "../../ui/Span";

function Footer({ withRootClassName }) {
  return (
    <Container
      type="footer-background"
      isSectionContainer={true}
      withRootClassName={withRootClassName}
    >
      <Container type="footer-container-column" isMaxContainer={true}>
        <Container type="footer-bottom-container">
          <FooterSocialMedia />
          <FooterLinks />
        </Container>
        <Container type="footer-copyright">
          <Span type="span-footer-text-white80">© All rights reserved</Span>
        </Container>
      </Container>
    </Container>
  );
}

export default Footer;
