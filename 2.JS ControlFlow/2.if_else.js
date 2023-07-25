// if statements

let b = 1;
if ((b = 1)) {
  console.log("this is if statement");
}

//if ...else statements

let a = 10;

if (a > 11) {
  console.log("hello");
} else {
  console.log("hii"); //hii
}

//if...else if statement

let x = 18;

if (x == 19) {
  console.log("this is if ");
} else if (x < 19) {
  console.log("This is else if");
} else {
  console.log("This is else");
}

//Nested if...else Statement

const number = prompt("Enter a number: ");

if (number >= 0) {
  if (number == 0) {
    console.log("You entered number 0");
  } else {
    console.log("You entered a positive number");
  }
} else {
  console.log("You entered a negative number");
}

