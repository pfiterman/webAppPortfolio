import React from "react";

import Container from "../../ui/Container";
import Image from "../../ui/Image";

function HomeGallery() {
  return (
    <Container type="home-gallery">
      <Container type="home-gallery-container-left">
        <Image
          alt="image"
          src="/homegallery-banner-left.png"
          className="home-image"
        />
      </Container>
      <Container type="home-gallery-container-middle">
        <Image
          alt="image"
          src="/homegallery-middle-top.png"
          className="home-image-top-middle"
        />
        <Image
          alt="image"
          src="/homegallery-middle-bottom.png"
          className="home-image"
        />
      </Container>
      <Container type="home-gallery-container-right">
        <Image
          alt="image"
          src="/homegallery-right-top.png"
          className="home-image"
        />
        <Container type="home-gallery-container-bottom-right">
          <Image
            alt="image"
            src="/homegallery-right-bottom-left.png"
            className="home-image-bottom-right-left"
          />
          <Image
            alt="image"
            src="/homegallery-right-bottom-right.png"
            className="home-image-bottom-right-right"
          />
        </Container>
      </Container>
    </Container>
  );
}

export default HomeGallery;
