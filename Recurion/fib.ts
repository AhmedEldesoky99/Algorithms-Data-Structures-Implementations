// Memoization O(n) but large space complexity
const memo: { [name: string]: number } = {};

function fibMemo(num: number, memo: { [name: string]: number }): number {
  if (memo[num]) return memo[num];

  if (num < 2) {
    memo[num] = 1;
    return num;
  }

  let res = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);

  memo[num] = res;

  return res;
}

console.log(fibMemo(5, memo));

//tabulation version
function fibTabulation(num: number): number {
  if (num <= 2) return 1;
  let fibSeries = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }

  return fibSeries[num];
}
console.log(fibTabulation(5));

// O(2^n)
function fib(num: number): number {
  return num < 2 ? num : fib(num - 1) + fib(num - 2);
}
console.log(fib(5));
