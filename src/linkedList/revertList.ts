import { LinkedNode } from "../DataStructures/linkedList/linkedList";

function revertList(head: LinkedNode | undefined) {
  let prev: LinkedNode | undefined;
  let current: LinkedNode | undefined = head;

  while (current) {
    const nextNode = current.next;

    current.next = prev;
    prev = current;

    current = nextNode;
  }

  return prev;
}

function main() {
  const list = new LinkedNode(
    10,
    new LinkedNode(20, new LinkedNode(30, new LinkedNode(40))),
  );

  console.log({
    list: JSON.stringify(revertList(list)),
  });
}

main();
