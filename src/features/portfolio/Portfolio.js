import React from "react";

import PortfolioHeader from "./PortfolioHeader";
import PortfolioListCategories from "./PortfolioListCategories";
import PortfolioProjects from "./PortfolioProjects";

import Container from "../../ui/Container";

function Portfolio() {
  return (
    <Container type="portfolio" isMaxContainer={true}>
      <PortfolioHeader />
      <PortfolioListCategories />
      <PortfolioProjects />
    </Container>
  );
}

export default Portfolio;
