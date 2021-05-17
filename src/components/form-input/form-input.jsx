import React from "react";
import { Container, Input, Label } from "./form-input.styles.js";

const FormInput = ({ handleChange, label, value, id, ...otherProps }) => (
  <Container>
    <Input onChange={handleChange} id={id} value={value} {...otherProps} />
    {label ? (
      <Label htmlFor={id} value={value}>
        {label}
      </Label>
    ) : null}
  </Container>
);

export default FormInput;
