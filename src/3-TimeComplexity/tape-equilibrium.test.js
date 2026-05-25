import solution, { solution2 } from "./tape-equilibrium";
import solution3, { solution4 } from "./tape-equilibrium-may2026";

describe("TapeEquilibrium tests", () => {
  it("should return the correct value", () => {
    expect(solution([3, 1, 2, 4, 3])).toBe(1);

    expect(solution2([3, 1, 2, 4, 3])).toBe(1);

    expect(solution3([3, 1, 2, 4, 3])).toBe(1);

    expect(solution4([3, 1, 2, 4, 3])).toBe(1);
  });
});
