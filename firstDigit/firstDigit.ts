// export function firstDigit(inputString: string): string {
//   const stringArray = inputString.split('');
//   const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//   const firstNumber = [];

//   for (let i = 0; i < stringArray.length; i++) {
//     if (stringArray[i].includes(stringNumbers)) {
//       firstNumber.push(stringArray[i]);
//     }
//   }

//   return firstNumber;
// }

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
export function firstDigit(inputString: string): string {
  const chars = inputString.split('');
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < inputString.length; i++) {
    if (digits.includes(inputString[i])) {
      return inputString[i];
    }
  }
}
