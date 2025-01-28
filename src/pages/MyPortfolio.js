import React from "react";
import Portfolio from "../features/portfolio/Portfolio";

import Container from "../ui/Container";

function MyPortfolio() {
  return (
    <Container type="main">
      <Container type="section">
        <Portfolio />
      </Container>
    </Container>
  );
}

export default MyPortfolio;
