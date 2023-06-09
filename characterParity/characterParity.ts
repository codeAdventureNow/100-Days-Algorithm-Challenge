// export function characterParity(symbol: string): string {
//   const isEven = parseInt(symbol) % 2 === 0;
//   const notADigit = isNaN(parseInt(symbol));

//   if (notADigit) {
//     return 'not a digit';
//   }

//   return isEven ? 'even' : 'odd';
// }

console.log(characterParity('5'));
console.log(characterParity('8'));
console.log(characterParity('q'));
console.log(characterParity('h'));
console.log(characterParity('6'));
console.log(characterParity('7'));

//Double ternary

//Dylans way
export function characterParity(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result) ? 'not a digit' : result % 2 === 0 ? 'even' : 'odd';
}
