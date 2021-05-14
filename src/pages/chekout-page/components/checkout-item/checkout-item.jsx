import React from "react";

import { Container, Title } from "./checkout-item.styles";

const CheckoutItem = ({ id, name, price }) => {
  return (
    <Container>
      <Title>{id}</Title>
      <Title>{name}</Title>
      <Title>{price}</Title>
    </Container>
  );
};

export default CheckoutItem;
