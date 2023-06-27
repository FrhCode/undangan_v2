export function randomArrayString(length: number): string[] {
  const array: string[] = [];
  for (let i = 0; i < length; i++) {
    const stringLength = Math.floor(Math.random() * 10) + 10; // Random length for each string between 10 and 19
    const randomString = Array.from({ length: stringLength }, () =>
      String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    ).join("");
    array.push(randomString);
  }
  return array;
}
