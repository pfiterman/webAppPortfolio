import React from "react";
import { useNavigate } from "react-router";

import Container from "../../ui/Container";
import Span from "../../ui/Span";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

function ContactMe() {
  const navigate = useNavigate();

  function onClickButtonHandle() {
    navigate("/contactme");
  }

  return (
    <Container type="contactme" isMaxContainer={true}>
      <Container isMaxContainer={true}>
        <Span type="normal-center-700 color-white">what are you waiting?</Span>
        <Heading type="h2" className="heading-center-bottom-white Heading2">
          Let’s collaborate!
        </Heading>
        <Span type="center-lineheight-26 color-white">
          Whether you have questions, collaboration ideas, or just want to say
          hi, feel free to reach out. Hit the buttom below or connect with me
          through my social media channels.
        </Span>
        <Button
          onclickButton={onClickButtonHandle}
          className="margin-bottom-3 button-lg button-secondary-white button"
        >
          Contact me
        </Button>
      </Container>
    </Container>
  );
}

export default ContactMe;
