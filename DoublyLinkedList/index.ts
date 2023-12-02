type node = DNode | null | undefined;

class DNode {
  public data: any;
  public next: node;
  public prev: node;
  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  private length: number;
  private head: node;
  private tail: node;
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  push(data: any): number {
    const newNode = new DNode(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }
  pop(): node {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = temp?.prev;
      this.tail!.next = null;
      temp!.prev = null;
    }
    this.length--;
    return temp;
  }
  shift(): node {
    if (this.length === 0) {
      return undefined;
    }
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
      removedNode!.next = null;
    }
    this.length--;
    return removedNode;
  }
  unShift(data: any): number {
    const newNode = new DNode(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }
  printListValues(): any[] {
    let arr: any[] = [];
    let temp = this.head;
    while (temp) {
      arr.push(temp?.data);
      temp = temp.next;
      1;
    }
    return arr;
  }
  get(index: number): node {
    if (index < 0 || index >= this.length) return null;
    let count: number;
    let temp: node;
    if (index < Math.ceil(this.length / 2)) {
      count = 0;
      temp = this.head;
      while (count !== index) {
        temp = temp?.next;
        count++;
      }
    } else {
      count = this.length - 1;
      temp = this.tail;
      while (count !== index) {
        temp = temp?.prev;
        count--;
      }
    }
    return temp;
  }
  set(data: any, index: number): boolean {
    const updatedNode = this.get(index);
    //case node not found
    if (!updatedNode) return false;
    // update data of selected  node
    updatedNode.data = data;
    return true;
  }
  insert(data: any, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.unShift(data);
    else if (index === this.length) this.push(data);
    else {
      const prevNode = this.get(index - 1);
      const newNode = new DNode(data);
      newNode.prev = prevNode;
      newNode.next = prevNode?.next;
      prevNode!.next = newNode;
      prevNode!.next!.prev = newNode;
    }
    this.length++;
    return true;
  }
  remove(index: number): node {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      let removedNode: node;
      let deletedNode = this.get(index);
      deletedNode!.next!.prev = deletedNode!.prev;
      deletedNode!.prev!.next = deletedNode!.next;
      removedNode!.prev = removedNode!.next = null;
      this.length--;
      return removedNode;
    }
  }
}

const list = new DoublyLinkedList();

console.log(list.push(4));
console.log(list.push(5));
console.log(list.push(6));

// console.log(list.pop());

// console.log(list.shift());

// console.log(list.unShift(3));

// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));

// console.log(list.set(-2, 0));
// console.log(list.set(-1, 1));
// console.log(list.set(0, 2));

// list.insert(3, 0);
// list.insert(7, 4);
// list.insert("ahmed", 2);

// list.insert(8, 2);
// list.insert(9, 2);
// list.insert(10, 2);

list.remove(1);

console.log(list.printListValues());
