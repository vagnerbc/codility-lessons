import { bst1, NodeTree } from "../../DataStructures/tree/tree";

/**
 * Using global variable
 */
// let maxValue = 0;
// export function dfs(root: NodeTree | null, value: number = 0) {
//   if (!root) return null;

//   if (root.value > value) {
//     maxValue = root.value;
//   }

//   console.log({ rootValue: root?.value, value, maxValue });

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

/**
 * 
          8
        /   \
       3     10
      / \      \
     1   6      14
        / \    /
       4   7  13
 */
export function dfs(root: NodeTree | null) {
  if (!root) return 0;

  const lValue = dfs(root.left);

  const rValue = dfs(root.right);

  const max = Math.max(root.value, lValue, rValue);

  console.log({
    root: root.value,
    lValue,
    rValue,
    max,
  });

  return max;
}

function main() {
  console.log(dfs(bst1));
}

main();
