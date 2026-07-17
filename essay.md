# Part 2: Essay Questions

## 1. What is the difference between forEach and for...of? When would you use each?

`forEach` is an array method that takes a callback function and executes it once for every element. It cannot be stopped early (`break`/`continue` don't work inside it, and `return` only exits the current callback iteration, not the loop), and it only works on arrays (and array-likes with a `forEach` method).

`for...of` is a language construct that iterates over any iterable (arrays, strings, Maps, Sets, generators, NodeLists, etc.) and supports `break`, `continue`, and `return`.

Use `forEach` for simple, full-array side-effect iteration where you don't need to exit early. Use `for...of` when you need to iterate over non-array iterables, or when you need the ability to `break`/`continue` out of the loop.

```javascript
const arr = [1, 2, 3];

arr.forEach((num) => {
  if (num === 2) return; // only skips this callback call, loop continues
  console.log(num);
});

for (const num of arr) {
  if (num === 2) break; // stops the loop entirely
  console.log(num);
}
```

## 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

Hoisting is JavaScript's behavior of moving variable and function *declarations* to the top of their scope during the compile phase, before the code executes. `var` declarations and function declarations are hoisted and initialized (`var` with `undefined`, functions with the whole function body).

```javascript
console.log(x); // undefined (declaration hoisted, not the assignment)
var x = 5;

sayHi(); // "Hi!" (function declarations are fully hoisted)
function sayHi() {
  console.log("Hi!");
}
```

`let` and `const` are also hoisted, but they are not initialized. The span between the start of the block and the line where they're declared is called the Temporal Dead Zone (TDZ) — referencing the variable in that zone throws a `ReferenceError`.

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

## 3. What are the main differences between == and ===?

`===` (strict equality) compares both value and type, with no type conversion. `==` (loose equality) converts the operands to a common type before comparing, which can lead to surprising results.

```javascript
0 == "0";     // true  (string coerced to number)
0 === "0";    // false (different types)

null == undefined;  // true
null === undefined; // false

"" == 0;   // true  (both coerced to 0)
"" === 0;  // false
```

`===` is generally preferred because it's predictable and avoids bugs caused by implicit type coercion.

## 4. Explain how try-catch works and why it is important in async operations.

`try-catch` lets you run code that might throw an error inside the `try` block, and if an error is thrown, control jumps to the `catch` block instead of crashing the program. An optional `finally` block runs regardless of whether an error occurred.

```javascript
try {
  JSON.parse("{ invalid json");
} catch (error) {
  console.log("Failed to parse:", error.message);
} finally {
  console.log("Done attempting to parse.");
}
```

In async operations, errors (a failed network request, a rejected promise) don't happen synchronously, so a plain `try-catch` around a promise call won't catch them unless you use `async/await`. With `async/await`, `try-catch` works naturally because `await` pauses execution until the promise settles, and a rejection is thrown as a catchable error:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request failed:", error.message);
  }
}
```

Without this, unhandled promise rejections can silently fail or crash the process, so try-catch is essential for gracefully handling network failures, timeouts, and other async errors.

## 5. What's the difference between type conversion and coercion? Provide examples of each.

Type conversion (explicit conversion) is when the developer deliberately converts a value from one type to another using a function or operator.

```javascript
Number("123");   // 123
String(123);      // "123"
Boolean(0);       // false
```

Type coercion (implicit conversion) is when JavaScript automatically converts a value's type behind the scenes, usually as part of an operation involving mismatched types.

```javascript
"5" + 1;     // "51"  (number coerced to string, then concatenated)
"5" - 1;     // 4     (string coerced to number, then subtracted)
if ("0") {}  // truthy, "0" is a non-empty string, no coercion issue here
if (0) {}    // falsy, 0 is coerced to false in a boolean context
```

The key difference is intent and visibility: conversion is explicit and predictable, while coercion happens implicitly and can introduce subtle bugs if you're not aware of JavaScript's coercion rules.
