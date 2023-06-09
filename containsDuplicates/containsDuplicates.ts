///Nate Answer

// export function containsDuplicates(a: number[]): boolean {
//   const noDuplicates = new Set(a);

//   return [...noDuplicates].length < a.length;
// }

export function containsDuplicates(a: number[]): boolean {
  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
console.log(containsDuplicates([1, 3, 3, 4]));
