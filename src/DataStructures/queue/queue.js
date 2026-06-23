export class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const value = this.items[this.head];
    this.head++;

    // clear when to big
    if (this.head > 1000 && this.head * 2 > this.items.length) {
      this.items.splice(this.head);
      this.head = 0;
    }

    return value;
  }

  peek() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.head > this.items.length - 1;
  }

  size() {
    return this.items.length - this.head;
  }
}
