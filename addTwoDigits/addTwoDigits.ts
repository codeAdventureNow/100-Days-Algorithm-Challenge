// my answer

// export function addTwoDigits(n: any): number {
//   let numberSplit = String(n).split('');
//   return Number(numberSplit[0]) + Number(numberSplit[1]);
// }

//Dylan answer

export function addTwoDigits(n: any): number {
  let numbers = n.toString().split('');

  return parseInt(numbers[0]) + parseInt(numbers[1]);
}

console.log(addTwoDigits(34));
console.log(addTwoDigits(74));

// export function addTwoDigits(n: any): number {
//   let nums = n.toString().split('');
//   console.log(nums);

//   return parseInt(nums[0]) + parseInt(nums[1]);
// }
