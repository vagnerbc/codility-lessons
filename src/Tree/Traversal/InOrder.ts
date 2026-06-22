import { NodeTree, tree1, tree2 } from "../tree";

export function inOrderTraversal(root: NodeTree | null, result: any[] = []) {
  if (root === null) return;

  inOrderTraversal(root.left, result);
  result.push(root.value);
  inOrderTraversal(root.right, result);

  return result;
}

function main() {
  console.log(inOrderTraversal(tree1));
}

main();
