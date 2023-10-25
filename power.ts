function power(base: number, exponent: number): number {
  return exponent === 0 ? 1 : base * power(base, exponent - 1);
}

console.log(power(5, 2));
