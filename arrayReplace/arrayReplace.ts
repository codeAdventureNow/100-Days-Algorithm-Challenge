// my solution

// export function arrayReplace(
//   inputArray: number[],
//   elemToReplace: number,
//   substitutionElem: number
// ): number[] {
//   const newArray: number[] = [];

//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === elemToReplace) {
//       inputArray[i] = substitutionElem;
//       newArray.push(inputArray[i]);
//     } else {
//       newArray.push(inputArray[i]);
//     }
//   }

//   return newArray;
// }

//his solution
export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  inputArray.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });
  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
console.log(arrayReplace([5, 2, 5, 4], 5, 7));
