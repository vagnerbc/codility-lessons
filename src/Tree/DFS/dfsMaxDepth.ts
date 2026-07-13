import { bst1, NodeTree } from "../../DataStructures/tree/tree";

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

  // console.log(root.value);

  const lValue: number = dfs(root.left);

  const rValue: number = dfs(root.right);

  const maxDeaph = 1 + Math.max(lValue, rValue);

  console.log({
    root: root.value,
    lValue,
    rValue,
    maxDeaph,
  });

  return maxDeaph;
}

function main() {
  console.log(dfs(bst1));
}

main();
