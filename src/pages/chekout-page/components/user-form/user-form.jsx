import React, { useState } from "react";

import FormInput from "../../../../components/form-input";
import FormSelect from "../../../../components/form-select";
import CustomButton from "../../../../components/custom-button";

import { PROVINCES } from "../../../../assets/provinces";

import { Container, Title, Form } from "./user-form.styles";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    addressNumber: "",
    province: "",
  });

  const { name, email, phone, address, addressNumber } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      {console.log("userData", userData)}
      <Title>Insert your data</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="text"
          name="name"
          value={name}
          label="Name (2 to 20 characters)"
          minLength="2"
          maxLength="20"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="tel"
          name="phone"
          value={phone}
          pattern="[0-9]{9}"
          minLength="9"
          maxLength="9"
          label="Phone"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="text"
          name="address"
          value={address}
          label="Address"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="number"
          name="addressNumber"
          value={addressNumber}
          label="Address Number"
          min="1"
          required
        />
        <FormSelect
          items={PROVINCES}
          handleChange={handleChange}
          name="province"
          label="Province"
          required
        />
        <CustomButton type="submit">Submit</CustomButton>
      </Form>
    </Container>
  );
};

export default UserForm;
