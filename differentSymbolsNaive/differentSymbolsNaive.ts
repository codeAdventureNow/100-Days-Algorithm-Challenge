export function differentSymbolsNaive(s: string): number {
  const uniqueChars = new Set(s);

  return uniqueChars.size;
}

console.log(differentSymbolsNaive('cabca'));
