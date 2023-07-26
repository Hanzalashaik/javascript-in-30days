// Syntax

// while (condition) {
//     // body of loop
// }

// Example 1
const prompt=require("prompt-sync")({sigint:true});

let sum = 0;

let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {
 
    sum += number;

    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);