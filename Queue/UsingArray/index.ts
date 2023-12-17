export class Queue {
  items: any[];
  length: number;
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  enqueue(data: any): number {
    this.items.push(data);
    return this.items.length;
  }
  dequeue(): any {
    return this.items.shift();
  }
}

const queue = new Queue();

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

queue.dequeue();
