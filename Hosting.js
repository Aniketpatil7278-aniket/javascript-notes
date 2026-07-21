/*Hoisting in JavaScript

Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before the code executes.

This means you can sometimes use variables or functions before they are declared.

//1. var hosting
// console.log(a);
// var a=10; //undefine

//2. const hosting
// console.log(x); //Uncaught ReferenceError: Cannot access 'x' before initialization
// const x=10;

//3. let hosting
// console.log(x); //Uncaught ReferenceError: Cannot access 'x' before initialization
// let x=10;

//4. Function Declaration Hoisting
//Function declarations are fully hoisted, so they can be called before they are defined.
// demo();          //give the output
// function demo(){
//     console.log("function hosting");
// }

// //5. Function Expression Hoisting
// When a function is assigned to a variable, only the variable declaration is hoisted.

//useing var
// hello(); //Uncaught TypeError: hello is not a function
// var hello = function () {
//   console.log("hello");
// };

//using const
// hello1(); // Uncaught ReferenceError: Cannot access 'hello' before initialization
// const hello1 = function () {
//   console.log("hello");
// };

//useing let
// hello2();  //Uncaught ReferenceError: Cannot access 'hello2' before initialization
// let hello2=function(){
//     console.log("aniket");
// }



// 6. Arrow Function Hoisting
// Arrow functions behave the same as function expressions.

// demo();  //Uncaught TypeError: demo is not a function
// var demo=()=>{
//     console.log("Demo");
// }

// demo1();  //Uncaught ReferenceError: Cannot access 'demo1' before initialization
// const demo1=()=>{
//     console.log("Demo2");
// }

// demo2();  //Uncaught ReferenceError: Cannot access 'demo2' before initialization
// let demo2=()=>{
//     console.log("aiket");
// }

/*

Summary
Declaration                     Type	    Hoisted	Initial Value	            Access Before Declaration
var	                            ✅ Yes	             undefined	                   ✅ Yes (undefined)
let	                             ✅ Yes	          Not initialized	                  ❌ ReferenceError
const	                        ✅ Yes	         Not initialized	                    ❌ ReferenceError
Function Declaration	        ✅ Yes	         Entire function	                      ✅ Yes
Function Expression (var)	    Variable only	    undefined	                            ❌ TypeError
Arrow Function (let/const)	    Variable only	Not initialized	                        ❌ ReferenceError


*/



