const logString = (param: unknown): void => {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.error("parameter is not a string");
  }
};

logString("Hello, Next Level");
logString(123);
