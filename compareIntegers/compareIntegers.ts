//my solution
// export function compareIntegers(a: string, b: string): string {
//   if (parseInt(a) === parseInt(b)) {
//     return 'equals';
//   }
//   if (parseInt(a) < parseInt(b)) {
//     return 'less';
//   }
//   if (parseInt(a) > parseInt(b)) {
//     return 'greater';
//   }
// }

//Dylan solution

export function compareIntegers(a: string, b: string): string {
  return parseInt(a) > parseInt(b)
    ? 'greater'
    : parseInt(a) < parseInt(b)
    ? 'less'
    : 'equal';
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));

//parse integers
// if a parse > b parse return greater
// if a parse < b parse return less
// if a parse === b parse return equal
