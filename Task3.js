console.log(
  "-----------------------------------Synchronous and Asynchronous in JavaScript-------------------------------",
);
console.log("------------------Synchronous-----------------");
console.log("Hi");
console.log("aniket");
console.log("How are you?");

console.log("------------Asynchronous---------------");
// console.log("Hi");

// setTimeout(() => {
//   console.log("Geek");
// }, 2000);

// console.log("End");

// setInterval(myTimer, 1000);

// function myTimer() {
//     console.log("hello");
// }

console.log(
  "------------------------ Synchronous callback function----------------------",
);

const demo = (name, callback) => {
  callback("hello " + name);
};

const displaymsg = (msg) => {
  console.log("this is the diplay function and callback function");
  console.log(msg);
};

demo("aniket", displaymsg);

console.log(
  "------------------------ ASynchronous callback function----------------------",
);

// console.log("Start");  //myDisplayer is a callback function passed as an argument to setTimeout().
// setTimeout(function myDisplayer() {
//   console.log("Task Completed");
// }, 2000);

// console.log("End");

console.log("---------------------Async Promises-------------------");

const promise = new Promise(function (resolve, reject) {
  const success = true;

  if (success) {
    resolve("Operation completed");
  } else {
    reject("Operation failed");
  }
});

promise
  .then(function (value) {
    myDisplayer(value);
  })
  .catch(function (error) {
    myDisplayer(error);
  });

console.log("--------------------Promise with setTimeout------------------");
// const pro = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("done..............");
//   }, 3000);
// });

// pro.then((data) => console.log(data));

console.log("------------------async / await------------------");

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data Received");
//     }, 2000);
//   });
// }

// async function display() {
//   const result = await fetchData();
//   console.log(result);
// }

// display();

console.log("-------------------- errors handle.--------------------------");
try {
  console.log(sm);
} catch (error) {
  console.log("Error:", error.message);
}finally{
    console.log("thnak you!..");
}


console.log("---------------------get api--------------------");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
