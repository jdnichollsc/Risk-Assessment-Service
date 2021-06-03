import { gravatarUrl, calculateNumberOfImages } from "./utils";

describe("gravatarUrl", () => {
  it("should generate a random gravatar URL", () => {
    jest.spyOn(Math, "random").mockImplementationOnce(() => 0.6);
    const size = 50;

    expect(gravatarUrl(size)).toEqual(
      "http://www.gravatar.com/avatar/45f3bb02369192b682c05839f1191d02?d=identicon&s=50"
    );
  });
});

describe("calculateNumberOfImages", () => {
  it("should return the number of images required to fill its container", () => {
    expect(calculateNumberOfImages()).toEqual(187);
  });

  it("should create images ahead of the scroll", () => {
    window.scrollX = 100;
    window.scrollY = 900;

    expect(calculateNumberOfImages()).toEqual(372);

    window.scrollX = 0;
    window.scrollY = 0;
  });
});
