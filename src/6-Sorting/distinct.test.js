import solution, { solution2 } from "./distinct";
import { solution3, solution4 } from "./distinct-mai2026";

describe("Distinct tests", () => {
  it("should return the correct value", () => {
    expect(solution([])).toBe(0);
    expect(solution([4, 2, 2, 1, 3, 4])).toBe(4);
    expect(solution([2, 2, 2, 4, 2, 2])).toBe(2);
    expect(solution([2, 2, 2, 4, 2, 1, 1])).toBe(3);

    expect(solution2([])).toBe(0);
    expect(solution2([4, 2, 2, 1, 3, 4])).toBe(4);
    expect(solution2([2, 2, 2, 4, 2, 2])).toBe(2);
    expect(solution2([2, 2, 2, 4, 2, 1, 1])).toBe(3);

    expect(solution3([])).toBe(0);
    expect(solution3([4, 2, 2, 1, 3, 4])).toBe(4);
    expect(solution3([2, 2, 2, 4, 2, 2])).toBe(2);
    expect(solution3([2, 2, 2, 4, 2, 1, 1])).toBe(3);

    expect(solution4([])).toBe(0);
    expect(solution4([4, 2, 2, 1, 3, 4])).toBe(4);
    expect(solution4([2, 2, 2, 4, 2, 2])).toBe(2);
    expect(solution4([2, 2, 2, 4, 2, 1, 1])).toBe(3);
  });
});
