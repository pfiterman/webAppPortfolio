import React from "react";

import OurProcessStep from "./OurProcessStep";

import Container from "../../ui/Container";
import Span from "../../ui/Span";
import Heading from "../../ui/Heading";

function OurProcess() {
  return (
    <Container type="our-process-container" isMaxContainer={true}>
      <Span type="normal-center-700 color-white">what are you waiting?</Span>
      <Heading type="h2" className="heading-our-process-description Heading2">
        We use a simple three step process.<br></br>Take a look.
      </Heading>
      <OurProcessStep number="01" title="Finding the best idea">
        There are countless businesses already in existence, so it’s very likely
        that you won’t be the first person to think of an idea or product. There
        are countless businesses already in existence, so it’s very likely that
        you won’t be the first person to think of an idea or product.
      </OurProcessStep>
      <OurProcessStep number="02" title="Intense Brain storming">
        Brainstorming is a process of toiling and generating new ideas alone or
        by holding intensive group discussions between team members in a team.
      </OurProcessStep>
      <OurProcessStep number="03" title="Strong design execution">
        As a creative, using your professional judgement, you should begin
        filtering your various ideas and designs, retaining the strongest
        relevant material.
      </OurProcessStep>
    </Container>
  );
}

export default OurProcess;
