/* eslint-disable react/prop-types */
import React from "react";

import Container from "../../ui/Container";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import Span from "../../ui/Span";

function HomeBlogCard({
  imageAlt,
  imageSrc,
  button,
  date,
  description,
  textLink,
  withRootClassName,
}) {
  return (
    <Container type="blog-card-container" withRootClassName={withRootClassName}>
      <Image alt={imageAlt} src={imageSrc} className="blog-card-image" />
      <Container type="blog-card-container-info">
        <Button className="button-blog-card button-secondary button">
          {button}
        </Button>
        <Span type="span-card-text">{date}</Span>
      </Container>
      <Span type="span-card-description">{description}</Span>
      <Span type="span-underline">{textLink}</Span>
    </Container>
  );
}

export default HomeBlogCard;
