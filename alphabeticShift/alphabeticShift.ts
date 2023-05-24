export function alphabeticShift(inputString: string): string {
  const alphabet: object = {
    a: 'b',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'h',
    k: 'l',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    x: 'y',
    y: 'z',
    z: 'a',
  };

  let inputShifted = inputString.split('');

  for (let i = 0; i < inputShifted.length; i++) {
    console.log(inputShifted[i]);
    inputShifted[i] = alphabet[inputShifted[i]];
  }

  return inputShifted.join('');
}

console.log(alphabeticShift('crazy'));
