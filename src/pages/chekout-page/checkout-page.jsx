import React from "react";

import UserForm from "./components/user-form";
import CheckoutItem from "./components/checkout-item";
import ItemHeader from "../../components/item-header";

import {
  Container,
  ItemContainer,
  FormContainer,
  Title,
} from "./checkout-page.styles";

const CheckoutPage = () => {
  return (
    <Container>
      <ItemContainer>
        <Title>Product</Title>
        <ItemHeader items={["Id", "Name", "Price"]} />
        <CheckoutItem />
      </ItemContainer>
      <FormContainer>
        <UserForm />
      </FormContainer>
    </Container>
  );
};

export default CheckoutPage;
