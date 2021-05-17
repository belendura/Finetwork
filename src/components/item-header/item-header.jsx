import React from "react";

import { Container, Title } from "./item-header.styles";

const ItemHeader = ({ items }) => {
  return items ? (
    <Container>
      {items.map((item, index) => (
        <Title key={index}>{item}</Title>
      ))}
    </Container>
  ) : null;
};

export default ItemHeader;
