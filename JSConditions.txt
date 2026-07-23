console.log(
  "---------------------JavaScript Conditional Statements------------------------",
);

console.log("-----------------JavaScript if-----------------");
//Use the JavaScript if statement to execute a block of code when a condition is true.
// Syntax;
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

let hour = 20;
if (hour < 18) {
  console.log("Good day");
} else {
  console.log("NOt Good");
}

console.log("-------------------Nested if-----------------");
// Nested if
// You can use an if statement inside another if statement:
let age = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}

console.log("---------------------else if Statement-------------------");
//Use the else if statement to specify a new condition if the first is false.

//Syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log("-----------------Switch Statement---------------------");
// Switch Control Flow
// Based on a condition, switch selects one or more code blocks to be executed.

// switch executes the code blocks that matches an expression.

// switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

Syntax;
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("-----------------------ja Loop----------------");
console.log("------------------------for loop------------------");

// The for loop is used when you know in advance how many times the loop should run.
// Syntax
for (initialization; condition; increment / decrement) {
  // code
}
// Example 1
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Output;

1;
2;
3;
4;
5;

console.log("--------------------The While Loop-------------------------");

// The while loop executes as long as the condition is true.

// Syntax
while (condition) {
  // code
}
// Example
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

console.log("------------------------do while loop0--------------------");
// The Do While Loop
// The do while loop is a variant of the while loop.

// The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// Syntax
do {
  // code block to be executed
} while (condition);
//The do...while loop executes the block at least once, even if the condition is false.

//Syntax
do {
  // code
} while (condition);
//Example
let i = 1;

do {
  console.log(i);
  i++;
} while (i < 10);

console.log("---------------for...of Loop--------------");

// The for...of loop is used to iterate over iterable objects, such as arrays, strings, maps, and sets.

Syntax;
for (let variable of iterable) {
  // code
}

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

console.log("-------------------for...in loop-----------------");

//The for...in loop is used to iterate over the keys (property names) of an object.

//Syntax
for (let key in object) {
    // code
}
//Example: Object
let student = {
    name: "Aniket",
    age: 22,
    city: "Pune"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}