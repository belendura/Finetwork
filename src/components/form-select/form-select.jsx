import React from "react";
import { Container, Select, Option, Label } from "./form-select.styles.js";

const FormSelect = ({ items, handleChange, id, label, ...otherProps }) => (
  <Container>
    <Select onChange={handleChange} id={id} {...otherProps}>
      {items.map((item, index) => (
        <Option key={index} value={item}>
          {item}
        </Option>
      ))}
    </Select>
    {label ? <Label htmlFor={id}>{label}</Label> : null}
  </Container>
);

export default FormSelect;
