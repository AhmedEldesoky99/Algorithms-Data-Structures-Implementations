function fib(num: number): number {
  return num === 0 || num === 1 ? num : fib(num - 1) + fib(num - 2);
}

console.log(fib(3));
