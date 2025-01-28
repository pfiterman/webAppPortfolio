import React from "react";

import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Span from "../../ui/Span";

function HomeTitle() {
  return (
    <Container type="home-heading-container">
      <Heading type="h1" className="heading-center-bottom Heading1">
        Welcome to my digital studio
      </Heading>
      <Span type="normal-center-black">
        where the possibilities are limitless
      </Span>
    </Container>
  );
}

export default HomeTitle;
