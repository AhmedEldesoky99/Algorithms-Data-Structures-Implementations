class Stack {
  private items: any[];
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  push(data: any): number {
    return this.items.push(data);
  }
  pop(): any {
    if (this.size() === 0) {
      throw new Error("Stack is Empty");
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

console.log(stack);
