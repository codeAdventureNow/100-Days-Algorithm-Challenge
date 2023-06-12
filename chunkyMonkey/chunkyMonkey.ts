export function chunkyMonkey(arr: any[], size: number): any[][] {
  const nestedArray = [];
  //will set the start point of our slices as we iterate through the original array
  let count = 0;

  while (count < arr.length) {
    nestedArray.push(arr.slice(count, (count += size)));
  }
  return nestedArray;
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

//iteration 1 count 0 arr.length = 4
// push 0,2   then count becomes 2

// Push 2,4      because count += size is now 4
