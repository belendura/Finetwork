import React from "react";
import { Container, Input, Label } from "./form-input.styles.js";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <Container>
    <Input onChange={handleChange} {...otherProps} />
    {label ? <Label value={value}>{label}</Label> : null}
  </Container>
);

export default FormInput;
