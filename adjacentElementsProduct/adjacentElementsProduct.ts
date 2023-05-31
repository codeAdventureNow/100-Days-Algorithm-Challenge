export function adjacentElementsProduct(inputArray: number[]): number {
  let largestProduct = inputArray[0] * inputArray[1];

  for (let i = 1; inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];

    largestProduct = product > largestProduct ? product : largestProduct;
  }
  return largestProduct;
}

console.log('hello');
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

//  I would call this pattern setting a baseline, with a let variable, woith the first instance

//Then loop, if we exceed baseline, then we update it

// we start at let i = 1 because we have taken care of the zero index in our let largestProduct

// the right most number doesn't have a number to multiply to so we set:
// inputArray.length - 1

// export function adjacentElementsProduct(inputArray: number[]): number {
//   let largestProduct = inputArray[0] * inputArray[1];

//   for (let i = 1; inputArray.length - 1; i++) {
//     const product = inputArray[i] * inputArray[i + 1];

//     largestProduct = largestProduct < product ? product : largestProduct;
//   }
//   return largestProduct;
// }
