import solution, { solution2 } from "./perm-missing-element";
import { solution3, solution4 } from "./perm-missing-element-may2026";

describe("PermMissingElement tests", () => {
  it("should return the correct value", () => {
    expect(solution([2, 3, 1, 5])).toBe(4);

    expect(solution2([2, 3, 1, 5])).toBe(4);

    expect(solution3([2, 3, 1, 5])).toBe(4);

    expect(solution4([2, 3, 1, 5])).toBe(4);
  });
});
