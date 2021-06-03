import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should be a header", () => {
    render(<Header />);
    const headerElement = document.getElementsByTagName("header")[0];
    expect(headerElement).toBeInTheDocument();
  });

  it("should have a text", () => {
    const { getByText } = render(<Header>Foo</Header>);
    const headerElement = getByText(/foo/i);
    expect(headerElement).toBeInTheDocument();
  });
});
