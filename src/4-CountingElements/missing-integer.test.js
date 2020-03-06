import { solution, solution2 } from "./missing-integer";

describe("MissingInteger tests", () => {
  it("should return de correct value", () => {
    expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
    expect(solution([1, 2, 3])).toBe(4);
    expect(solution([-1, -3])).toBe(1);

    expect(solution2([1, 3, 6, 4, 1, 2])).toBe(5);
    expect(solution2([1, 2, 3])).toBe(4);
    expect(solution2([-1, -3])).toBe(1);
  });
});
