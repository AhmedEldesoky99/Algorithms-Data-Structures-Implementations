function LinearSearch(arr: any[], el: any): number {
  for (let i = 0; i < arr.length; i++) {
    if (el === arr[i]) {
      return i;
    }
  }
  return -1;
}

// console.log(LinearSearch([1, 2, 3, 4, 5], 5), "LinearSearch");

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
// console.log(BinarySearchRec([1, 2, 3, 4, 5], 4), "BinarySearchRec");

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
// console.log(BinarySearchRegular([1, 2, 3, 4, 5], 4), "BinarySearch");

function stringSearch(str: string, subStr: string): number {
  let count = 0;
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === subStr[p]) {
      p++;
    } else {
      p = 0;
    }
    if (p === subStr.length) {
      count++;
    }
  }

  return count;
}
// console.log(stringSearch("lorie loled", "lo"));
