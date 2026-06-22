function twoSumUniquePairs(nums = [], target) {
  const comp = new Set();
  const aux = new Set();

  for (let i = 0; i < nums.length; i++) {
    const compValue = target - nums[i];

    if (comp.has(nums[i])) {
      aux.add(
        `${
          (Math.min(target - nums[i], nums[i]),
          Math.max(target - nums[i], nums[i]))
        }`,
      );
    } else {
      comp.add(compValue);
    }
  }
  return aux.size;
}
