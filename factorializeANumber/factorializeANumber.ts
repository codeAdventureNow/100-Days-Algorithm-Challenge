//my solution

// export function factorializeANumber(num: number): number {
//   const numberArray: number[] = [];

//   for (let i = 0; i <= num; i++) {
//     if (i >= 1) {
//       numberArray.push(i);
//     }
//   }

//   return numberArray.reduce((acc, cur) => acc * cur, 1);
// }

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));

//Dylan

export function factorializeANumber(num: number): number {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}
