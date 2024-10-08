import Form from "../components/Form";
import { render, screen } from "@testing-library/react";

describe("Form Component", () => {
  it("renders form", () => {
    render(<Form />);

    // const nameBox = screen.getByRole("textbox", { name: "Name" });
    // expect(nameBox).toBeInTheDocument();

    const nameBox = screen.getByPlaceholderText("fullname");
    expect(nameBox).toBeInTheDocument();

    const bioBox = screen.getByRole("textbox", { name: "Bio" });
    expect(bioBox).toBeInTheDocument();

    const closing = screen.getByTitle(/closing/i);
    expect(closing).toBeInTheDocument;

    const TestIdDiv = screen.getByTestId("custHtml");
    expect(TestIdDiv).toBeInTheDocument;

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();

    const checkTick = screen.getByRole("checkbox");
    expect(checkTick).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument;
  });
});
