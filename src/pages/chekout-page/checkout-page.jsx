import React from "react";

import UserForm from "./components/user-form";
import CheckoutItem from "./components/checkout-item";
import ItemHeader from "../../components/item-header";

import { PRODUCT } from "../../assets/product";

import {
  Container,
  ItemContainer,
  FormContainer,
  Title,
} from "./checkout-page.styles";

const CheckoutPage = () => {
  const { id, name, price } = PRODUCT;
  return (
    <Container>
      <ItemContainer>
        <Title>Product</Title>
        <ItemHeader items={["Id", "Name", "Price"]} />
        <CheckoutItem id={id} name={name} price={price} />
      </ItemContainer>
      <FormContainer>
        <UserForm />
      </FormContainer>
    </Container>
  );
};

export default CheckoutPage;
