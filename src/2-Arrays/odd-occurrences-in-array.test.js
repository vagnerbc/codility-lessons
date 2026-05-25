import solution from "./odd-occurrences-in-array";
import solution2 from "./odd-occurrences-in-array-may2026";

describe("OddOccurrencesInArray", () => {
  it("should return the correct value", () => {
    expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7);

    expect(solution2([9, 3, 9, 3, 9, 7, 9])).toBe(7);
  });
});
