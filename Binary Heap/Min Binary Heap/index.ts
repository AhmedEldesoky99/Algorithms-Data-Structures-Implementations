class MinBinaryHeap {
  values: any[];
  constructor() {
    this.values = [];
  }
  swap(index1: any, index2: any) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
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
      if (parent < element) break;
      this.swap(parentIndex, idx);
      idx = parentIndex;
    }
  }

  extractMin() {
    let length = this.values.length;
    //swap first large element with the last small element
    this.swap(0, length - 1);
    //delete root
    const removedItem = this.values.pop();
    //check if array is not empty to do logic
    if (length > 0) {
      this.sinkDown();
    }
    return removedItem;
  }
  sinkDown() {
    let length = this.values.length;
    let currentIndex = 0;
    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let swapIndex: any = null;

      if (
        leftIndex < length &&
        this.values[currentIndex] > this.values[leftIndex] &&
        this.values[leftIndex] < this.values[rightIndex]
      ) {
        this.swap(currentIndex, leftIndex);
        swapIndex = leftIndex;
      }
      if (
        rightIndex < length &&
        this.values[currentIndex] > this.values[rightIndex] &&
        this.values[rightIndex] < this.values[leftIndex]
      ) {
        this.swap(currentIndex, rightIndex);
        swapIndex = rightIndex;
      }
      if (swapIndex === null) break;
      currentIndex = swapIndex;
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

heap.extractMin();

console.log(heap.values);
