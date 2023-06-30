///my solution

// export function evenDigitsOnly(n: number): boolean {
//   const arrayAsString = n.toString().split('');
//   const arrayAsNumber = [];

//   arrayAsString.forEach((string) => {
//     arrayAsNumber.push(parseInt(string));
//   });

//   const isEven = (number) => number % 2 === 0;

//   return arrayAsNumber.every(isEven);
// }

//Dylan
console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

export function evenDigitsOnly(n: number): boolean {
  const digits = n.toString().split('');

  return digits.every((digit) => parseInt(digit) % 2 === 0);
}
