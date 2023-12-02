//time complexity
// insertion O(1)
// removal O(1) || O(n)
// searching O(n)
// access O(n)

type node = SNode | undefined | null;

class SNode {
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
    const newNode = new SNode(data);
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
    let current: node, prev: node;
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
    let newNode = new SNode(data);
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
  set(data: any, idx: number): boolean {
    const foundedNode = this.get(idx);
    if (!foundedNode) return false;
    foundedNode.data = data;
    return true;
  }
  insert(data: any, idx: number): boolean {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) this.unShift(data);
    else if (idx === this.length) this.push(data);
    else {
      const newNode = new SNode(data);
      const pervNode = this.get(idx - 1);
      newNode.next = pervNode?.next;
      pervNode!.next = newNode;
      this.length++;
    }
    return true;
  }
  remove(idx: number): boolean {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) this.shift();
    else if (idx === this.length) this.pop();
    else {
      let pervNode = this.get(idx - 1);
      pervNode!.next = pervNode!.next?.next;
    }

    return true;
  }
  reverse(): SinglyLinkedList {
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    let next: node;
    let prev: node = null;

    for (let i = 0; i < this.length; i++) {
      next = current?.next;
      current!.next = prev;
      prev = current; //for move
      current = next; //for move
    }

    return this;
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

// console.log(list.insert(0, 0));
// console.log(list.insert(5, 3));
// console.log(list.insert(55, 4));
// console.log(list.insert(55, 20)); //to large index
// console.log(list.insert(55, -1)); // negative index

// console.log(list.remove(0));
// console.log(list.remove(3));
// console.log(list.remove(1));

// console.log(list.reverse());

console.log(list.getList());
