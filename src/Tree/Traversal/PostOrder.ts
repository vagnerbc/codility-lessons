import { NodeTree, tree1, tree2 } from "../tree";

export function postOrderTraversal(root: NodeTree | null, result: any[] = []) {
  if (root === null) return;

  postOrderTraversal(root.left, result);
  postOrderTraversal(root.right, result);
  result.push(root.value);

  return result;
}

function main() {
  console.log(postOrderTraversal(tree1));
}

main();
