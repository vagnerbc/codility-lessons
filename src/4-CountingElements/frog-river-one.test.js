import solution from "./frog-river-one";

describe("FrogRiverOne tests", () => {
  it("should return the correct value", () => {
    expect(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6);
    expect(solution(5, [1, 3, 1, 4, 2, 3, 4, 5])).toBe(7);
    expect(solution(5, [1, 1, 1, 5, 1, 3, 4, 55, 4, 5, 6, 7, 0, 88, 2])).toBe(
      14
    );
  });
});
