// This is my first javascript code!
console.log("Hello Word");

let chuks = "Frontend";
console.log(chuks);

let userName = "Chuks Demmy";
console.log(userName);

let firstName = "Chuks";
let lastName = "Demmy";

const interestRate = 0.5;
console.log(interestRate);

let age = 45;
console.log(age);

let isApproved = true;
console.log(isApproved);

let middleName = undefined;
console.log(middleName);

let surname = null;
console.log(surname);

//Objects!
let person = {
  name: "Chuks",
  year: 24,
};

console.log(person);
// Dot Notation!
person.name = "Demmy";

// Brackets Notation!
let selection = "name";
person[selection] = "Ayomide";

console.log(person.name);

//Arrays!
let selectedColors = ["red", "blue"];
selectedColors[2] = "1";
console.log(selectedColors.length);

// Functions!

// Performing a task!
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("Chuks", "Demmy");

// Doing calculations!
function square(number) {
  return number * number;
}

console.log(square(2));
