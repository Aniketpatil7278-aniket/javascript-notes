console.log("-----------------------Template Literals--------------");

let a = 10;
let b = 20;
console.log(`add result of ${a} and ${b} is = ${a + b}`);

console.log("--------------Calling Functions--------------");
const greet = (name) => {
  return `my name is ${name}`;
};
console.log(greet("Aniket"));

console.log("------------------Ternary Operator-------------------");
let marks = 20;
console.log(`status: ${marks >= 35 ? "pass" : "Failes"}`);

let text = `bv
nsklf
nskf
n;snf
mcsn;
n;sc
m;`;
console.log(text);

console.log(
  "-------------------------------------OBJECTS -------------------------",
);

const myobj = {
  fname: "Aniket",
  mname: "BABASO",
  lname: "Patil",
  age: 25,
  domain: "java fullstack",
  address: { city: "mkld", state: "karntraka", country: "ind" },
  marks: {
    SSLC: { math: 80, sci: 55, ss: 60 },
    PUC: { phy: 80, bio: 80, cs: 95 },
    BCA: { java: 50, mysql: 80, python: 80 },
    MCA: { react: 80 },
  },
};

console.log(myobj);

console.log("-------------------destructuring---------------");
let { fname, mname, lname, DOB = "06/11/2002" } = myobj;
console.log(`${fname} ${mname} ${lname} ${DOB}`);

console.log("-------------------changing the Properties----------");
myobj.age = 30;
myobj.address.city = "MKLD";
console.log("chnaging prop:", myobj);

console.log("----------------adding a new prop----------");
myobj.collegename = "kld bgm";
myobj.marks.MCA.DBMS = 80;

console.log("-------------delete the prop---------");
delete myobj.collegename;
console.log(myobj);

console.log("------Check if a Property Exists----------");
//use the in op give the t f
let rs = "lname" in myobj;
console.log(rs);

console.log("-----------useing the for loop accessing the objects-----------");
for (let x in myobj) {
  console.log(myobj[x]);
}

console.log("----------------tackes all  key and values------------");
let mydata = Object.values(myobj);
console.log(mydata);

let mykey = Object.keys(myobj);
console.log(mykey);

// .notation
console.log("=======================================");
console.log(`my name is : ${myobj.fname}`);
console.log(`city name is : ${myobj.address.city}`);
console.log(`my bca sql marks : ${myobj.marks.BCA.mysql}`);
console.log("my marks is ", myobj.marks); //print all marks data
//[]
console.log(`my last name is : ${myobj["lname"]}`);
console.log(`my state is : ${myobj["address"]["state"]}`);
console.log(`my marks is : ${myobj["marks"]}`); //[obj obj]

console.log("-------------------function---------------------");
function display({ name, age, address }) {
  console.log(name);
  console.log(age);
  console.log(address);
}
let fudata = {
  name: "vikas",
  age: 25,
  address: { city: "CKD", state: "VS" },
};
display(fudata);
display({ name: "Aniket", age: 20, address: { city: "MLKD", state: "KA" } });

console.log(
  "=====================================Array Destructuring================================",
);

const myArray = ["Aniket", "Rahul", "Siva", "Raj"];
let [first, sec, thri, four] = myArray;
console.log(`${first},  ${sec} , ${thri},  ${four}`);

console.log(myArray[0]);
console.log(myArray[3]);

console.log("-------------Skip Array Elements----------");
const arrdata = ["aniket", 25, "React"];
const [name, , course] = arrdata;
console.log(`my name is : ${name} and my course is ${course}`);

console.log("-------------Rest Operator in Array Destructuring----------");
const num = [10, 20, 30, 40, 50, 6, 0];
const [start, ...remaining] = num;
console.log(`${start}  ${remaining}`);

console.log("-------------Destructuring with Function------------");
const Dfn = () => {
  return ["aniket", 25, "java"];
};
const [myname, age1, lan] = Dfn();
console.log(`${myname} , ${age1} , ${lan}`);

const DPFN = ([name, age, course]) => {
  console.log(name);
  console.log(age);
  console.log(course);
};
DPFN(["aniket", 25, "java"]);

console.log(
  "------------------------------Spread Operator------------------------",
);
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [10, 20, 30, 40, 50];
const allarr = [...arr1, ...arr2];
console.log(allarr);

const user = { id: 1, name: "aniket", phone: 1234567890 };
const newuser = { email: "a@gmail", ...user };
console.log(newuser);

const add = (x, y, z) => {
  return x + y + z;
};
const addnum = [10, 20, 30];
console.log(add(...addnum));

console.log("--------------------Rest Operator--------------");
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30, 40);

console.log("----------------Optional Chaining (?.)-------------------");

const stu = { name: "aniket" };
//console.log(stu.age.name); //Uncaught TypeError: Cannot read properties of undefined (reading 'name')
console.log(stu.address?.city); //undefine

const stu1 = {};
console.log(stu1?.name);

const student = {
  name: "Aniket",
  address: {
    city: "Belgaum",
    state: "Karnataka",
  },
};
console.log(student?.address?.city);

//Optional Chaining with Arrays
const students = ["Aniket", "Rahul"];

console.log(students?.[0]);
console.log(students?.[1]);
console.log(students?.[3]);

console.log("-------------------fincation--------------------");
const studentfn = {
  name: "Aniket",

  printName() {
    console.log(this.name);
  },
};

studentfn.printName?.();

//Optional Chaining with Function Parameters
function display12(student) {
  console.log(student?.name);
}

display12({
  name: "Aniket",
});

console.log("-------------Nullish Coalescing Operator (??)---------------");
let mynamedata = null;
let result = mynamedata ?? "Unknown";

console.log(result);