// export function confirmEnding(str: string, target: string) {
//   const start = str.length - target.length;

//   //both work
//   //   return str.substring(start, str.length);
//   return str.substring(start) === target;
// }

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesame', 'pen'));

//The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
