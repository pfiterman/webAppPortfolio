import React from "react";

import HomeLinks from "./HomeLinks";
import Newsletter from "../Newsletter/Newsletter";

import Container from "../../ui/Container";

function HomeContactInfo() {
  return (
    <Container isMaxContainer={true}>
      <Container type="home-top-part">
        <HomeLinks />
        <Newsletter />
      </Container>
    </Container>
  );
}

export default HomeContactInfo;
