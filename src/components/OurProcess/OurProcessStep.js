/* eslint-disable react/prop-types */
import React from "react";

import Container from "../../ui/Container";
import Span from "../../ui/Span";

function OurProcessStep({ number, title, children }) {
  return (
    <Container type="our-process-step">
      <Container type="our-process-step-number">{number}</Container>
      <Container type="our-process-step-container">
        <Span type="span-our-process-step-container-title">{title}</Span>
        <Span type="span-our-process-step-container-description">
          {children}
        </Span>
      </Container>
    </Container>
  );
}

export default OurProcessStep;
