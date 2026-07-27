console.log("----------------------------Task-2 ----------------------");

console.log("------------------------function------------------------");
console.log(greet);
greet();
function greet() {
  console.log("this is a function");
}
greet();

console.log(
  "------------------------Function Expression----------------------",
);

//greet1(); //refernaceerror

const greet1 = function (name) {
  console.log("this is expression function demo");
};
greet1("aniket");

console.log(
  "-----------------------Arrow Functions---------------------------",
);

const greet2 = () => {
  console.log("this is Arrow function");
};
greet2();

const square = (num) => num * num;
console.log(square(5));

console.log("-------------------Parameters & Arguments-------------");
function greet3(name) {
  console.log(name);
}
greet3("anikeyt");

console.log("-----------------Default Parameters----------------");
function greet4(name = "vikas") {
  console.log(name);
}
greet4();
greet4("aniket");

console.log("------------------------rest paramters-----------------");
function display(name, ...marks) {
  console.log(name);
  console.log(marks);
}

display("Aniket", 80, 90, 95);

console.log("-------------------Callback Functions=--------------------");

function myDisplayer(adding) {
  console.log(adding);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

// Call the calculator
myCalculator(5, 5);

// setTimeout(function () {
//   console.log("Executed after 2 seconds");
// }, 2000);

console.log("----------------------Closures-----------------------------");

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();

console.log(
  "---------------------------this keyword---------------------------",
);
const mydata = {
  name: "Aniket",
  show() {
    console.log(this.name);
  },
};

console.log(mydata);
mydata.show();

console.log(this);

console.log("------------------------------Scope---------------------------");

console.log("----------------------Global Scope-------------------------");

const name = "Aniket";

function show() {
  console.log(name);
}

show();

console.log("--------------------Function Scope-----------------");

const showq = () => {
  let fname = "aniket";
  const mname = "babaso";
  var lname = "patil";

  console.log("fname : " + fname + " mname :" + mname + " lname :" + lname);
};
showq();

console.log("-----------------Block Scope---------------");
if (true) {
  let le = 10;
  const be = 20;

  console.log(le);
  console.log(be);
}

// console.log(le);

//var is not block scopew
if (true) {
  var va = 100;
  console.log(va);
}
console.log(va);
