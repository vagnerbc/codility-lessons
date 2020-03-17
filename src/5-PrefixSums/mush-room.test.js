import solution from "./mush-room";

describe("MushRoom tests", () => {
  it("should return the correct value", () => {
    expect(solution([2, 3, 7, 5, 1, 3, 9], 4, 6)).toBe(25);
  });
});
