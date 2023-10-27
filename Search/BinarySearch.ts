function BinarySearchRec(
  arr: any[],
  el: any,
  start = 0,
  end = arr.length - 1
): number | undefined {
  //base condition
  if (start > end) return -1;

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === el) return middle;
  else if (arr[middle] > el) return BinarySearchRec(arr, el, start, middle - 1);
  else return BinarySearchRec(arr, el, middle + 1, end);
}
console.log(BinarySearchRec([1, 2, 3, 4, 5], 4), "BinarySearchRec");

function BinarySearchRegular(arr: any[], el: any): number {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);

  while (start <= end && arr[middle] !== el) {
    if (el > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === el) {
    return middle;
  }

  return -1;
}
console.log(BinarySearchRegular([1, 2, 3, 4, 5], 4), "BinarySearch");
