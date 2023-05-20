// my answer

// export function addTwoDigits(n: any): number {
//   let numberSplit = String(n).split('');
//   return Number(numberSplit[0]) + Number(numberSplit[1]);
// }

//Dylan answer

export function addTwoDigits(n: any): number {
  let nums = n.toString().split('');
  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(34));
