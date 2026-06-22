import { NodeTree, tree1, tree2 } from "../tree";

export function preOrderTraversal(root: NodeTree | null, result: any[] = []) {
  if (root === null) return;

  result.push(root.value);
  preOrderTraversal(root.left, result);
  preOrderTraversal(root.right, result);

  return result;
}

function main() {
  console.log(preOrderTraversal(tree1));
}

main();
