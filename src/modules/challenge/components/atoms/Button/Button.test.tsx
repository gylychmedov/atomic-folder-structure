import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  const mockOnClick = jest.fn();

  it("renders button with correct label", () => {
    const { getByText } = render(
      <Button label="Test Button" onClick={mockOnClick} />
    );
    expect(getByText("Test Button")).toBeInTheDocument();
  });
});

it("has correct base styling classes", () => {
  const { container } = render(
    <Button label="Style Test" onClick={mockOnClick} />
  );
  const buttonElement = container.firstChild as HTMLElement;
  expect(buttonElement).toHaveClass("order-4", "fixed", "lg:static");
});

function mockOnClick(): void {
  throw new Error("Function not implemented.");
}
