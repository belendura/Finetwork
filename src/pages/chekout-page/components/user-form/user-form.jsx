import React from "react";

import FormInput from "../../../../components/form-input";
import FormSelect from "../../../../components/form-select";
import CustomButton from "../../../../components/custom-button";

import { PROVINCES } from "../../../../assets/provinces";

import { Container, Title, Form } from "./user-form.styles";

const UserForm = ({
  userData,
  setUserData,
  setSubmittedUser,
  setEditMode,
  initialValues,
}) => {
  const { name, email, phone, address, addressNumber, province } = userData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUser(userData);
    setEditMode(false);
  };

  const handleReset = () => {
    setUserData(initialValues);
  };

  return (
    <Container>
      <Title>Insert your data</Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="text"
          id="name"
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
          id="email"
          name="email"
          value={email}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="tel"
          id="phone"
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
          id="address"
          name="address"
          value={address}
          label="Address"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="number"
          id="addressNumber"
          name="addressNumber"
          value={addressNumber}
          label="Address Number"
          min="1"
          required
        />
        <FormSelect
          items={PROVINCES}
          handleChange={handleChange}
          id="province"
          name="province"
          value={province}
          label="Province"
          required
        />
        <CustomButton type="submit">Submit</CustomButton>
        <CustomButton type="button" onClick={handleReset}>
          Reset
        </CustomButton>
      </Form>
    </Container>
  );
};

export default UserForm;
