console.log(
  "-----------------------callback function----------------------------",
);

function greet(name, callback) {
  callback("hello " + name);
}
function display(msg) {
  console.log(msg);
}
greet("aniket", display);

console.log("---------------------example of the callback----------------");

function first(callback) {
  console.log("First Function");

  callback();
}

function second() {
  console.log("Second Function");
}
first(second);

console.log("--------------------------(Arrow Callback----------------");
function greet12(callback) {
  console.log("Hello");

  callback();
}

greet12(() => {
  console.log("Welcome");
});

// -------------------in reactc -------------------
//   /*{
//     /* Button */
//   }
//   <Button variant="contained" className="mt-4" onClick={handlebtn}>
//     Callbak function
//   </Button>;
//   {
//     /* Anonymous Callback */
//   }
//   <Button
//     variant="contained"
//     color="error"
//     className="mt-4"
//     onClick={() => {
//       console.log("this is the Anonymous Callback");
//     }}
//   >
//     Anonymous Callback
//   </Button>;

//   {
//     /* callback with map */
//   }
//   {
//     users.map((u) => <Typography key={u}>{u}</Typography>);
//   }

console.log(
  "------------------------What is a Promise?-----------------------",
);
const promise = new Promise((resolve, reject) => {
  resolve("Success...........");
});

promise.then((result) => {
  console.log(result);
});

const promise1 = new Promise((resolve, reject) => {
  reject("Error......");
});
promise1.catch((e) => {
  console.log(e);
});

console.log("------------------login example for the Promise-----------------");

const promise2 = new Promise((resolve, reject) => {
  let suc = true;

  if (suc) {
    resolve("Successfully login........");
  } else {
    reject("Login falies");
  }
});

promise2
  .then((msg) => {
    console.log(msg);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("THank you...");
  });

console.log("----------------Promise Methods----------------");

console.log("---------------------1. Promise.resolve()-------------------");
Promise.resolve("this is the resolev").then(console.log);

console.log("-------------------2. Promise reject()---------------------");
Promise.reject("reject promies").catch(console.log);

console.log("--------------------3. Promise.all()----------------");
Promise.all([
  Promise.resolve(10),
  Promise.resolve(20),
  Promise.resolve(30),
  Promise.resolve(40),
]).then(console.log);

console.log("-----------------4. Promise.race()------------------");
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("A"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("B"), 1000)),
]).then(console.log);


// ---------------------------------------------------------------------------------------------------------

console.log( "============================async/await=======================================",);
async function agreet() {
  return "Hello";
}
console.log(agreet());

console.log("----------------------------------fetch data ---------------------");

async function getdata() {
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users");
        const data=await res.json();
        console.log(data);
        if(!res.ok){
            throw new Error(res.status);
        }
    }catch(e){
        console.log(e);
    }finally{
        console.log("Thank you");
    }
}
getdata();





