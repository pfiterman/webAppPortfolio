import React from "react";

import ServicesCard from "./ServicesCard";
import Container from "../../ui/Container";

function OurServicesCards() {
  return (
    <Container type="our-services-cards-container">
      <ServicesCard></ServicesCard>
      <ServicesCard
        text="Copy-writting"
        imageSrc="/file-document-200w.png"
      ></ServicesCard>
      <ServicesCard
        text="Product Design"
        imageSrc="/dice-5-200h.png"
      ></ServicesCard>
    </Container>
  );
}

export default OurServicesCards;
