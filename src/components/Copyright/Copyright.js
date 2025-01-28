import React from "react";

import Container from "../../ui/Container";
import Span from "../../ui/Span";

import { TbNoCopyright } from "react-icons/tb";

function Copyright() {
  return (
    <Container type="copyright">
      <Container type="copyright" isMaxWidth={true}>
        <Span>
          <TbNoCopyright /> All rights reserved
        </Span>
      </Container>
    </Container>
  );
}

export default Copyright;
