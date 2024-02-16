class QNode {
  value: any;
  priority: number;
  constructor(value: any, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  values: QNode[];
  constructor() {
    this.values = [];
  }
  swap(index1: number, index2: number) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
  enQueue(value: any, priority: number): number {
    const node = new QNode(value, priority);
    this.values.push(node);
    this.bubble();
    return this.values.length;
  }
  bubble() {
    let currentIndex = this.values.length - 1;
    let currentElement = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (currentElement.priority >= parent.priority) break;

      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
  deQueue() {
    let length = this.values.length;
    this.swap(0, length - 1);
    const removedItem = this.values.pop();

    if (length > 0) {
      this.sinkDown();
    }
    return removedItem;
  }
  // sinkDown() {
  //   let currentIndex = 0;
  //   const length = this.values.length - 1;
  //   while (true) {
  //     let leftIndex = 2 * currentIndex + 1;
  //     let rightIndex = 2 * currentIndex + 2;
  //     let swapIndex: any = null;

  //     if (leftIndex < length) {
  //       const leftChild = this.values[leftIndex];
  //       if (this.values[currentIndex].priority > leftChild.priority) {
  //         swapIndex = leftIndex;
  //       }
  //     }

  //     if (rightIndex < length) {
  //       const rightChild = this.values[rightIndex];
  //       if (rightChild.priority < this.values[currentIndex].priority) {
  //         if (
  //           (swapIndex === null &&
  //             rightChild.priority < this.values[currentIndex].priority) ||
  //           (swapIndex !== null &&
  //             rightChild.priority < this.values[leftIndex].priority)
  //         ) {
  //           swapIndex = rightIndex;
  //         }
  //       }
  //     }

  //     if (swapIndex === null) break;
  //     this.swap(currentIndex, swapIndex);
  //     currentIndex = swapIndex;
  //   }
  // }
  sinkDown() {
    let length = this.values.length;
    let currentIndex = 0;
    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let swapIndex: any = null;

      if (
        leftIndex < length &&
        this.values[currentIndex].priority > this.values[leftIndex]?.priority &&
        this.values[leftIndex].priority < this.values[rightIndex]?.priority
      ) {
        this.swap(currentIndex, leftIndex);
        swapIndex = leftIndex;
      }
      if (
        rightIndex < length &&
        this.values[currentIndex].priority >
          this.values[rightIndex]?.priority &&
        this.values[rightIndex].priority < this.values[leftIndex]?.priority
      ) {
        this.swap(currentIndex, rightIndex);
        swapIndex = rightIndex;
      }
      if (swapIndex === null) break;
      console.log(swapIndex);
      currentIndex = swapIndex;
    }
  }
}

export class SimplePriorityQueue {
  private values: any[];
  constructor() {
    this.values = [];
  }
  enqueue(val: string, priority: number) {
    this.values.push({ val, priority });
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enQueue("low ", 3);

priorityQueue.enQueue("high", 1);

priorityQueue.enQueue("mid", 2);

priorityQueue.enQueue("highest", 0);

priorityQueue.enQueue("lowest", 5);

console.log(priorityQueue.deQueue());
console.log(priorityQueue.deQueue());
console.log(priorityQueue.deQueue());
console.log(priorityQueue.deQueue());
console.log(priorityQueue.deQueue());
