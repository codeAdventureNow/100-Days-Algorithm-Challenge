export function companyBotStrategy(trainingData: number[][]): number {
  let time = 0;
  let correctness = 0;

  trainingData.forEach((data: number[]) => {
    if ([data[1] === 1]) {
      time += data[0];
      correctness += data[1];
    }
  });

  return time / correctness || 0;
}

console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);

//

//   [time, correct]
// 1 is correct, 0 no answer, -1 wrong answer

// the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. Given all of the training information for a specific task, calculate the bot's answer time.

//in short get the average of the correct answers
