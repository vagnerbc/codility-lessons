import { longestSubscring } from "./longestSubstringWithoutRepeat";

describe("Longest Substring Without Repeat", () => {
  it("Solution", () => {
    expect(longestSubscring(["a", "b", "c", "c", "a", "b", "c"])).toEqual(3);
    expect(
      longestSubscring(["a", "b", "c", "c", "a", "b", "c", "a", "b", "c", "c"]),
    ).toEqual(3);
  });
});
