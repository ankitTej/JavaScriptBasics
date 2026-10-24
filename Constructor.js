function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


let p1 = new person("Saloni ", 30);
p1.greet(); // Output: Hello, my name is Saloni  and I am 30 years old.   

let p2 = new person("Sarvesh", 25);
p2.greet(); // Output: Hello, my name is Sarvesh and I am 25 years old. 