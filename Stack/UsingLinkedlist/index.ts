type node = SNode | null;

class SNode {
  public data: any;
  public next: node;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  last: node;
  first: node;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val: any): number {
    const newNode = new SNode(val);
    if (this.size === 0) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }
  pop(): node {
    if (this.size === 0) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const removedItem = this.first;
    this.first = this.first!.next;
    removedItem!.next = null;
    this.size--;
    return removedItem;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);

stack.pop();

console.log(stack);
