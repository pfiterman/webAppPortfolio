import React from "react";

import HomeTop from "./HomeTop";
import Portfolio from "../../features/portfolio/Portfolio";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

import Container from "../../ui/Container";

function Home() {
  return (
    <Container type="main">
      <Container type="section">
        <HomeTop />
        <Portfolio />
      </Container>
      <Container type="section">
        <Container type="banner" isSectionContainer={true}>
          <ContactMe />
        </Container>
      </Container>
      <Container type="section">
        <Footer />
      </Container>
    </Container>
  );
}

export default Home;
