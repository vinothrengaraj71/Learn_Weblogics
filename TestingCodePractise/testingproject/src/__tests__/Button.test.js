import Button from "../components/Button";
import { render, screen, logRoles } from "@testing-library/react";

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

  it("rendering StartLearning button eventually using a useEffect including debugging", async () => {
    render(<Button />);
    // screen.debug();
    expect(
      await screen.findByRole("button", { name: /Start Learning/i })
    ).toBeInTheDocument();
    // screen.debug();
  });

  it("rendering StartLearning button to Login eventually using useEffect by setting timeout and includes logRoles ", async () => {
    const view = render(<Button label={label} />);
    logRoles(view.container);
    expect(
      await screen.findByRole("button", { name: /Start Learning/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /login/i }, { timeout: 3000 })
    ).toBeInTheDocument();
  });
});
