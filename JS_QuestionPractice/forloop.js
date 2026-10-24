// *
// **
// ***
// ****

for (let i = 1; i <= 4; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }
    console.log(stars);
}

// ****
// ***
// **
// *

for (let i = 3; i >= 1; i--) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += '*';
    }   
    console.log(stars);
}

// 1
// 23
// 456
 let numbers = 1;
for (let i = 1; i <= 3; i++) {
    let k = ''; 
    for (let j = 1; j <= i; j++) {
k=k+numbers;
numbers++;
    }
    console.log(k);
}

// 1
// 12
// 123
for (let i = 1; i <= 3; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += j;
    }
    console.log(stars);
}