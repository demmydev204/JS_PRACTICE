// // This is my first javascript code!
// console.log("Hello Word");

// let chuks = "Frontend";
// console.log(chuks);

// let userName = "Chuks Demmy";
// console.log(userName);

// let firstName = "Chuks";
// let lastName = "Demmy";

// const interestRate = 0.5;
// console.log(interestRate);

// let age = 45;
// console.log(age);

// let isApproved = true;
// console.log(isApproved);

// let middleName = undefined;
// console.log(middleName);

// let surname = null;
// console.log(surname);

// //Objects!
// let person = {
//   name: "Chuks",
//   year: 24,
// };

// console.log(person);
// // Dot Notation!
// person.name = "Demmy";

// // Brackets Notation!
// let selection = "name";
// person[selection] = "Ayomide";

// console.log(person.name);

// //Arrays!
// let selectedColors = ["red", "blue"];
// selectedColors[2] = "1";
// console.log(selectedColors.length);

// // Functions!

// // Performing a task!
// function greet(name, lastName) {
//   console.log("Hello " + name + " " + lastName);
// }

// greet("Chuks", "Demmy");

// // Doing calculations!
// function square(number) {
//   return number * number;
// }

// console.log(square(2));


// Math Built-in Function
// let min = 2;
// let max = 10;

// const randomNum = Math.round( Math.random() * (max - min) + min );

// console.log(randomNum);

// let a = 1;
// let b  = 100;

// const AnswerNum = Math.round( Math.random() * (b - a) + a );

// console.log(AnswerNum);

// const name = 'Chuks';
// console.log(typeof name);

// const anotherName = new String('Demmy');
// console.log(typeof anotherName);


// let body = 'I love dark or light skin girl.';

// const doesIncludesgirl = body.includes('girl');
// //console.log(doesIncludesgirl);

// //console.log(body[2]);

// const startWithI = body.startsWith('I');
// //console.log(startWithI);

// const endWithI = body.endsWith('I');
// // console.log(endWithI);

// let updateBody = body.replace('love', 'like');
// // console.log(updateBody);

//  let trimBody = body.trim();
//   //console.log(trimBody);

// const splitBody = body.split(' ');
// //console.log(splitBody);

// let email = 'TestEmail@gmail.com';

// let lowerCaseEmail = email.toLowerCase();
// // console.log(lowerCaseEmail);

// let upperCaseEmail = email.toUpperCase();
// // console.log(upperCaseEmail);

// let firstName = 'Chuks';
// let lastName = 'Demmy';

// // let fullName = firstName + ' ' + lastName;

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName);


//const numbers = [5, 4, 3, 2, 1];

// numbers.push(7, 8, 9);

// console.log(numbers);

// numbers.unshift(6);
// console.log(numbers);

// numbers.splice(1, 0, 7, 8, 9);
// console.log(numbers);

// let myNumbers = [5, 4, 3, 2, 1, 3];

// const indexOfLastNumbers = myNumbers.lastIndexOf(3);
// console.log(indexOfLastNumbers);

// const indexOfTen = myNumbers.lastIndexOf(10);
// console.log(indexOfTen);
// console.log(myNumbers[indexOfTen]);

// if (indexOfTen === -1) {
//   console.log('10 is not found in the array');
// }

// if (!myNumbers.includes(10)) {
//   console.log('10 is not found in the array');
// }



// const indexOfThree = myNumbers.indexOf(3);
// console.log(indexOfThree);

// myNumbers.unshift(0, 1, 2);
// console.log(myNumbers);

// myNumbers.push(6, 7, 8);
// console.log(myNumbers);

// myNumbers.splice(1, 1, 10, 11);
// console.log(myNumbers);


// const employees = [
//   {
//     id: 1,
//     firstName: 'James'
//   },

//   {
//     id: 2,
//     firstName: 'Trump'
//   },

//   {
//     id: 3,
//     firstName: 'Mark'
//   },
// ];

// const employee = employees.find((e) => e.firstName = 'James');

// console.log(employee);

// const indexOfEmployee = employees.findIndex(function(e) {
//   return e.firstName = 'Trump' 
// });

// console.log(indexOfEmployee);

// function add(num1, num2) {
//   return num1 + num2;
// }

// const add = (num1, num2) => num1 + num2; 

// console.log(add(2, 2));

// const chuks = [
//   {
//     age: 24,
//     work: 'Frontend Developer'
//   }
// ];

// const myInfo = chuks.find((e) => e.work = 'Frontend Developer');
// console.log(myInfo);

// const myDigits = [1, 2, 3, 4, 5];

// const lastElement = myDigits.pop();
// console.log(`lastElement: ${lastElement}\n`);

// const firstElement = myDigits.shift();
// console.log(`firstElement: ${firstElement}\n`);

// const middleElement = myDigits.splice(1, 1);
// console.log(`middleElement: ${middleElement}`);

// console.log(myDigits.length);

// while (myDigits.length > 0)
//   myDigits.pop();

// myDigits.length = 0;
// console.log(myDigits);

// const deletedNumbers = myDigits.splice(0, myDigits.length);
// console.log(`deletedNumbers: ${deletedNumbers}`);

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let ab = a.concat(b);
// console.log(`ab: ${ab}\n`);

// let sliceab = ab.slice(0, 3);
// console.log(`sliceab: ${sliceab}`);

// let ab = [...a, 7, 8, ...b];
// console.log(ab);

console.log('ASAP Frontend'[12]);


let USD = 800;
let AUD = USD * 1.5;

console.log(AUD);

// let EUR = 250;
// let NGN = EUR * 1500;

// console.log(NGN);
