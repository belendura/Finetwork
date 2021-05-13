import React from "react";

import { Button } from "./custom-button.styles.js";

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default CustomButton;
