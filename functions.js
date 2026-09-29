// Types of functions in JavaScript

// 1. Function declaration
function greet(name) {
	return `Hello, ${name}`;
}
console.log(greet("Ankit"));

// 2. Function expression
const add = function (a, b) {
	return a + b;
};
console.log(add(2, 3));

// 3. Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 4. Anonymous function
setTimeout(function () {
	console.log("This runs after one second");
}, 1000);

// 5. Immediately Invoked Function Expression (IIFE)
(function () {
	console.log("IIFE executed immediately");
})();

// 6. Callback function
function processNumber(number, callback) {
	return callback(number);
}
console.log(processNumber(5, (number) => number * 2));

// 7. Higher-order function
function createMultiplier(factor) {
	return (number) => number * factor;
}
const double = createMultiplier(2);
console.log(double(6));

// 8. Recursive function
function factorial(number) {
	if (number <= 1) return 1;
	return number * factorial(number - 1);
}
console.log(factorial(5));

// 9. Generator function
function* countToTwo() {
	yield 1;
	yield 2;
}
console.log([...countToTwo()]);

// 10. Async function
async function fetchMessage() {
	return "Data loaded";
}
fetchMessage().then(console.log);
