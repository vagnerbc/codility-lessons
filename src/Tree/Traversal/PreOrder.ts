import { NodeTree, tree1 } from "../../DataStructures/tree/tree";

/**
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
 */

// [1, 2, 4, 5, 3, 6, 7]
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
