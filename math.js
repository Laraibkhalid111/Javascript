const num = 123.8966
//console.log(num.toPrecision(3)) // 124
// IMp for interview 
// toPrecision(n) → keeps n significant digits (starts counting from the first non-zero digit).
// Example: 123.8966.toPrecision(3) → "124" (123 rounded because the next digit is 8).

const hunderds = 100000000
//console.log(hunderds.toLocaleString()) // 100,000,000 american standard
//console.log(hunderds.toLocaleString('en-IN')) // 100.000.000 german standard

//====maths=====
//library for mathematical operations

console.log(Math); 
console.log(Math.PI); // 3.141592653589793 value of pi
console.log(Math.abs(-4)); // 4 absolute value converts -ive to +ive 
console.log(Math.round(4.7)); // 5 roundoff
console.log(Math.floor(4.7)); // 4 floor value means lower value 
console.log(Math.ceil(4.7)); // 5 ceil value means top value 
console.log(Math.min(4, 7, 1, 9, 0)); // 0 minimum value
console.log(Math.max(4, 7, 1, 9, 0)); // 9 maximum value

console.log(Math.random()); // 0.123456789 random number between 0 and 1
console.log((Math.random() * 10)+1); // 0.123456789 random number between 0 and 10
//  we can use it in games to generate random numbers