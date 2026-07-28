console.log(
  "----------------------------error handling -------------------------",
);

let age = 15;
try {
  if (age < 18) {
    throw new Error("Age must be 18");
  }
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}finally{
    console.log("thnak you");
}
