import { LinkedNode } from "../DataStructures/linkedList/linkedList";

export function printList(head: LinkedNode | undefined) {
  let current: LinkedNode | undefined = head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function main() {
  const list = new LinkedNode(
    10,
    new LinkedNode(20, new LinkedNode(30, new LinkedNode(40))),
  );

  printList(list);
}

main();
