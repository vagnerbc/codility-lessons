import { bst1, NodeTree } from "../tree";

/**
 * Using global variable
 */
// let maxValue = 0;
// export function dfs(root: NodeTree | null, value: number = 0) {
//   if (!root) return null;

//   // console.log(root?.value);

//   if (root.value > value) {
//     maxValue = root.value;
//   }

//   dfs(root.left, maxValue);

//   dfs(root.right, maxValue);
// }

// function main() {
//   dfs(bst1);

//   console.log(maxValue);
// }

/**
 * Returning value
 */
export function dfs(root: NodeTree | null, value: number = 0) {
  if (!root) return 0;

  // console.log(root.value);

  const lValue: number = dfs(root.left, value);

  const rValue: number = dfs(root.right, value);

  const max = Math.max(root.value, lValue, rValue);

  // console.log({
  //   root: root.value,
  //   lValue,
  //   rValue,
  //   max,
  // });

  return max;
}

function main() {
  console.log(dfs(bst1));
}

main();
