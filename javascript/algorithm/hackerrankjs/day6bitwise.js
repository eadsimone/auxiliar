'use strict';

const makeArray = (...values) => { return values };
console.log('Array:', makeArray(1, 2, 3, 4));
console.log('Array:', makeArray(1, 2, 3, 4, 5, 6));

const getSum = (a, b) => { return a + b };
console.log('1 + 2 =', getSum(1, 2));

const greeting = 'Hello, World.';
const capitalize = (myString) => { return myString.toUpperCase() };
console.log(greeting, '=>', capitalize(greeting));