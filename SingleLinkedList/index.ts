class CNode {
  public next: CNode | null;
  public data: any;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  public head: CNode | null;
  public tail: CNode | null;
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
  getList() {
    let temp = this.head;
    let arr: any[] = [];
    while (temp) {
      arr.push(temp.data);
      temp = temp.next;
    }
    return arr;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.getList());
