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
