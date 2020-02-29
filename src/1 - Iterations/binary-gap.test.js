import solution from "./binary-gap";

describe("BinaryGap tests", () => {
  it("should return the correct value", () => {
    expect(solution(1041)).toBe(5);
    expect(solution(529)).toBe(4);
    expect(solution(20)).toBe(1);
    expect(solution(32)).toBe(0);
  });
});
