// console.log(a);
// let a=5;// Showing reference error because variable a is not defined before its declaration. This is due to the concept of hoisting in JavaScript, where variable declarations are moved to the top of their scope during compilation, but their initializations are not. Therefore, when we try to log the value of a before it is assigned a value, we get a reference error.

// console.log(b);
// var b=6; // Var is hoisted, so it is accessible before its declaration, but its value is undefined until the line where it is assigned a value. Therefore, when we log the value of b before its assignment, we get undefined.

function add(p,q){
    return p+q;
}   
add(5,6); // Functions declarations are hoisted, so we can call the function before its declaration. Therefore, when we call the add function before its declaration, it works as expected and returns the sum of 5 and 6, which is 11.  
console.log(add(5,6)); // This will log 11 to the console.  