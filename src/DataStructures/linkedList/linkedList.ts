export class LinkedNode {
  constructor(
    public value: any,
    public next?: LinkedNode | undefined,
  ) {
    this.value = value;
    this.next = next;
  }
}
