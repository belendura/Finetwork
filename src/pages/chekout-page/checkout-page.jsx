import React, { useState } from "react";

import UserForm from "./components/user-form";
import CheckoutItem from "./components/checkout-item";
import ItemHeader from "../../components/item-header";
import UserSummary from "./components/user-summary/user-summary";

import { PRODUCT } from "../../assets/product";

import {
  Container,
  ProductContainer,
  FormContainer,
  Title,
} from "./checkout-page.styles";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  addressNumber: "",
  province: "A Coruña",
};

const CheckoutPage = () => {
  const [userData, setUserData] = useState(initialValues);
  const [submittedUser, setSubmittedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const { id, name, price } = PRODUCT;
  return (
    <Container>
      <ProductContainer>
        <Title>Product</Title>
        <ItemHeader items={["Id", "Name", "Price"]} />
        <CheckoutItem id={id} name={name} price={price} />
      </ProductContainer>
      <FormContainer>
        {submittedUser && !editMode ? (
          <UserSummary
            submittedUser={submittedUser}
            setEditMode={setEditMode}
          />
        ) : (
          <UserForm
            userData={userData}
            setUserData={setUserData}
            setSubmittedUser={setSubmittedUser}
            setEditMode={setEditMode}
            initialValues={initialValues}
          />
        )}
      </FormContainer>
    </Container>
  );
};

export default CheckoutPage;
