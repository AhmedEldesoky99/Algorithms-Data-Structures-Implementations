function swap(arr: any[], index1: number, index2: number) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function BubbleSortOptimized(arr: number[]): number[] {
  let noSwap = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(BubbleSortOptimized([10, -25, -6, 77, -88]));
