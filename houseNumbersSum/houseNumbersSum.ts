//Nate solution

// export function houseNumbersSum(inputArray: number[]): number {
//   const beforeZero = [];

//   for (let i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === 0) {
//       return beforeZero.reduce((acc, curr) => {
//         return acc + curr;
//       });
//     } else {
//       beforeZero.push(inputArray[i]);
//     }
//   }
// }

//Dylan
export function houseNumbersSum(inputArray: number[]): number {
  let total = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return total;
    }
    total += inputArray[i];
  }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

//push to an array
//once the value at i = 0 return the array with the numbers added.
