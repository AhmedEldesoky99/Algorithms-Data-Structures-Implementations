// Memoization O(n)
const memo: { [name: string]: number } = {};

function optFib(num: number, memo: { [name: string]: number }): number {
  if (memo[num]) return memo[num];

  if (num < 2) {
    memo[num] = 1;
    return num;
  }

  let res = optFib(num - 1, memo) + optFib(num - 2, memo);

  memo[num] = res;

  return res;
}

console.log(optFib(1000, memo));

// O(2^n)
function fib(num: number): number {
  return num < 2 ? num : fib(num - 1) + fib(num - 2);
}
console.log(fib(10));
