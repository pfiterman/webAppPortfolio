import React from "react";
import { Helmet } from "react-helmet";

import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

function NotFound() {
  return (
    <Container type="not-found">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <Heading type="h3">Oops! Page not Found</Heading>
      <Container type="not-found-error-container">
        <Heading type="h1" className="heading-not-found">
          404
        </Heading>
      </Container>
      <Container type="not-found-error-container-message">
        <Heading type="h2" className="heading-not-found-message">
          We are Sorry, but the page you requested was not found
        </Heading>
      </Container>
    </Container>
  );
}

export default NotFound;
