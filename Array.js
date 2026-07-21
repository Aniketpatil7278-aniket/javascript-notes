
/*
| Category     | Methods                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| Add/Remove   | `push()`, `pop()`, `shift()`, `unshift()`, `splice()`                                                |
| Search       | `indexOf()`, `lastIndexOf()`, `includes()`, `find()`, `findIndex()`, `findLast()`, `findLastIndex()` |
| Transform    | `map()`, `filter()`, `flat()`, `flatMap()`                                                           |
| Iterate      | `forEach()`, `keys()`, `values()`, `entries()`                                                       |
| Aggregate    | `reduce()`, `reduceRight()`                                                                          |
| Check        | `some()`, `every()`, `Array.isArray()`                                                               |
| Convert      | `join()`, `toString()`, `Array.from()`, `Array.of()`                                                 |
| Copy/Extract | `slice()`, `concat()`, `copyWithin()`                                                                |
| Sort/Reverse | `sort()`, `reverse()`, `toSorted()`, `toReversed()`                                                  |
| Other        | `fill()`, `at()`, `length`, `toSpliced()`, `with()`                                                  |


let arr = [10, 20, 30, 40, 50];
1. push()
Adds element(s) to the end of the array.

let arr = [10, 20];
arr.push(30);
console.log(arr);

Output
[10, 20, 30]

2. pop()
Removes the last element.

let arr = [10, 20, 30];
arr.pop();
console.log(arr);

Output
[10, 20]

3. unshift()
Adds element(s) at the beginning.

let arr = [20, 30];
arr.unshift(10);
console.log(arr);

Output
[10, 20, 30]

4. shift()
Removes the first element.

let arr = [10, 20, 30];
arr.shift();
console.log(arr);

Output
[20, 30]

5. length
Returns the number of elements.

let arr = [10, 20, 30];
console.log(arr.length);

Output
3

6. at()
Returns the element at the specified index.

let arr = [10, 20, 30];
console.log(arr.at(1));
console.log(arr.at(-1));

Output
20
30

7. concat()
Combines arrays.

let a = [1,2];
let b = [3,4];
console.log(a.concat(b));

Output
[1,2,3,4]

8. join()
Converts array into a string.
let arr = ["HTML","CSS","JS"];
console.log(arr.join("-"));

Output
HTML-CSS-JS
9. toString()
Converts array to string.

let arr = [1,2,3];
console.log(arr.toString());

Output
1,2,3
10. slice()
Returns part of an array.

let arr = [10,20,30,40];
console.log(arr.slice(1,3));

Output
[20,30]
11. splice()
Adds or removes elements.

let arr = [10,20,30,40];
arr.splice(2,1);
console.log(arr);

Output
[10,20,40]

Insert elements:

let arr = [10,20,40];
arr.splice(2,0,30);
console.log(arr);

Output
[10,20,30,40]
12. indexOf()
eturns first index.

let arr = [10,20,30];
console.log(arr.indexOf(20));

Output
1
13. lastIndexOf()
Returns last index.

let arr = [10,20,30,20];
console.log(arr.lastIndexOf(20));

Output
3
14. includes()
Checks if value exists.

let arr = [10,20,30];
console.log(arr.includes(20));

Output
true
15. reverse()
Reverses array.

let arr = [1,2,3];
arr.reverse();
console.log(arr);

Output
[3,2,1]
16. sort()
Sorts elements.

let arr = [5,2,8,1];
arr.sort((a,b)=>a-b);
console.log(arr);

Output
[1,2,5,8]
17. fill()
Fills array with a value.

let arr = [1,2,3];
arr.fill(0);
console.log(arr);

Output
[0,0,0]
18. copyWithin()
Copies part of the array.

let arr = [1,2,3,4];
arr.copyWithin(2,0);
console.log(arr);

Output
[1,2,1,2]
19. flat()
Flattens nested arrays.

let arr = [1,[2,[3]]];
console.log(arr.flat(2));

Output
[1,2,3]

20. flatMap()
Maps then flattens.

let arr = [1,2,3];
console.log(arr.flatMap(x=>[x*2]));

Output
[2,4,6]

21. forEach()
Loops through elements.

let arr = [10,20,30];
arr.forEach(value=>console.log(value));

22. map()
Creates a new transformed array.

let arr = [1,2,3];
let result = arr.map(x=>x*10);
console.log(result);

Output
[10,20,30]

23. filter()
Returns matching elements.

let arr = [10,15,20,25];
console.log(arr.filter(x=>x>15));

Output
[20,25]

24. reduce()

Reduces array to a single value.
let arr = [1,2,3,4];

console.log(arr.reduce((sum,x)=>sum+x,0));

Output

10
25. reduceRight()

Works from right to left.

let arr = [1,2,3];

console.log(arr.reduceRight((a,b)=>a-b));
26. find()

Returns the first matching element.

let arr = [10,20,30];

console.log(arr.find(x=>x>15));

Output

20
27. findIndex()

Returns the index of the first matching element.

let arr = [10,20,30];

console.log(arr.findIndex(x=>x>15));

Output

1
28. findLast()

Returns the last matching element.

let arr = [10,20,30,40];

console.log(arr.findLast(x=>x>15));

Output

40
29. findLastIndex()

Returns the index of the last matching element.

let arr = [10,20,30,40];

console.log(arr.findLastIndex(x=>x>15));

Output

3
30. some()

Returns true if at least one element matches.

let arr = [1,2,3];

console.log(arr.some(x=>x>2));

Output

true
31. every()

Returns true if all elements match.

let arr = [2,4,6];

console.log(arr.every(x=>x%2===0));

Output

true
32. keys()

Returns an iterator of indexes.

let arr = ["a","b"];

for (let key of arr.keys()) {
    console.log(key);
}
33. values()

Returns an iterator of values.

let arr = ["a","b"];

for (let value of arr.values()) {
    console.log(value);
}
34. entries()

Returns an iterator of index-value pairs.

let arr = ["a","b"];

for (let [index,value] of arr.entries()) {
    console.log(index,value);
}
35. Array.isArray()

Checks whether a value is an array.

let arr = [1,2];

console.log(Array.isArray(arr));

Output

true
36. Array.from()

Creates an array from an iterable or array-like object.

console.log(Array.from("Hello"));

Output

['H', 'e', 'l', 'l', 'o']
37. Array.of()

Creates an array from arguments.

console.log(Array.of(1,2,3));

Output

[1,2,3]
38. toReversed() (ES2023)

Returns a reversed copy without modifying the original array.

let arr = [1,2,3];

console.log(arr.toReversed());
console.log(arr);

Output

[3,2,1]
[1,2,3]
39. toSorted() (ES2023)

Returns a sorted copy without modifying the original array.

let arr = [3,1,2];

console.log(arr.toSorted());

Output

[1,2,3]
40. toSpliced() (ES2023)

Returns a modified copy without changing the original array.

let arr = [1,2,3];

console.log(arr.toSpliced(1,1,10));

Output

[1,10,3]
41. with() (ES2023)

Returns a copy with one element replaced.

let arr = [10,20,30];

console.log(arr.with(1,99));

Output

[10,99,30]
*/