import Button from "../components/Button";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
  const label = ["html", "css"];
  it("button rendering properly", () => {
    render(<Button />);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });

  it("rendering prop array called 'label' and displays list", () => {
    render(<Button label={label} />);
    const propList = screen.getAllByRole("listitem");
    propList.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    expect(screen.getAllByRole("listitem")).toHaveLength(label.length);
  });
  it("rendering Login Buttton", () => {
    render(<Button label={label} />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("rendering StartLearning Buttton", () => {
    render(<Button label={label} />);
    expect(
      screen.queryByRole("button", { name: "Start Learning" })
    ).not.toBeInTheDocument();
  });
});
