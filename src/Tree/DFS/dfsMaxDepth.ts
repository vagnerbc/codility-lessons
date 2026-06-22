import { bst1, NodeTree } from "../tree";

export function dfs(root: NodeTree | null) {
  if (!root) return 0;

  // console.log(root.value);

  const lValue: number = dfs(root.left);

  const rValue: number = dfs(root.right);

  const maxDeaph = 1 + Math.max(lValue, rValue);

  return maxDeaph;
}

function main() {
  console.log(dfs(bst1));
}

main();
