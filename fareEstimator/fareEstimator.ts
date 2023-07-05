// export function fareEstimator(
//   ride_time: number,
//   ride_distance: number,
//   cost_per_minute: number[],
//   cost_per_mile: number[]
// ): number[] {
//   const totalEstimator = [];

//   for (let i = 0; i < cost_per_mile.length; i++) {
//     totalEstimator.push(
//       (
//         ride_time * cost_per_minute[i] +
//         ride_distance * cost_per_mile[i]
//       ).toFixed(2)
//     );
//   }

//   return totalEstimator.map((element) => Number(element));
// }

export function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const totalEstimator = [];
}
console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

// ride_time = 30,
// ride_distance = 7,
// cost_per_minute = [0.2, 0.35, 0.4, 0.45] and
// cost_per_mile = [1.1, 1.8, 2.3, 3.5], the output should be
// fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38].

// Since:

// 30 * 0.2 + 7 * 1.1 = 6 + 7.7 = 13.7
// 30 * 0.35 + 7 * 1.8 = 10.5 + 12.6 = 23.1
// 30 * 0.4 + 7 * 2.3 = 12 + 16.1 = 28.1
// 30 * 0.45 + 7 * 3.5 = 13.5 + 24.5 = 38
