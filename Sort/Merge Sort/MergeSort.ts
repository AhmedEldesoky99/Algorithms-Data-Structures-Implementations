function mergedTwoArrays(arr1: number[], arr2: number[]): number[] {
  let mergedArr: number[] = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    mergedArr = mergedArr.concat(arr1.slice(i));
  }
  if (j < arr2.length) {
    mergedArr = mergedArr.concat(arr2.slice(j));
  }

  return mergedArr;
}

// console.log(mergedTwoArrays([1, 2, 3, 4], [-1, -2, 0, 10, 15]));

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2); // 2
  let right = mergeSort(arr.slice(0, mid)); // 1 -99       1 -99
  let left = mergeSort(arr.slice(mid)); // 2 4 3          [2]  [4]  [3]
  return mergedTwoArrays(left, right);
}
console.log(mergeSort([1, -99, 2, 4, 3]));
