export function fancyRide(l: number, fares: number[]): string {
  const rides: string[] = [
    'UberX',
    'UberXL',
    'UberPlus',
    'UberBlack',
    'UberSUV',
  ];

  for (let i = fares.length - 1; i >= 0; i--) {
    if (fares[i] * l <= 20) {
      return rides[i];
    }
  }
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
console.log(fancyRide(10, [0.3, 0.5, 0.7, 1, 1.3]));

//loop through fares
// if 30 * i < $20  push into new array
//return the last element in the array

// "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".

// You know the length l of your ride in miles and how much one mile costs for each car. Find the best car you can afford.
