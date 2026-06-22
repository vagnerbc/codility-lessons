// [a,b,c,c,a,b,c]
// Return 3  -> [a,b,c]

export const longestSubscring = (arr = []) => {
  let longest = 0;
  let l = 0;
  let window = new Set();

  for (let r = 0; r < arr.length; r++) {
    while (window.has(arr[r])) {
      window.delete(arr[l]);
      l += 1;
    }

    window.add(arr[r]);
    longest = Math.max(longest, r - l + 1);
  }

  return longest;
};
