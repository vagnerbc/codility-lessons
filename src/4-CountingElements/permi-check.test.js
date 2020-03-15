import solution from "./permi-check";

describe("PermCheck tests", () => {
  it("should return the correct value", () => {
    expect(solution([1, 2, 3, 4])).toBe(1);
    expect(solution([1, 2, 3, 5])).toBe(0);
  });
});
