import React from "react";

import Container from "../ui/Container";
import Header from "../ui/Header";
import Image from "../ui/Image";

function AboutMe() {
  return (
    <Container type="main">
      <Container type="section">
        <Container type="aboutme" isMaxContainer={true}>
          <Header title="Hi there 👋" align="justify" withMarginTop={true}>
            I&apos;m Pablo Fiterman, a passionate tech enthusiast and software
            developer with a knack for turning ideas into reality through code.
            With a solid foundation in IT and a fresh perspective from my recent
            journey into Canada, I&apos;m on a mission to craft innovative
            solutions and bring creative projects to life.
            <br />
          </Header>
          <Image src="/bringprojectslife.jpg" />
        </Container>
      </Container>
    </Container>
  );
}

export default AboutMe;
