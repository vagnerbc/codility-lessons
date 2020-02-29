import solution from "./odd-occurrences-in-array";

describe("OddOccurrencesInArray", () => {
  it("should return the correct value", () => {
    expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7);
  });
});
