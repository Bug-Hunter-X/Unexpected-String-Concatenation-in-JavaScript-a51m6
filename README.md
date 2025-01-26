# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error caused by the language's loose type system and the behavior of the '+' operator.  When adding a number and a string in JavaScript, the '+' operator performs string concatenation instead of numerical addition, leading to unexpected results.

The `bug.js` file shows an example where adding a number and a string produces an unexpected result. The `bugSolution.js` file provides a solution to mitigate this issue.

This is a classic example of why careful type checking and consideration of data types is crucial in JavaScript development.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript runtime environment (e.g., Node.js).
4. Observe the unexpected output.

## Solution

Refer to `bugSolution.js` for the solution which includes explicit type checking to address the unexpected behavior.