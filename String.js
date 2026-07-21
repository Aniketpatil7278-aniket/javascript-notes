/*

| Method                   | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| `length`                 | Returns string length                        |
| `charAt()`               | Character at index                           |
| `at()`                   | Character at index (supports negative index) |
| `charCodeAt()`           | Unicode value                                |
| `codePointAt()`          | Unicode code point                           |
| `concat()`               | Join strings                                 |
| `includes()`             | Check substring                              |
| `startsWith()`           | Starts with text                             |
| `endsWith()`             | Ends with text                               |
| `indexOf()`              | First occurrence                             |
| `lastIndexOf()`          | Last occurrence                              |
| `search()`               | Search substring                             |
| `match()`                | Find matches                                 |
| `matchAll()`             | Find all matches                             |
| `replace()`              | Replace first match                          |
| `replaceAll()`           | Replace all matches                          |
| `slice()`                | Extract substring                            |
| `substring()`            | Extract substring                            |
| `substr()`               | Extract by length (deprecated)               |
| `split()`                | Convert to array                             |
| `toUpperCase()`          | Uppercase                                    |
| `toLowerCase()`          | Lowercase                                    |
| `trim()`                 | Remove spaces from both ends                 |
| `trimStart()`            | Remove leading spaces                        |
| `trimEnd()`              | Remove trailing spaces                       |
| `padStart()`             | Pad at beginning                             |
| `padEnd()`               | Pad at end                                   |
| `repeat()`               | Repeat string                                |
| `valueOf()`              | Primitive value                              |
| `toString()`             | String representation                        |
| `localeCompare()`        | Compare strings                              |
| `normalize()`            | Normalize Unicode                            |
| `String.raw()`           | Raw template string                          |
| `String.fromCharCode()`  | Create string from character codes           |
| `String.fromCodePoint()` | Create string from code points               |


let str = "JavaScript";
1. length

Returns the length of the string.

let str = "JavaScript";

console.log(str.length);

Output

10
2. charAt()

Returns the character at the specified index.

let str = "JavaScript";

console.log(str.charAt(4));

Output

S
3. at()

Returns the character at the specified index. Supports negative indexes.

let str = "JavaScript";

console.log(str.at(0));
console.log(str.at(-1));

Output

J
t
4. charCodeAt()

Returns the Unicode value of a character.

let str = "JavaScript";

console.log(str.charCodeAt(0));

Output

74
5. concat()

Joins two or more strings.

let a = "Hello";
let b = "World";

console.log(a.concat(" ", b));

Output

Hello World
6. includes()

Checks if a string contains a value.

let str = "JavaScript";

console.log(str.includes("Script"));

Output

true
7. startsWith()

Checks whether a string starts with specific text.

let str = "JavaScript";

console.log(str.startsWith("Java"));

Output

true
8. endsWith()

Checks whether a string ends with specific text.

let str = "JavaScript";

console.log(str.endsWith("Script"));

Output

true
9. indexOf()

Returns the first occurrence index.

let str = "JavaScript";

console.log(str.indexOf("a"));

Output

1
10. lastIndexOf()

Returns the last occurrence index.

let str = "JavaScript";

console.log(str.lastIndexOf("a"));

Output

3
11. search()

Searches for a value.

let str = "JavaScript";

console.log(str.search("Script"));

Output

4
12. match()

Returns matching values.

let str = "I love Java Java";

console.log(str.match(/Java/g));

Output

["Java", "Java"]
13. matchAll()

Returns all matches as an iterator.

let str = "Java Java";

for (let item of str.matchAll(/Java/g)) {
    console.log(item[0]);
}

Output

Java
Java
14. replace()

Replaces the first occurrence.

let str = "Hello Java";

console.log(str.replace("Java", "JS"));

Output

Hello JS
15. replaceAll()

Replaces all occurrences.

let str = "Java Java Java";

console.log(str.replaceAll("Java", "JS"));

Output

JS JS JS
16. slice()

Extracts part of a string.

let str = "JavaScript";

console.log(str.slice(0,4));

Output

Java
17. substring()

Returns part of a string.

let str = "JavaScript";

console.log(str.substring(4,10));

Output

Script
18. substr() (Deprecated)
let str = "JavaScript";

console.log(str.substr(4,6));

Output

Script
19. split()

Converts a string into an array.

let str = "HTML,CSS,JS";

console.log(str.split(","));

Output

["HTML","CSS","JS"]
20. toUpperCase()

Converts to uppercase.

let str = "javascript";

console.log(str.toUpperCase());

Output

JAVASCRIPT
21. toLowerCase()

Converts to lowercase.

let str = "JAVASCRIPT";

console.log(str.toLowerCase());

Output

javascript
22. trim()

Removes spaces from both ends.

let str = "  Hello  ";

console.log(str.trim());

Output

Hello
23. trimStart()

Removes spaces from the beginning.

let str = "   Hello";

console.log(str.trimStart());
24. trimEnd()

Removes spaces from the end.

let str = "Hello   ";

console.log(str.trimEnd());
25. padStart()

Pads the beginning.

let str = "5";

console.log(str.padStart(3,"0"));

Output

005
26. padEnd()

Pads the end.

let str = "5";

console.log(str.padEnd(3,"0"));

Output

500
27. repeat()

Repeats the string.

let str = "Hi ";

console.log(str.repeat(3));

Output

Hi Hi Hi
28. valueOf()

Returns the primitive value.

let str = new String("Hello");

console.log(str.valueOf());

Output

Hello
29. toString()

Returns the string representation.

let str = new String("Java");

console.log(str.toString());

Output

Java
30. localeCompare()

Compares two strings alphabetically.

console.log("apple".localeCompare("banana"));

Output

-1
31. normalize()

Normalizes Unicode characters.

let str = "é";

console.log(str.normalize());
32. codePointAt()

Returns the Unicode code point.

let str = "A";

console.log(str.codePointAt(0));

Output

65
33. String.raw()

Returns a raw string (static method).

console.log(String.raw`Hello\nWorld`);

Output

Hello\nWorld
34. String.fromCharCode() (Static)

Creates a string from Unicode values.

console.log(String.fromCharCode(65,66,67));

Output

ABC
35. String.fromCodePoint() (Static)

Creates a string from Unicode code points.

console.log(String.fromCodePoint(9731));

Output

☃
*/