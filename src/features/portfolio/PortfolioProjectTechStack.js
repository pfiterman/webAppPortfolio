import React from "react";
import { Link } from "react-router-dom";

import { useProjectTechnologies } from "../../hooks/useProjectTechnologies";

import Spinner from "../../ui/Spinner";
import Details from "../../ui/Details";
import Image from "../../ui/Image";

function PortfolioProjectTechStack() {
  const { isLoading, projectTechnologies } = useProjectTechnologies();

  if (isLoading) <Spinner />;
  if (!projectTechnologies || projectTechnologies.length === 0) return null;

  return (
    <Details description="Tech Stack: ">
      {projectTechnologies.map((techtack) => {
        const { technologies } = techtack;
        return (
          <p key={technologies.id} className="details-text">
            <Image src={technologies.imgURL} className="tech-stack-icon" />
            <Link to={technologies.officialURL} target="_blank">
              {technologies.name}
            </Link>
          </p>
        );
      })}
    </Details>
  );
}

export default PortfolioProjectTechStack;
