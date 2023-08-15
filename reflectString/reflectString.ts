export function reflectString(inputString: string): string {
  const chars: string[] = inputString.split('');
  const reflectionLetters = {
    a: 'z',
    b: 'y',
    c: 'x',
    d: 'w',
    e: 'v',
    f: 'u',
    g: 't',
    h: 's',
    i: 'r',
    j: 'q',
    k: 'p',
    l: 'o',
    m: 'n',
    n: 'm',
    o: 'l',
    p: 'k',
    q: 'j',
    r: 'i',
    s: 'h',
    t: 'g',
    u: 'f',
    v: 'e',
    w: 'd',
    x: 'c',
    y: 'b',
    z: 'a',
  };

  let reflectedWords = '';

  chars.forEach((char) => {
    reflectedWords += reflectionLetters[char];
  });

  return reflectedWords;
}

console.log(reflectString('name'));

//a = z   a=   str
