import React from "react";

import Container from "../../ui/Container";
import Image from "../../ui/Image";
import Span from "../../ui/Span";

function HomeFooter() {
  return (
    <Container type="footer" isMaxContainer={true}>
      <Image alt="image" src="/logo1-200h.png" className="home-image-footer" />
      <Span type="span-center">
        All rights received @<Span type="normal-bold-700">PFiterman</Span>
        <Span>| Designed by </Span>
        <Span type="normal-bold-700">teleporhq.io</Span>
      </Span>
    </Container>
  );
}

export default HomeFooter;
