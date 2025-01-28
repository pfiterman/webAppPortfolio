import React from "react";
import { Outlet } from "react-router";

import PageHeader from "./PageHeader";
import Navigation from "./Navigation";

import Container from "./Container";

function AppLayout() {
  return (
    <Container type="home">
      <PageHeader />
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default AppLayout;
