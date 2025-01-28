/* eslint-disable react/prop-types */
import React from "react";

import Container from "../../ui/Container";
import Span from "../../ui/Span";

function HomeLinksItemsContainer({ items }) {
  const { itemTitle, itemText, itemOthers } = items;
  return (
    <Container type="home-links-items-container">
      <Span type="span-normal-brown">{itemTitle}</Span>
      {itemText &&
        itemText.map((item, key) => (
          <Span key={key} type="margin-bottom">
            {item}
          </Span>
        ))}
      {itemOthers &&
        itemOthers.map((other, key) => <Span key={key}>{other}</Span>)}
    </Container>
  );
}

export default HomeLinksItemsContainer;
