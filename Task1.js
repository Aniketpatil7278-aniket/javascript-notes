//data types

//1. Primitive datatypes
console.log("------------------------primitive datatype ---------------");
//1. Number
console.log("------------------Number---------------");
let a = 10;
let b = 10.2020252152;
console.log(a);              //10
console.log(b);             //10.2020252152
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log(typeof NaN);       //number

//2.String
console.log("-----------String-----------");
const fname = "aniket";
const mname = "babaso";
const lname = `patil`;
console.log(typeof lname);
console.log(fname, mname, lname);

//3.Boolean
console.log("-----------Boolean----------");
let isLoggedIn = true;
let isAdmin = false;
console.log(typeof isLoggedIn);
console.log(isLoggedIn);
console.log(isAdmin);

let age = 20;
console.log(age >= 18);

//4.undefine
console.log("-------undefine ------------------");
let un;
console.log(un);
console.log(typeof un);

//5. Null
console.log("-----------Null-----------");
let n = null;
console.log(n);
console.log(typeof n); //output is object

//6.Bigint
console.log("-----------Bigint-----------");
const big = 46446546464154654165456416546541654n;
console.log(big);
console.log(typeof big);

//7.Symbol
console.log("-----------Symbol-----------");

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);
console.log(typeof id1);

//Non-Primitive (Reference) Data Types
console.log("==============Non-Primitive (Reference) Data Types============");
//1. object
// 2. array
// 3. function

console.log("-------------object-------------");

const demo1 = { name: "aniket", mname: "babaso", lname: "patil" };

//empty object
const person = {};
person.name = "aniket";
person.age = 25;
console.log(person);

//useing new  keuword
const demo2 = new Object({ fname: "aniker", lname: "patil" });
console.log(demo2);

// Object Properties
// You can access object properties in two ways:

// 1. Dot notation Dot Notation
// objectName.propertyName
// person.firstName;
// 2. Bracket notation
// objectName["propertyName"];
// person["firstName"];

console.log("You can access object properties in two ways:");
console.log("--------------1. Dot notation------------");
const demo11 = { name: "aniket", mname: "babaso", lname: "patil" };

console.log(demo11.name);
console.log(demo11.lname);

console.log("----------Bracket notation-------------");
console.log(demo11["name"]);
console.log(demo11["lname"]);

console.log("---------Changing Properties---------");
demo11.name = "om";
console.log("after the chnage the values: ", demo11);

console.log("---------------Adding New Properties-------------------------");
demo11.age = 22;
console.log("after the adding the property: ", demo11);

console.log("-----Deleting Properties---------");
delete demo11.age;
delete demo11["lname"];
console.log("delet the property: ", demo11);

console.log("------Check if a Property Exists----------");
//Use the in operator to check if a property exists in an object:
let result = "name" in demo11;
console.log(result);

console.log("--------------Nested Objects-----------");

const myobj = {
  name: "aniket",
  lname: "patil",
  age: 24,
  address: { city: "mkld", state: "karntraka", country: "ind" },
  marks: {
    SSLC: { math: 80, sci: 55, ss: 60 },
    PUC: { phy: 80, bio: 80, cs: 95 },
    BCA: { java: 50, mysql: 80, python: 80 },
    MCA: { react: 80 },
  },
};

console.log(myobj);

console.log("my name :", myobj.name);
console.log("my address :", myobj.address);
console.log("city: ", myobj.address.city);
console.log("country :", myobj.address["country"]);
console.log("state :", myobj["address"]["state"]);
console.log("marks :", myobj.marks);
console.log("only java marks: ", myobj.marks.BCA.java);
console.log("only react marks :", myobj["marks"]["MCA"]["react"]);

//useing the for loop accessing the objects
console.log("-----------useing the for loop accessing the objects-----------");

const myinfo = { fname: "aniket", mname: "babaso", lname: "patil", age: 24 };

let text = "";
for (let x in myinfo) {
  text = text + " " + myinfo[x];
}
console.log(text);
console.log("---------------tackes all values -----------");

let myarray = Object.values(myinfo);
console.log(myarray.toString());

console.log("-------Using JSON.stringify()---------");
console.log(JSON.stringify(myinfo));

//Array
console.log("-------------------------Array--------------------");
//An Array is an object type designed for storing data collections.
//const array_name = [item1, item2, ...];

const arr1 = [1, 2, 3, 1, 4, 5];
const arr = [];
arr[0] = "aniket";
arr[1] = "babaso";
arr[2] = "patil";
arr[3] = "om";

console.log(arr1);
console.log(arr);
//
//useing the new keyword
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

console.log("----------Accessing Array Elements----------");
console.log(cars[0]);

console.log("-------Changing an Array Element-----------");
cars[0] = "Honda";
console.log(cars);

console.log("----------Converting an Array to a String-----");
console.log("string :", cars.toString());

console.log("--------Display an Array using JSON----------");
console.log("in jsion formate :", JSON.stringify(cars));

console.log("---------------nested array------------");
const nestedArr = [
  [1, 2, 3],
  [4, 5, [6, 7]],
  [8, 9],
];
console.log("nested array: ", nestedArr);
console.log(nestedArr[0][1]);
console.log(nestedArr[1][2][0]);

console.log("-------------Array Properties and Methods-----------");

let myarr = [10, 20, 30, 40, 50];

console.log("-------------push---------");
myarr.push(60);
console.log(myarr);

console.log("----------Removes the last element. pop()--------------");
myarr.pop();
console.log(myarr);

console.log("-----------unshift()-------");
//Adds element(s) at the beginning.
myarr.unshift(60);
console.log(myarr);

console.log("------------shift()-------");
//Removes the first element.
myarr.shift();
console.log(myarr);

console.log("------------------slice-------------");
//Returns part of an array.
console.log(myarr.slice(1, 3));


console.log("------------splice-------------");
//Adds or removes elements.
let splicedata = [10, 20, 30, 40];
splicedata.splice(2, 0 , "aniket");
console.log(splicedata);

splicedata.splice(1,1);
console.log(splicedata);

console.log("----------------concat()---------------");
//Combines arrays.
let carr1=[1,2,3,4];
let carr2=[4,5,6,7];
console.log(carr1.concat(carr2));


console.log("--------------------- join()-----------------");
//Converts array into a string.
let joinarr=["aniket" , "abhay", "vikas", "pammu"];
console.log(joinarr.join("--"));


console.log("--------------------indexOf----------------");
//returns first index.
let indx=[1,2,3,4,5,6,7,8];
console.log(indx.indexOf(3));


console.log("---------lenght----------");
console.log(myarr.length);

console.log("-----------concat()---------------");
let aa = [1, 2, 3, 4, 5];
let bb = [6, 7, 8, 9, 10];
console.log(aa.concat(bb));

console.log("-----------------------includes()---------------");
//Checks if value exists.
console.log(aa.includes(1));

console.log("----------toString---------------");
//Converts array to string.
let lan=1000;
console.log(lan.toString());


console.log("----------------find()-------------");
//Returns the first matching element.

let findarr = [10,20,30];
console.log(findarr.find((x) => x > 15));


console.log("------------------- findIndex()------------");
//Returns the index of the first matching element.
console.log(findarr.findIndex((x)=>x>15));


console.log("---------------------findlast()---------------------");
//Returns the last matching element.
console.log(findarr.findLast((x)=> x>15));


console.log("-------------------map-------------");
let mappingdata = [1, 2, 3, 4, 5, 6];
let rmap = mappingdata.map((x) => x * 10);
console.log(rmap);

let amap = mappingdata.map((e) => e + 1);
console.log(amap);

console.log("------------------filter------------");
console.log(mappingdata.filter((x) => x < 5));


console.log("--------------reduce()---------------------");
//Reduces array to a single value.
let rarr = [1, 2, 3, 4];
console.log(rarr.reduce((sum, x) => sum + x, 0));  //10

console.log("--------------------- some()------------------");
//Returns true if at least one element matches.
console.log(rarr.some((x) => x > 2));

console.log("--------------------every()--------------");
//Returns true if all elements match.
console.log(rarr.every((x) => x % 2 === 0));

console.log("-----------------sort-----------------");
//The sort() method sorts the elements as strings in alphabetical and ascending order.
let sortarr=["x", "a", "f", "s", "m"];
console.log(sortarr.sort());


console.log("------------------reverse()----------------");
//reverse the all elemets
let resarr=[1,2,3,4,5,6,7];
console.log(resarr.reverse());


console.log("------------------flat()-------------------");
//Flattens nested arrays.
let flatarr = [1, [2, [3, 4 ,5]]];
console.log(flatarr.flat(2));






console.log("============================Type Conversion=================");

console.log("-------------Implicit Type Conversion---------------");

console.log("---------------addition------------------");
let add = 10 + "5"; //+ with a string performs string concatenation.
console.log(add);
console.log(typeof add);

let add1 = "5" + 5; //+ with a string performs string concatenation
console.log(add1);
console.log(typeof add1);

let add2 = "10" + "10";
console.log(add2);
console.log(typeof add2);

console.log("------------------Sub---------------");
let sub = 10 - "5";
console.log(sub);
console.log(typeof sub);

let sub1 = "5" - 10; //- with a number performs subtraact
console.log(sub1);
console.log(typeof sub1);

let sub2 = "5" - "5";
console.log(sub2);
console.log(typeof sub2);

console.log("----------------multiplication-------------");
let mul = 10 * "5";
console.log(mul);
console.log(typeof mul);

let mul1 = "10" * 5;
console.log(mul1);
console.log(typeof mul1);

let mul2 = "10" * "10";
console.log(mul2);
console.log(typeof mul2);

console.log("----------------------div---------------");
let div = 10 / "2";
console.log(div);
console.log(typeof div);

let div1 = "10" / 2;
console.log(div1);
console.log(typeof div1);

let div2 = "10" / "2";
console.log(div2);
console.log(typeof div2);

console.log("-------------Boolean to number");
console.log(true + 1);
console.log(false + 1);
console.log(undefined + 5);

console.log("----------------2. Explicit Type Conversion---------------");

console.log("-------------- string convert into number---------");
let num = "1005";
console.log(Number(num)); //1005
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("1000abc")); //NAN
console.log(Number(undefined)); //NAN
console.log(Number(NaN)); //nan

console.log("-----------------------parseInt()------------");
//Converts a string to an integer.
console.log(parseInt("100")); //100
console.log(parseInt("100.99")); //100
console.log(parseInt("100px")); //100

console.log("--------------parseFloat()-----------");
console.log(parseFloat("100.99")); //100.99
console.log(parseFloat("100.99px")); //100.99

console.log("--------------------- num to String --------------");
let s = 10065;
console.log(typeof s);
console.log(String(s));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));

console.log("-----------------Boolean()-------------");
console.log(Boolean("")); //false
console.log(Boolean(1)); //t
console.log(Boolean(0)); //f
console.log(Boolean(null)); //f
console.log(Boolean(undefined)); //f
console.log(Boolean(NaN)); //f

console.log(Boolean("Hello"));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));

console.log(
  "-==============================JavaScript Operators===================",
);

console.log("-----------1. Arithmetic Operators------------");
let x = 10;
let y = 3;

console.log("addition :", x + y); // 13
console.log("Sub : ", x - y); // 7
console.log("MUl :", x * y); // 30
console.log("Div : ", x / y); // 3.3333
console.log("mod: ", x % y); // 1
console.log("Expon: ", x ** y); // 1000

console.log("--------------2. Assignment Operators-----------------");
let xx = 10;

xx += 5;
console.log(x); // 15

xx *= 2;
console.log(x); // 30

console.log("-------------Comparison (Relational) Operators----------");
console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(10 != 20); // true
console.log(10 !== "10"); // true
console.log(20 > 10); // true
console.log(20 < 10); // false

console.log("-------------Logical Operators------------");
let age1 = 20;

console.log(age1 > 18 && age1 < 30); // true
console.log(age1 < 18 || age1 > 15); // true
console.log(!(age1 > 18)); // false

console.log("-------------Increment & Decrement Operators--------------");
//Increment (++)
let i = 1;
i++;
console.log(i);

//Pre-Increment
let p = 1;
console.log(++p);

//post-Increment
let pi = 1;
console.log(pi++);
console.log(pi);

//Decrement (--)
let d = 1;
i--;
console.log(d);

//Pre-Increment
let d1 = 1;
console.log(--d1);

//post-Increment
let d2 = 1;
console.log(d2--);
console.log(d2);

console.log("--------------Ternary Operator------------------");
//condition ? value1 : value2;

let w = 18;

let wr = w < 20 ? "vote" : "not vote";
console.log(wr);

console.log("-----------------Spread Operator (...)--------------");
//Expands an iterable into individual elements.
let array1 = [1, 2, 3];
let array2 = [...arr1, 4, 5];

console.log(array2);

console.log("-------------Rest op (...) --------------");
function added(...numbers) {
  console.log(numbers);
}
added(10, 20, 30, 40, 50);

console.log(
  "------------------ JavaScript Conditional Statements-----------------",
);
console.log("----------------------- if Statement-----------------------");

let hour = 16;
if (hour < 18) {
  console.log("Good day");
} else {
  console.log("NOt Good");
}

console.log("------------------------Nested if--------------------");
let usaage = 18;
let country = "USA";
let t = "";

if (country == "USA") {
  if (usaage >= 16) {
    console.log("You can drive!");
  } else {
    console.log("You can Not drive! your age is low ");
  }
} else {
  console.log("You can Not drive! becaues your country is not usa");
}

console.log("-----------------------else if Statement-------------------");
let time =15;

if (time < 10) {
  console.log("Good morning");
} else if (time < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}


console.log("-----------------Switch Statement---------------------");

switch (new Date().getDay()) {
  case 0:
  console.log( "Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
  console.log( "Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
  default:
    console.log("invalid day");
}

console.log("-------------------Loops--------------------------");

console.log("-----------------------for looop-----------------");

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("--------------- While Loop-------------");
while (i < 5) {
  console.log(i);
  i++;
}


console.log("---------------------do while ---------------");
let s1=0;
do{
  console.log(s1);
  s1++
}while(s1 <10);


console.log("--------------for...of Loop------------------");
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

console.log("---------------for... in Loop----------------");
let student = {
  name: "Aniket",
  age: 22,
  city: "Pune",
};

for (let key in student) {
  console.log(key, ":", student[key]);
}

for(let k in student){
  console.log(k);
}