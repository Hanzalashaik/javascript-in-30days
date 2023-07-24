/*
There are two types of datatypes 

1)primitive 
2)non primitive

  primitive datatype
1.String        Ex:"hanzala"
2.Number        Ex:23151
3.Boolean       Ex:True/False
4.undefined     Ex:const a;
5.null          Ex:let a = null;
6.BigInt        Ex:123456765432123456
7.Symbol        Ex:let value = Symbol('hello');

  non-primitive datatypes
  1.Array
  2.Object 

  */

  //String

const name1 = 'ram';
const name2 = "hari";
const result = `The names are ${name1} and ${name2}`;

//Number

const number1 = 3;
const number2 = 3.433;
const number3 = 3e5 // 3 * 10^5

//BigInt 

const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;


// //const result2 = value2 + 1; // Error! BitInt and number cannot be added
// console.log(result2);

//Boolean

const dataChecked = true;
const valueCounted = false;

//Undefined

let name3;
console.log(name3); // undefined

//Null

const number = null;
console.log(typeof number); //object error in javascript

