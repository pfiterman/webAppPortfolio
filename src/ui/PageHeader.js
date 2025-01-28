import React from "react";
import { Helmet } from "react-helmet";

function PageHeader() {
  return (
    <Helmet>
      <title>Pablo Fiterman - Portfolio Page</title>
      <meta property="og:title" content="Pablo Fiterman - Portfolio Page" />
    </Helmet>
  );
}

export default PageHeader;
