/*
-------------------1. Arithmetic Operators---------------
| Operator | Description         | Example  |
| -------- | ------------------- | -------- |
| `+`      | Addition            | `10 + 5` |
| `-`      | Subtraction         | `10 - 5` |
| `*`      | Multiplication      | `10 * 5` |
| `/`      | Division            | `10 / 5` |
| `%`      | Modulus (Remainder) | `10 % 3` |
| `**`     | Exponentiation      | `2 ** 3` |

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333
console.log(a % b); // 1
console.log(a ** b); // 1000

-------------------------2. Assignment Operators----------------------------

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| `=`      | `x = 10`  | Assign value |
| `+=`     | `x += 5`  | `x = x + 5`  |
| `-=`     | `x -= 5`  | `x = x - 5`  |
| `*=`     | `x *= 5`  | `x = x * 5`  |
| `/=`     | `x /= 5`  | `x = x / 5`  |
| `%=`     | `x %= 5`  | `x = x % 5`  |
| `**=`    | `x **= 2` | `x = x ** 2` |

let x = 10;

x += 5;
console.log(x); // 15

x *= 2;
console.log(x); // 30


-----------------------Comparison (Relational) Operators-----------------------
| Operator | Description                 |
| -------- | --------------------------- |
| `==`     | Equal (value only)          |
| `===`    | Strict Equal (value & type) |
| `!=`     | Not Equal                   |
| `!==`    | Strict Not Equal            |
| `>`      | Greater Than                |
| `<`      | Less Than                   |
| `>=`     | Greater Than or Equal       |
| `<=`     | Less Than or Equal          |

console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(10 != 20);     // true
console.log(10 !== "10");  // true
console.log(20 > 10);      // true
console.log(20 < 10);      // false


--------------------------Logical Operators---------------------------
| Operator | Description |   |    |
| -------- | ----------- | - | -- |
| `&&`     | AND         |   |    |
| ` ||     | OR |
| `!`      | NOT         |   |    |

let age = 20;

console.log(age > 18 && age < 30); // true
console.log(age < 18 || age > 15); // true
console.log(!(age > 18));          // false

7. Ternary Operator
Shortcut for if...else.

Syntax
condition ? value1 : value2;

Example
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


13. Spread Operator (...)
Expands an iterable into individual elements.

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2);

Output
[1, 2, 3, 4, 5]


Rest Operator (...)
Collects multiple values into an array.

function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30);
*/