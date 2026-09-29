let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length);// 3
console.log(fruits[0]);// apple
fruits.push('dates');// Adds 'dates' to the end of the array
console.log(fruits);// ['apple', 'banana', 'cherry', 'dates']
fruits.pop();// Removes the last element ('dates') from the array
console.log(fruits);
fruits.unshift('apricot');// Adds 'apricot' to the beginning of the array
console.log(fruits);// ['apricot', 'apple', 'banana', 'cherry']
fruits.shift();// Removes the first element ('apricot') from the array
console.log(fruits);// ['apple', 'banana', 'cherry']
fruits.includes('banana');// true   
fruits.reverse();// Reverses the order of the array 
console.log(fruits);// ['cherry', 'banana', 'apple']
fruits.push('dates', 'elderberry');// Adds multiple elements to the end of the array
console.log(fruits);// ['cherry', 'banana', 'apple', 'dates', 'elderberry']
fruits.slice(1, 4);// Returns a shallow copy of a portion of the array (from index 1 to 3)
console.log(fruits.slice(1, 4));// ['banana', 'apple', 'dates']
fruits.splice(2, 1, 'blueberry', 'cantaloupe');// Removes 1 element at index 2 and adds 'blueberry' and 'cantaloupe'
console.log(fruits);// ['cherry', 'banana', 'blueberry', 'cantaloupe', 'dates', 'elderberry']   
fruits.join(', ');// Joins all elements of the array into a string, separated by ', '
console.log(fruits.join(', '));// cherry, banana, blueberry, cantaloupe, dates, elderberry  
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num); 
console.log(squaredNumbers);// [1, 4, 9, 16, 25]    

