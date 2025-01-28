import React from "react";

import { useSearchParams } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

import PortfolioListCategoriesItem from "./PortfolioListCategoriesItem";

import Container from "../../ui/Container";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";

function PortfolioListCategories() {
  const { isLoading, error, categories } = useCategories();
  const [searchParams, setSearchParams] = useSearchParams();

  function onListCategoryItemClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  if (error) return toast.error(error.message);

  if (isLoading) return <Spinner />;

  return (
    <Container type="portfolio-tab-selector">
      {categories.map((category) => (
        <PortfolioListCategoriesItem
          key={category.id}
          category={category}
          onListCategoryItemClick={onListCategoryItemClick}
        />
      ))}
    </Container>
  );
}

export default PortfolioListCategories;
