/* eslint-disable react/prop-types */
import React from "react";

import Span from "../../ui/Span";

function PortfolioCategoryItem({ category, onCategoryItemClick }) {
  const { id, name } = category;
  return (
    <Span type="span-selector" onClick={() => onCategoryItemClick(id)}>
      {name}
    </Span>
  );
}

export default PortfolioCategoryItem;
