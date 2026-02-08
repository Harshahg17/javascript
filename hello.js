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
// this about about symbol datatype in javascript
let a =Symbol("test") // this is different 
let b =Symbol("Test") // this also a different ok
console.log(a==b) // ans is false
/* What are Non-Primitive (Reference) Data Types in JavaScript?

Non-primitive = Complex data that can store multiple values together.

They are stored by reference (not by value).

Main Non-Primitive Types

Object

Array

Function
(In JavaScript, arrays and functions are actually special kinds of objects.)

1. Object

An object stores data in key–value pairs.

let user = {
  name: "Harsha",
  age: 22
};

console.log(user.name);


Think:
Object = One container holding many related values

Example real life: A “student record” with name, age, marks.

2. Array

An array stores multiple values in order (list).

let numbers = [10, 20, 30];

console.log(numbers[0]); // 10


Think:
Array = List of items

Example real life: List of marks.

3. Function

A function is also treated as an object in JS.

function greet() {
  console.log("Hello");
}

greet();


Think:
Function = Reusable block of code

Very Important Concept (Interview Level but Easy)
Stored by Reference
let obj1 = { name: "Harsha" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);


Output:

Rahul


Why?

Because both point to same memory location.

Primitive vs Non-Primitive (Easy Table)
Primitive	Non-Primitive
Stores single value	Stores multiple values
Stored by value	Stored by reference
Example: number, string	Example: object, array
One Powerful Line to Remember

Non-primitive data types are objects that store multiple values and are passed by reference. */