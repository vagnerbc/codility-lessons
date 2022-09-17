import solution, { solution2 } from "./count-div";

describe("CountDiv tests", () => {
  it("should return de correct value", () => {
    expect(solution(6, 11, 2)).toBe(3);
    expect(solution(10, 10, 5)).toBe(1);

    expect(solution2(6, 11, 2)).toBe(3);
    expect(solution2(10, 10, 5)).toBe(1);
  });
});
