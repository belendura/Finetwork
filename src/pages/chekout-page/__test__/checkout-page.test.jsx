import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutPage from "../checkout-page";

const USER = {
  name: "Víctor",
  email: "user@gmail.com",
  phone: "666777888",
  address: "gran Vía",
  addressNumber: "1",
  province: "Alicante",
};

const renderComponent = () => render(<CheckoutPage />);

describe("user form in CheckoutPage", () => {
  beforeEach(() => renderComponent());
  it("should display product info", () => {
    expect(screen.getByText(/product/i)).toBeInTheDocument();
  });
  it("should display user form", () => {
    expect(screen.getByTestId("user-form")).toBeInTheDocument();
  });
  it("should submit user form when all required fields are completed", () => {
    const nameInput = screen.getByLabelText("Name (2 to 20 characters)", {
      selector: "input",
    });
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toBeRequired();
    userEvent.type(nameInput, USER.name);
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toBeRequired();
    userEvent.type(emailInput, USER.email);
    const phoneInput = screen.getByLabelText("Phone", {
      selector: "input",
    });
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toBeRequired();
    userEvent.type(phoneInput, USER.phone);
    const addressInput = screen.getByLabelText("Address", {
      selector: "input",
    });
    expect(addressInput).toBeInTheDocument();
    expect(addressInput).toBeRequired();
    userEvent.type(addressInput, USER.address);
    const addressNumberInput = screen.getByLabelText("Address Number", {
      selector: "input",
    });
    expect(addressNumberInput).toBeInTheDocument();
    expect(addressNumberInput).toBeRequired();
    userEvent.type(addressNumberInput, USER.addressNumber);
    const province = screen.getByRole("combobox", { name: /province/i });
    expect(province).toBeInTheDocument();
    expect(province).toBeRequired();
    userEvent.selectOptions(province, USER.province);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    userEvent.click(submitButton);
    const userSummaryTitle = screen.getByText(/user summary/i);
    expect(userSummaryTitle).toBeInTheDocument();
    expect(submitButton).not.toBeInTheDocument();
  });
});

describe("user summary in CheckoutPage", () => {
  beforeEach(() => {
    renderComponent();
    const nameInput = screen.getByLabelText("Name (2 to 20 characters)", {
      selector: "input",
    });
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toBeRequired();
    userEvent.type(nameInput, USER.name);
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });
    userEvent.type(emailInput, USER.email);
    const phoneInput = screen.getByLabelText("Phone", {
      selector: "input",
    });
    userEvent.type(phoneInput, USER.phone);
    const addressInput = screen.getByLabelText("Address", {
      selector: "input",
    });
    userEvent.type(addressInput, USER.address);
    const addressNumberInput = screen.getByLabelText("Address Number", {
      selector: "input",
    });
    userEvent.type(addressNumberInput, USER.addressNumber);
    const province = screen.getByRole("combobox", { name: /province/i });
    userEvent.selectOptions(province, USER.province);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButton);
  });

  it("should display submitted user info", () => {
    expect(screen.getByText(/name:/i)).toHaveTextContent(USER.name);
    expect(screen.getByText(/email:/i)).toHaveTextContent(USER.email);
    expect(screen.getByText(/phone:/i)).toHaveTextContent(USER.phone);
    expect(screen.getByText(/address:/i)).toHaveTextContent(USER.address);
    expect(screen.getByText(/address number:/i)).toHaveTextContent(
      USER.addressNumber
    );
    expect(screen.getByText(/province:/i)).toHaveTextContent(USER.province);
  });

  it("should display user form when edit button is clicked", () => {
    const editButton = screen.getByRole("button", { name: /edit/i });
    userEvent.click(editButton);
    expect(screen.getByTestId("user-form")).toBeInTheDocument();
    expect(editButton).not.toBeInTheDocument();
    const inputName = screen.getByLabelText("Name (2 to 20 characters)", {
      selector: "input",
    });
    expect(inputName).toHaveValue(USER.name);
    const resetButton = screen.getByRole("button", { name: /reset/i });
    userEvent.click(resetButton);
    expect(inputName).toHaveValue("");
  });
});
