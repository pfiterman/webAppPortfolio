import React from "react";

import Container from "../../ui/Container";
import Header from "../../ui/Header";

function PortfolioHeader() {
  return (
    <Container type="portfolio">
      <Header title="Explore my portfolio" align="justify" withMarginTop={true}>
        I believe that technology is not just a career - It&apos;s a powerful
        tool for creating meaningful connections and solve real-world problems.
        Click on the categories bellow to filter the projects and learn more
        about each of them.
      </Header>
    </Container>
  );
}

export default PortfolioHeader;
