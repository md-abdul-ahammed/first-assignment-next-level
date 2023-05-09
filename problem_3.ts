function reverseArray<T>(...args: T[]): T[] {
  return args.reverse();
}

const strings = ["Rahim", "Karim", "Jamal"];
const reversedStrings = reverseArray(...strings);

console.log(reversedStrings);
