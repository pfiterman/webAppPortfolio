import React from "react";
import { NavLink } from "react-router-dom";

import { useProjectTechnologies } from "../../hooks/useProjectTechnologies";

import Spinner from "../../ui/Spinner";
import Details from "../../ui/Details";
import Image from "../../ui/Image";
import Span from "../../ui/Span";

function PortfolioProjectTechStack() {
  const { isLoading, projectTechnologies } = useProjectTechnologies();

  if (isLoading) <Spinner />;
  if (!projectTechnologies || projectTechnologies.length === 0) return null;

  return (
    <Details description="TechStack: ">
      {projectTechnologies.map((techtack) => {
        const { technologies } = techtack;
        return (
          <p key={technologies.id} className="details-text">
            <Image src={technologies.imgURL} className="tech-stack-icon" />
            <Span>
              <NavLink to={technologies.officialURL} target="_blank">
                {technologies.name}
              </NavLink>
            </Span>
            -<Span>{technologies.description}</Span>
          </p>
        );
      })}
    </Details>
  );
}

export default PortfolioProjectTechStack;
