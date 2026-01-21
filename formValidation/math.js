export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}

export function divide(a, b) {
	return a / b;
}
// import divide, { add, subtract as minus } from "./math.js";

// console.log(add(5, 7));
// console.log(minus(8, 10));
// console.log(divide(15, 5));

import * as math from "./math.js";

console.log(math.add(5, 7));
console.log(math.subtract(8, 10));
console.log(math.divide(15, 5));
