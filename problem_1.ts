const repeateString = (str: string, num: number = 3): void => {
  let repeatedString = "";

  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }
  console.log(repeatedString);
};

repeateString("Hero", 5);
repeateString("Hero");
