export function candies(n: number, m: number): number {
  const candy: number = Math.floor(m / n);

  return candy * n;
}

// n-children, pieces of candy
console.log(candies(3, 10));
console.log(candies(4, 10));
console.log(candies(4, 11));
console.log(candies(5, 11));
