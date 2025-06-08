import { render, screen, fireEvent } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

test('renders WelcomePopup component', () => {
  render(<WelcomePopup />);

  // Assert that the heading "WELCOME" is rendered
  const headingElement = screen.getByText(/WELCOME/i);
  expect(headingElement).toBeInTheDocument();

  // Assert that the subheading "TO" is rendered
  const subheadingElement = screen.getByText(/TO/i);
  expect(subheadingElement).toBeInTheDocument();

  // Assert that the main heading "The DevSecOps Day 2 Hackathon!" is rendered
  const mainHeadingElement = screen.getByText(/The DevSecOps Day 2 Hackathon!/i);
  expect(mainHeadingElement).toBeInTheDocument();

  // Assert that the "Get Started" button is rendered
  const buttonElement = screen.getByRole('button', { name: /Get Started/i });
  expect(buttonElement).toBeInTheDocument();

  // Simulate clicking the "Get Started" button
  fireEvent.click(buttonElement);

  // Assert that the modal is closed
  const modalElement = screen.queryByRole('dialog');
  expect(modalElement).not.toBeInTheDocument();
});