class MinBinaryHeap {
  values: any[];
  constructor() {
    this.values = [];
  }
  insert(value: any) {
    this.values.push(value);
    this.bubble();
  }
  bubble() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent > element) break;
      this.values[parentIndex] = element;
      this.values[idx] = parent;
      idx = parentIndex;
    }
  }
  extractMax() {
    let idx = this.values.length - 1;
    let temp = this.values[0];
    this.values[0] = this.values[idx];
    this.values[idx] = temp;
    const removedItem = this.values.pop();
    while (true) {
      const parentIdx = 0;
    }
  }
}

const heap = new MinBinaryHeap();
heap.insert(39);
heap.insert(37);
heap.insert(53);
heap.insert(16);
heap.insert(23);
heap.insert(10);
heap.insert(50);

heap.extractMax();

console.log(heap.values);
