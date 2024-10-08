import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
});

it("user interaction", async () => {
  userEvent.setup();
  render(<App />);
  const beforeIncrement = screen.getByTestId("val");
  expect(beforeIncrement).toHaveTextContent(0);

  const submitButton = screen.getByRole("button");

  await userEvent.click(submitButton);

  const afterIncrement = screen.getByTestId("val");
  expect(afterIncrement).toHaveTextContent(1);
});
