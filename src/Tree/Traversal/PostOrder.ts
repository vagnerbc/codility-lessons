import { NodeTree, tree1 } from "../../DataStructures/tree/tree";

/**
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
 */

// [4, 5, 2, 6, 7, 3, 1]

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
