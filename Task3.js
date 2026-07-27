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

// const demo = (name, callback) => {
//   callback("hello " + name);
// };

// const displaymsg = (msg) => {
//   console.log("this is the diplay function and callback function");
//   console.log(msg);
// };

// demo("aniket", displaymsg);

console.log(
  "------------------------ ASynchronous callback function----------------------",
);

// console.log("Start");  //myDisplayer is a callback function passed as an argument to setTimeout().
// setTimeout(function myDisplayer() {
//   console.log("Task Completed");
// }, 2000);

// console.log("End");

console.log("---------------------Async Promises-------------------");

// const promise = new Promise(function (resolve, reject) {
//   const success = true;

//   if (success) {
//     resolve("Operation completed");
//   } else {
//     reject("Operation failed");
//   }
// });

// promise
//   .then(function (value) {
//     myDisplayer(value);
//   })
//   .catch(function (error) {
//     myDisplayer(error);
//   });

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
// try {
//   console.log(sm);
// } catch (error) {
//   console.log("Error:", error.message);
// } finally {
//   console.log("thnak you!..");
// }

console.log("---------------------get api--------------------");
// fetch("https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("-------------------Post api--------------");

// async function addUser() {
//   const user = {
//     name: "abhay",
//     email: "abhay@gmail.com",
//   };

//   try {
//     const response = await fetch("https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users", {
//       method: "POST",

//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(user),
//     });

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// addUser();

console.log("--------------------put api-----------------");

//   fetch("https://jsonplaceholder.typicode.com/users/1", {
//     method: "PUT",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify({
//       name: "Updated Name",
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

console.log("------------------------Handling Errors-------------------------");
// async function getUsers() {
//   const response = await fetch(
//     "https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users"
//   );

//   console.log(response.status);
//   console.log(response.ok);
//   console.log(response.headers);
//   console.log(response.type);
// }

// getUsers();

console.log("---------------------gets the errors---------------");
// async function fetchUsers() {
//   try {
//     const response = await fetch("https://my-json-server.typicode.com/Aniketpatil7278-aniket/json-server-api/users");

//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }

//     const users = await response.json();

//     users.forEach((user) => {
//       console.log(`${user.id}. ${user.name} - ${user.userid}`);
//     });
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// fetchUsers();


const que = [1, [2, 3], [4]];

[1, 2, 3, 4];

console.log(que.flat());

let ans=[];

for(let x of que){
    if(typeof x ==="object"){
        for(let y of x){
            ans[ans.length]= y;
        }
    }else{
        ans[ans.length]=x;
    }
}
console.log(ans);





const ass=(ss, tt)=>{
    return add=ss=tt
}

console.log(ass(10, 20));
