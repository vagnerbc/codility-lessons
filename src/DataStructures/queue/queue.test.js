import { Queue } from "./queue";

describe("Queue tests", () => {
  test("Should return correctly", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);

    queue.enqueue(10);
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(undefined);
  });
});
