import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CustomButton from "../custom-button";

const renderComponent = ({ children, ...props }) =>
  render(<CustomButton {...props}>{children}</CustomButton>);

describe("CustomButton", () => {
  it("should display supplied children", () => {
    const children = <p>Testing Button</p>;
    renderComponent({ children });
    expect(screen.getByText(/testing button/i)).toBeInTheDocument();
  });

  it("should call the supplied function when the user clicks on it", () => {
    const onClick = jest.fn();
    renderComponent({ onClick });
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
