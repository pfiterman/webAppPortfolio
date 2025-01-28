import React from "react";

import Container from "../../ui/Container";

import HomeLinksItemsContainer from "./HomeLinksItemsContainer";

function HomeLinks() {
  return (
    <Container type="home-links-container">
      <HomeLinksItemsContainer
        items={{
          itemTitle: "Product",
          itemText: ["About", "Portfolio"],
          itemSimple: "Blog",
        }}
      />
      <HomeLinksItemsContainer
        items={{
          itemTitle: "Navigate",
          itemText: ["Copyrights", "Sitemap"],
          itemSimple: "Privacy Policy",
        }}
      />
      <HomeLinksItemsContainer
        items={{
          itemTitle: "Address",
          itemText: [
            "2157 Village View",
            "Drive, Old Fort.",
            "Myers Florida",
            "33901",
          ],
        }}
      />
    </Container>
  );
}

export default HomeLinks;
