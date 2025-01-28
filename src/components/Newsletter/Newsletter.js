import React from "react";

import Container from "../../ui/Container";
import Span from "../../ui/Span";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function Newsletter() {
  return (
    <Container type="home-subscribe-container">
      <Span type="span-normal-brown">Subscribe to our newsletter</Span>
      <Input
        type="text"
        placeholder="Enter your e-mail address"
        className="input-text-newsletter input"
      />
      <Button className="button-primary button">Subscribe</Button>
    </Container>
  );
}

export default Newsletter;
