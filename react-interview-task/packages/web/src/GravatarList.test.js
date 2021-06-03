import React from "react";
import { render } from "@testing-library/react";
import GravatarList from "./GravatarList";

describe("GravatarList", () => {
  it("renders given amount of images", () => {
    const { getAllByAltText } = render(<GravatarList state={{ images: 50 }} />);
    const imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(50);
  });
});
