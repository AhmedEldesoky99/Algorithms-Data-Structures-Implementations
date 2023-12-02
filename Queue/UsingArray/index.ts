class Queue {
  items: any[];
  constructor() {
    this.items = [];
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

console.log(queue);
