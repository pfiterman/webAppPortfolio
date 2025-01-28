import React from "react";
import { useProjects } from "../../hooks/useProjects";
import { useSearchParams } from "react-router-dom";

import PortfolioCard from "./PortfolioCard";
import Spinner from "../../ui/Spinner";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

import { isNumber } from "../../utils/helpers";

function PortfolioProjects() {
  const { isLoading, projects } = useProjects();
  const [searchParams, setSearchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("category") || "all";

  let filteredProjects;
  if (filterValue === "all" || !isNumber(filterValue))
    filteredProjects = projects;
  if (filterValue !== "all" && isNumber(filterValue))
    filteredProjects = projects.filter(
      (project) => project.categoryId === Number(filterValue)
    );

  function onClickHandle(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  return (
    <>
      <Container type="portfolio-tab-selector-cards-container">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </Container>
      <Container type="portfolio">
        <Button
          className="button-secondary button-lg button"
          onclickButton={() => onClickHandle("all")}
        >
          See all projects
        </Button>
      </Container>
    </>
  );
}

export default PortfolioProjects;
