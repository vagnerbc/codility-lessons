import solution from "./distinct";

describe("Distinct tests", () => {
  it("should return the correct value", () => {
    expect(solution([])).toBe(0);
    expect(solution([4, 2, 2, 1, 3, 4])).toBe(4);
    expect(solution([2, 2, 2, 4, 2, 2])).toBe(2);
  });
});
