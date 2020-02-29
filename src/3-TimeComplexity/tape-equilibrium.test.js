import solution from "./tape-equilibrium";

describe("TapeEquilibrium tests", () => {
  it("should return the correct value", () => {
    expect(solution([3, 1, 2, 4, 3])).toBe(1);
  });
});
