/* eslint-disable react/prop-types */
import React from "react";

import Container from "../../ui/Container";
import Image from "../../ui/Image";
import Span from "../../ui/Span";

import "./HomeEventCard.css";

function HomeEventCard({ imageAlt, imageSrc, cardTitle, cardText }) {
  return (
    <Container type="event-card-container">
      <Image alt={imageAlt} src={imageSrc} className="event-card-image" />
      <Container type="event-card-vertical-line" />
      <Container type="event-card-information">
        <Span type="span-card-title">{cardTitle}</Span>
        <Span type="span-card-text">{cardText}</Span>
      </Container>
    </Container>
  );
}

export default HomeEventCard;
