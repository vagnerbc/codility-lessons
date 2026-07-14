import { solution, solution2 } from "./binary-gap";
import { solution3, solution4 } from "./binary-gap-may2026";

describe("BinaryGap tests", () => {
  it("should return the correct value", () => {
    expect(solution(1041)).toBe(5); // 10000010001
    expect(solution(529)).toBe(4);
    expect(solution(20)).toBe(1);
    expect(solution(32)).toBe(0);

    expect(solution2(1041)).toBe(5);
    expect(solution2(529)).toBe(4);
    expect(solution2(20)).toBe(1);
    expect(solution2(32)).toBe(0);

    expect(solution3(1041)).toBe(5);
    expect(solution3(529)).toBe(4);
    expect(solution3(20)).toBe(1);
    expect(solution3(32)).toBe(0);

    expect(solution4(1041)).toBe(5);
    expect(solution4(529)).toBe(4);
    expect(solution4(20)).toBe(1);
    expect(solution4(32)).toBe(0);
  });
});
