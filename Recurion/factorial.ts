function factorial(number: number): number {
  return number <= 1 ? 1 : number * factorial(number - 1);
}

console.log(factorial(3));
