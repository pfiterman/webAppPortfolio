import React from "react";

import Container from "../../ui/Container";
import Span from "../../ui/Span";
import Heading from "../../ui/Heading";

function OurServicesHeader() {
  return (
    <Container type="our-services-header-container">
      <Span type="normal-center-700 color-white">our services</Span>
      <Heading type="h2" className="heading-our-process-description Heading2">
        We provide a wide range of<br></br>
        creative solutions
      </Heading>
    </Container>
  );
}

export default OurServicesHeader;
