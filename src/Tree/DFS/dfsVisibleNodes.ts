import { bst1, NodeTree } from "../tree";

/*
In a binary tree, a node is labeled as "visible" if, on the path from the root to that node, there isn't any node with a value higher than this node's value.

The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.

Input:
          5
        /   \
       4     6
      / \      
     3   8      

Output: 3  
Nodes 5, 6 e 8

For example: Node 4 is not visible since 5>4, similarly Node 3 is not visible since both 5>3 and 4>3. Node 8 is visible since all 5<=8, 4<=8, and 8<=8.

*/

export function dfs(root: NodeTree | null, maxSoFar: number = 0) {
  if (!root) return 0;
  // console.log(root.value);

  let total = 0;
  if (root.value >= maxSoFar) {
    total++;
  }

  const newMax = Math.max(maxSoFar, root.value);

  console.log({
    root: root.value,
    maxSoFar,
    total,
    newMax,
  });

  total += dfs(root.left, newMax);

  total += dfs(root.right, newMax);

  return total;
}

function main() {
  console.log(dfs(bst1));
}

main();
