import React from "react";

import CheckListItem from "./CheckListItem";
import Container from "./Container";

function CheckList() {
  return (
    <Container type="home-container-checklist">
      <CheckListItem item="Commitment in your project deadline" />
      <CheckListItem item="Support in any implementation" />
      <CheckListItem item="Quality services and support all time" />
    </Container>
  );
}

export default CheckList;
