import { NodeTree, tree1 } from "../../DataStructures/tree/tree";

/**
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
 */

// [4, 2, 5, 1, 6, 3, 7]
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
