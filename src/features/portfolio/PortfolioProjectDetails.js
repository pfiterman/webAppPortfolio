import React from "react";
import { useProject } from "../../hooks/useProject";
import { NavLink, useNavigate } from "react-router-dom";

import Container from "../../ui/Container";
import Header from "../../ui/Header";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Image from "../../ui/Image";
import Details from "../../ui/Details";
import Button from "../../ui/Button";

function PortfolioProjectDetails() {
  const { isLoading, project } = useProject();
  const navigate = useNavigate();

  if (isLoading) <Spinner />;
  if (!project) return <Empty resourceName="project" />;

  const {
    name,
    title,
    image,
    description,
    pageURL,
    githubURL,
    startDate,
    endDate,
    isResponsive,
  } = project;

  const showImage = pageURL ? (
    <NavLink to={pageURL} target="_blank">
      <Image src={image} className="image" />
    </NavLink>
  ) : (
    <Image src={image} className="image" />
  );

  return (
    <Container type="main">
      <Container type="section">
        <Container type="portfolio" isMaxContainer={true}>
          <Header title={name} withMarginTop={true}>
            {title}
          </Header>
          <Container type="image-container">{showImage}</Container>
          <Details
            description={description}
            gitHubURL={githubURL}
            dateStart={startDate}
            dateEnd={endDate}
            isResponsive={isResponsive}
          />
          <Button
            onclickButton={() => navigate(-1)}
            className="button-secondary button button-md"
          >
            Return
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

export default PortfolioProjectDetails;
