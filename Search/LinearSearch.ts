function LinearSearch(arr: any[], el: any): number {
  for (let i = 0; i < arr.length; i++) {
    if (el === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch([1, 2, 3, 4, 5], 5), "LinearSearch");
