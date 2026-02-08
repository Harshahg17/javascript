console.log("harsh welcome to javascript"); // this will make auto ny default 
process.stdout.write("welcome js "); // this for printing 
process.stdout.write("this testing the stdout write ");// this will not print in the new line but console log prints in the new line
console.warn("this for warnig console")
/*
1. Primitive Data Types (Immutable – stored by value)

These are basic, simple values.

a. Number

Used for integers and decimals.

let age = 25;
let price = 99.99;

b. String

Text data.

let name = "Harsha";

c. Boolean

True or False.

let isLoggedIn = true;

d. Undefined

Variable declared but not assigned.

let x;
console.log(x); // undefined

e. Null

Intentional empty value.

let data = null;

f. BigInt

For very large numbers.

let bigNumber = 12345678901234567890n;

g. Symbol

Unique identifier (mostly advanced usage).

let id = Symbol("id");

2. Non-Primitive (Reference) Data Types

These store complex data and are stored by reference.

a. Object
let user = {
  name: "Harsha",
  age: 22
};

b. Array
let numbers = [1, 2, 3, 4];

c. Function
function greet() {
  console.log("Hello");
}

Important Interview Point

JS has 7 Primitive Types:

Number

String

Boolean

Undefined

Null

BigInt

Symbol

Everything else = Object*/