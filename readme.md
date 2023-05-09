### 1) What is TypeScript, and how is it different from JavaScript?

TypeScript is a super version of JavaScript because it have extra features that JavaScript doesn't have. TypeScript has features like interfaces and classes, which make it easier to organize and structure code.

TypeScript needs to be compiled before running in a browser, while JavaScript can be run directly.

### 2) What is TypeScript, and how is it different from JavaScript?

In TypeScript an interface is like a blueprint for an object. It says what the object should look like and what kind of stuff it should have in it. But a type is just a general way to talk about any kind of thing in TypeScript. So, an interface is for defining what an object should be like, and a type is for talking about all kinds of things in TypeScript.

### 3) What is the difference between an "unknown" and "any" type in TypeScript?

In TypeScript "unknown" is a safer and more specific type than "any" because it requires type-checking before usage, while "any" allows any value to be assigned without type-checking. So, it's better to use "unknown" when the type of a value is uncertain and needs to be checked first.

### 4) What is the "as" keyword used for in TypeScript?

In TypeScript "as" is used to tell the compiler that a value is a specific type, even if the compiler is not sure. It helps to override the default type checking of the compiler.

### 5) Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

In TypeScript "type guards" that help make sure code is correct. Type guards check the type of a variable or parameter within a certain part of code. We can use the "in" operator to check if a property exists on an object or the "typeof" operator to check the type of a variable or parameter. This helps us to catch errors before code runs and making code more reliable.
