console.log("-----------------------callback function----------------------------",);

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

