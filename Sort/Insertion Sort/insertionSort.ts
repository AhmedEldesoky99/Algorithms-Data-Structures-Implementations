function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j: number;
    for (j = i - 1; j > -1 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue; //
  }
  return arr;
}

console.log(insertionSort([5, 7, 1, 4, 78, -5]));
