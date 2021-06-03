import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders header", () => {
    const { getByText } = render(<App />);
    const headerElement = getByText(/facewall/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should have a direct header child", () => {
    render(<App />, { container: window.root });
    const headerElement = document.getElementsByTagName("header")[0];

    expect(window.root.children).toContain(headerElement);
  });

  it("should setup scroll listener", () => {
    const eventSpy = jest.spyOn(window, "addEventListener");
    render(<App />);
    expect(eventSpy).toHaveBeenCalledWith("scroll", eventSpy.mock.calls[0][1]);
    eventSpy.mockRestore();
  });

  it("should setup resize listener", () => {
    const eventSpy = jest.spyOn(window, "addEventListener");
    render(<App />);
    expect(eventSpy).toHaveBeenCalledWith("resize", eventSpy.mock.calls[1][1]);
    eventSpy.mockRestore();
  });

  it("reacts to scroll event", () => {
    const { getAllByAltText } = render(<App />);
    let imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(187);

    window.scrollX = 100;
    window.scrollY = 900;
    fireEvent.scroll(window);

    imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(372);

    window.scrollX = 0;
    window.scrollY = 0;
  });

  it("reacts to resize event", () => {
    const { getAllByAltText } = render(<App />);
    let imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(187);

    const innerHeight = window.innerHeight;
    window.innerHeight = 1280;
    fireEvent(window, new Event("resize"));

    imgElements = getAllByAltText(/gravatar/i);
    expect(imgElements.length).toEqual(275);

    window.innerHeight = innerHeight;
  });
});
