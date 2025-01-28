import React from "react";

import Container from "../../ui/Container";

import GetintouchHeader from "./GetintouchHeader";
import GetintouchForm from "./GetintouchForm";

function Getintouch() {
  return (
    <Container type="getintouch" isMaxContainer={true}>
      <GetintouchHeader />
      <GetintouchForm />
    </Container>
  );
}

export default Getintouch;
