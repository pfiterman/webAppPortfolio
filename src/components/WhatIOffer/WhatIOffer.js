import React from "react";

import Container from "../../ui/Container";
import Image from "../../ui/Image";
import Header from "../../ui/Header";
import CheckList from "../../ui/CheckList";

function WhhatIOffer() {
  return (
    <Container type="home" isMaxContainer={true}>
      <Container type="home-content">
        <Header title="What I offer" align="center" withMarginTop={true} />
        <CheckList />
        <Image src="/project-commitment.jpg" />
      </Container>
    </Container>
  );
}

export default WhhatIOffer;
