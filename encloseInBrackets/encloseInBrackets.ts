// export function encloseInBrackets(inputString: string): string {
//   //   console.log(inputString.split(''));

//   const stringArray = inputString.split('');

//   stringArray.push(')');
//   stringArray.unshift('(');

//   return stringArray.join('');
// }

//Dylan solution
export function encloseInBrackets(inputString: string): string {
  return `(${inputString})`;
}

console.log(encloseInBrackets('abacaba'));

//split the string
//insert ( at index 0
//add   ) at .length -1
