import React from "react";

import Container from "../ui/Container";
import Getintouch from "../features/getintouch/Getintouch";

function ContactMe() {
  return (
    <Container type="main">
      <Container type="section">
        <Getintouch />
      </Container>
    </Container>
  );
}

export default ContactMe;
