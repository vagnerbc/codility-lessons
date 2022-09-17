import solution, { solution2 } from "./perm-missing-element";

describe("PermMissingElement tests", () => {
  it("should return the correct value", () => {
    expect(solution([2, 3, 1, 5])).toBe(4);

    expect(solution2([2, 3, 1, 5])).toBe(4);
  });
});
