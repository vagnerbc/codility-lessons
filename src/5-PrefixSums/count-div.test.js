import solution from "./count-div";

describe("CountDiv tests", () => {
  it("should return de correct value", () => {
    expect(solution(6, 11, 2)).toBe(3);
    expect(solution(10, 10, 5)).toBe(1);
  });
});
