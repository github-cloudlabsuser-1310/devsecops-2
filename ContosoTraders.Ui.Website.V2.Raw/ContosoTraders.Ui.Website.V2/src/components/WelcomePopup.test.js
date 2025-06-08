import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "./WelcomePopup";

// WelcomePopup.test.js

describe("WelcomePopup", () => {
  test("renders the welcome modal with expected text", () => {
    render(<WelcomePopup />);
    expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
    expect(screen.getByText(/TO/i)).toBeInTheDocument();
    expect(screen.getByText(/The DevSecOps Day 2 Hackathon!/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  test("closes the modal when 'Get Started' button is clicked", () => {
    render(<WelcomePopup />);
    const button = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(button);
    // Modal should be removed from the DOM
    expect(screen.queryByText(/WELCOME/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Get Started/i })).not.toBeInTheDocument();
  });
});