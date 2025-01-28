/* eslint-disable react/prop-types */
import React from "react";

import PortfolioCategoryItem from "./PortfolioCategoryItem";

function PortfolioListCategoriesItem({ category, onListCategoryItemClick }) {
  return (
    <PortfolioCategoryItem
      category={category}
      onCategoryItemClick={onListCategoryItemClick}
    />
  );
}

export default PortfolioListCategoriesItem;
