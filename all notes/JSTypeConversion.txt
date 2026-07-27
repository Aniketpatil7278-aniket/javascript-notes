/*
JavaScript Type Conversion 
Type Conversion is the process of converting a value from one data type to another.

There are 2 types of type conversion:

Implicit Type Conversion (Type Coercion) – Done automatically by JavaScript.
Explicit Type Conversion (Type Casting) – Done manually by the programmer.


1. Implicit Type Conversion (Type Coercion)
JavaScript automatically converts one data type into another when needed.

Example 1: String + Number

let result = "10" + 5;
console.log(result);
console.log(typeof result);

Output
105
string

Explanation:
+ with a string performs string concatenation.

Example 2: String - Number
console.log("10" - 5);

Output
5
Explanation:
- converts "10" into the number 10.

Example 3: Multiplication
console.log("10" * 5);

Output
50

Example 4: Division
console.log("20" / 2);

Output
10

Example 5: Boolean to Number
console.log(true + 1);
console.log(false + 1);

Output
2
1

Explanation:
true → 1
false → 0

Example 6: Null
console.log(null + 5);

Output
5

Explanation:
null becomes 0.

Example 7: Undefined
console.log(undefined + 5);

Output
NaN

=============================================================================
2. Explicit Type Conversion (Type Casting)
The programmer converts the type manually.

Number()
Converts a value to a number.

console.log(Number("100"));

Output
100

console.log(Number("100abc"));
Output
NaN

console.log(Number(true));
console.log(Number(false));

Output
1
0

console.log(Number(null));

Output
0

console.log(Number(undefined));

Output

NaN
String()

Converts a value to a string.

console.log(String(100));

Output

"100"
console.log(String(true));

Output

"true"
console.log(String(null));

Output

"null"
Boolean()

Converts a value to a boolean.

False values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

Output

false
false
false
false
false
True values
console.log(Boolean("Hello"));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));

Output

true
true
true
true
parseInt()

Converts a string to an integer.

console.log(parseInt("100"));

Output

100
console.log(parseInt("100.99"));

Output

100
console.log(parseInt("100px"));

Output

100
parseFloat()

Converts a string to a floating-point number.

console.log(parseFloat("100.99"));

Output

100.99
console.log(parseFloat("100.99px"));

Output

100.99
Unary Plus (+)

Converts a value to a number.

let num = +"100";

console.log(num);

Output

100
console.log(+"10.5");

Output

10.5
toString()

Converts numbers or booleans to strings.

let num = 100;

console.log(num.toString());

Output

"100"
JSON.stringify()

Converts an object into a JSON string.

let user = {
    name: "Aniket",
    age: 22
};

console.log(JSON.stringify(user));

Output

{"name":"Aniket","age":22}
JSON.parse()

Converts a JSON string back into an object.

let json = '{"name":"Aniket","age":22}';

console.log(JSON.parse(json));

Output

{ name: "Aniket", age: 22 }
Truthy and Falsy Values
Falsy Values (Only 8)
false
0
-0
0n
""
null
undefined
NaN

Everything else is truthy.

Example:

console.log(Boolean("JavaScript"));
console.log(Boolean([]));
console.log(Boolean({}));

Output

true
true
true



| Value       | Number() | String()            | Boolean() |
| ----------- | -------- | ------------------- | --------- |
| `"123"`     | `123`    | `"123"`             | `true`    |
| `"abc"`     | `NaN`    | `"abc"`             | `true`    |
| `true`      | `1`      | `"true"`            | `true`    |
| `false`     | `0`      | `"false"`           | `false`   |
| `null`      | `0`      | `"null"`            | `false`   |
| `undefined` | `NaN`    | `"undefined"`       | `false`   |
| `0`         | `0`      | `"0"`               | `false`   |
| `1`         | `1`      | `"1"`               | `true`    |
| `""`        | `0`      | `""`                | `false`   |
| `[]`        | `0`      | `""`                | `true`    |
| `[1,2]`     | `NaN`    | `"1,2"`             | `true`    |
| `{}`        | `NaN`    | `"[object Object]"` | `true`    |

*/