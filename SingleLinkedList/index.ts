type node = CNode | undefined | null;

class CNode {
  public next: node;
  public data: any;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  public head: node;
  public tail: node;
  public length: number;
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  push(data: any) {
    const newNode = new CNode(data);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //sol 1
  // pop() {
  //   let removedItem: any;
  //   if (this.length === 0) return;
  //   if (this.length === 1) {
  //     removedItem = this.head?.data;
  //     this.head = this.tail = null;
  //   } else {
  //     let prev = this.head;
  //     while (prev?.next?.next !== null) {
  //       prev = prev!.next;
  //     }
  //     removedItem = this.tail?.data;
  //     this.tail = prev;
  //     this.tail.next = null;
  //   }
  //   this.length--;
  //   return removedItem;
  // }
  //sol 2
  pop() {
    if (this.length === 0) return;
    let current: CNode | null, prev: CNode | null;
    current = prev = this.head;
    while (current?.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail!.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return;
    let temp = this.head;
    let removedItem = temp;
    this.head = temp?.next;
    temp!.next = null;
    this.length--;
    return removedItem;
  }
  unShift(data: any) {
    let newNode = new CNode(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  getList() {
    let temp = this.head;
    let arr: any[] = [];
    while (temp) {
      arr.push(temp.data);
      temp = temp.next;
    }
    return arr;
  }
  get(index: number): node {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let temp = this.head;
    //sol 1
    // while (temp) {
    //   if (count === index) {
    //     return temp;
    //   }
    //   temp = temp.next;
    //   count++;
    // }
    //sol 2
    while (count !== index) {
      temp = temp?.next;
      count++;
    }
    return temp;
  }
  set(value: any, idx: number): boolean {
    const foundedNode = this.get(idx);
    if (!foundedNode) return false;
    foundedNode.data = value;
    return true;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// console.log(list.unShift(0));

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.get(2));
// console.log(list.set(5, 2));

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

console.log(list.getList());
