import solution from "./cyclic-rotation";

describe("CyclicRotation tests", () => {
  it("should return the correct value", () => {
    expect(solution([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
    expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8]);
    expect(solution([0, 0, 0], 1)).toEqual([0, 0, 0]);
  });
});
