// export function arrayPreviousLess(items: number[]): number[] {
//   const lessThanList: number[] = [];

//   for (let i = items.length - 1; i >= 0; i--) {
//     for (let j = i; j >= 0; j--) {
//       if (items[i] > items[j]) {
//         lessThanList.unshift(items[j]);
//         break;
//       } else if (j === 0) {
//         lessThanList.unshift(-1);
//       }
//     }
//   }

//   return lessThanList;
// }

export function arrayPreviousLess(items: number[]): number[] {
  const newArr: number[] = [-1];

  for (let i = 1; i < items.length; i++) {
    if (items[i - 1] < items[i]) {
      newArr.push(items[i - 1]);
    } else {
      newArr.push(-1);
    }
  }

  return newArr;
}

// export function arrayPreviousLess(arr) {
//   const newArr = [-1];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] < arr[i]) {
//       newArr.push(arr[i - 1]);
//     } else {
//       newArr.push(-1);
//     }
//   }
//   return newArr;
// }
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([2, 7, 6, 3, 5, 9, 9, 1, 7]));

//j allows us to iterate from the position that we are in, in the array so that we aren't doing duplicate checks
