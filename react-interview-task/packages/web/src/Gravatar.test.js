import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Gravatar from "./Gravatar";

describe("Gravatar", () => {
  it("should create an image with a random gravatar src", () => {
    const { getByAltText } = render(<Gravatar />);
    const imgElement = getByAltText(/gravatar/i);
    expect(imgElement.src).toMatch(
      /^http:\/\/www\.gravatar\.com\/avatar\/[a-z0-9]{32}\?d=identicon&s=64$/
    );
  });

  it("should toggle its highlight when clicked", () => {
    const highlightClass = "is-highlighted";
    const { getByAltText } = render(<Gravatar />);
    const imgElement = getByAltText(/gravatar/i);

    fireEvent.click(imgElement);
    expect(imgElement).toHaveClass(highlightClass);

    fireEvent.click(imgElement);
    expect(imgElement).not.toHaveClass(highlightClass);
  });
});
