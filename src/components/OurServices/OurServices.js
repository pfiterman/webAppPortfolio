import React from "react";

import OurServicesHeader from "./OurServicesHeader";
import OurServicesControls from "./OurServicesControls";
import OurServicesCards from "./OurServicesCards";

import Container from "../../ui/Container";

function OurServices() {
  return (
    <Container type="our-services-container" isMaxContainer={true}>
      <Container type="our-services-container">
        <OurServicesHeader />
        <OurServicesControls />
      </Container>
      <OurServicesCards />
    </Container>
  );
}

export default OurServices;
