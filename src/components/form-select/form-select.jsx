import React from "react";
import { Container, Select, Option, Label } from "./form-select.styles.js";

const FormSelect = ({ items, handleChange, label, value, ...otherProps }) => (
  <Container>
    <Select onChange={handleChange} {...otherProps}>
      {items.map((item, index) => (
        <Option key={index} value={item}>
          {item}
        </Option>
      ))}
    </Select>
    {label ? <Label value={value}>{label}</Label> : null}
  </Container>
);

export default FormSelect;
