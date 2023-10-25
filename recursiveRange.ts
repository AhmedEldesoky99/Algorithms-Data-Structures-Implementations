function recursiveRange(start: number, end: number): number {
  if (start === end) return start;
  return start + recursiveRange(start + 1, end);

  // 1       recursiveRange(2,3)
  //             2 + recursiveRange(3,3 )
  //                         3
}
console.log(recursiveRange(1, 3));
