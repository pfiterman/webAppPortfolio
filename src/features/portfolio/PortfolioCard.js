/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router";

import Container from "../../ui/Container";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import Span from "../../ui/Span";

function PortfolioCard({ project }) {
  const { id, image, name, title } = project;
  const navigate = useNavigate();

  return (
    <Container type="portfolio-card">
      <Container type="portfolio-card-image-container">
        <Image alt={name} src={image} className="portfolio-card-image" />
        <Container type="portfolio-card-project-container">
          <Button
            className="button-secondary-white button button-md"
            onclickButton={() => navigate(`/project/${id}`)}
          >
            See project
          </Button>
        </Container>
      </Container>
      <Span type="normal-700">{title}</Span>
    </Container>
  );
}

export default PortfolioCard;
