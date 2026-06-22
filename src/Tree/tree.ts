export class NodeTree {
  constructor(
    public value: any,
    public left: NodeTree | null = null,
    public right: NodeTree | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

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
export const bst1 = new NodeTree(
  8,
  new NodeTree(
    3,
    new NodeTree(1),
    new NodeTree(6, new NodeTree(4), new NodeTree(7)),
  ),
  new NodeTree(10, null, new NodeTree(14, new NodeTree(13), null)),
);

/**
        1
      /   \
     2     3
    / \   / \
   4   5 6   7
 */
export const tree1 = new NodeTree(
  1,
  new NodeTree(2, new NodeTree(4), new NodeTree(5)),
  new NodeTree(3, new NodeTree(6), new NodeTree(7)),
);

/**
          10
        /    \
       5      20
      / \    /  \
     3   7  15   30
          \      /
           8    25
 * 
 * 
 */
export const tree2 = new NodeTree(
  10,
  new NodeTree(5, new NodeTree(3), new NodeTree(7, null, new NodeTree(8))),
  new NodeTree(20, new NodeTree(15), new NodeTree(30, new NodeTree(25), null)),
);
