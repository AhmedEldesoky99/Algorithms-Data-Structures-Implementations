type node = QNode | null;

class QNode {
  public data: any;
  public next: node;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  first: node;
  last: node;
  size: number;
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }
  enqueue(data: any): number {
    const newNode = new QNode(data);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(): node {
    if (!this.first) return null;
    const removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
  isEmpty(): boolean {
    return this.size === 0;
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
