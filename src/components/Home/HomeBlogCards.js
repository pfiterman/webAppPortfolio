import React from "react";

import HomeBlogCard from "./HomeBlogCard";

import Container from "../../ui/Container";

function HomeBlogCards() {
  return (
    <Container type="home-blog-cards-container">
      <HomeBlogCard
        date="Aug 14, 2022"
        button="advertising"
        imageSrc="/rectangle2-95-4-1000w.png"
        withRootClassName="blog-card-root-class"
        textLink="Read more"
      />
      <HomeBlogCard
        date="Jul 12, 2022"
        button="Branding"
        imageSrc="/unsplash_h7qmwoxf6z8-1500w.png"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui and."
        textLink="Read more"
      />
    </Container>
  );
}

export default HomeBlogCards;
