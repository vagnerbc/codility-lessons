import { bst1, NodeTree } from "../tree";

export function dfs(root: NodeTree | null, target: number) {
  if (!root) return null;
  if (root.value === target) return root;

  console.log(root?.value);

  const left: any = dfs(root.left, target);

  if (left !== null) return left;

  const right: any = dfs(root.right, target);

  return right;
}

function main() {
  const result = dfs(bst1, 4);

  console.log({ result });
}

main();
