import React from "react";

import HomeTitle from "./HomeTitle";
import HomeGallery from "./HomeGallery";

import Container from "../../ui/Container";

function HomeTop() {
  return (
    <Container type="home-top" isSectionContainer={true}>
      <Container type="home-top-container" isMaxContainer={true}>
        <HomeTitle />
        <HomeGallery />
      </Container>
    </Container>
  );
}

export default HomeTop;
