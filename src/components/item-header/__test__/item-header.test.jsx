import React from "react";
import { render, screen } from "@testing-library/react";

import ItemHeader from "../item-header";

const renderComponent = (props) => render(<ItemHeader {...props} />);

describe("ItemHeader", () => {
  it("should not render if items are not supplied", () => {
    const { container } = renderComponent();

    expect(container).toBeEmptyDOMElement();
  });

  it("should render the items that are supplied", () => {
    const items = ["Id", "Name"];
    const { container } = renderComponent({ items });

    expect(container).not.toBeEmptyDOMElement();
    expect(screen.getByText(/id/i)).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });
});
