function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    console.error('Invalid input types. Both parameters must be numbers.');
    return null; // Or handle the error appropriately
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Error message and null