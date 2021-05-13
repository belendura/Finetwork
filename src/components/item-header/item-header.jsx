import React from "react";

import { Container, Title } from "./item-header.styles";

const ItemHeader = ({ items }) => {
  return (
    <Container>
      {items
        ? items.map((item, index) => <Title key={index}>{item}</Title>)
        : null}
    </Container>
  );
};

export default ItemHeader;
