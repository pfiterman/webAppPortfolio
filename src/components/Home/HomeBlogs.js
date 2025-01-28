import React from "react";

import HomeBlogCards from "./HomeBlogCards";

import Container from "../../ui/Container";
import Span from "../../ui/Span";
import Button from "../../ui/Button";
import Header from "../../ui/Header";

function HomeBlogs() {
  return (
    <Container type="home-blog-container" isMaxContainer={true}>
      <Header
        title="Latest articles and resources"
        align="justify"
        withMarginTop={true}
      />
      <Span type="span-center-bottom-black">
        Discover a world of insights and inspiration in our Explore Blog
        section. Dive into curated articles, tips, and stories that spark
        curiosity, expand perspectives, and inspire action.
      </Span>
      <Button className="margin-bottom-3 button-secondary button-lg button">
        Explore the blog
      </Button>
      <HomeBlogCards />
    </Container>
  );
}

export default HomeBlogs;
