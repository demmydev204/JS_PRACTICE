let companyName = 'PDK Designs';
console.log(companyName);

let officeAddress = 'Station-Road, Osogbo';

console.log(officeAddress);

let dateofBirth = '12-09-2001';
console.log(dateofBirth);

const SLIDE_SIZE = '35';
console.log(SLIDE_SIZE);

let bestPhone = 'iphone';
let favoriteClocks = 'Louis Vutton';

let numberofBooks = 20;
let pi = 3.14;

let verylargeNumber = 4539285885883n;

let moneyBag = true;

let extensionBox;
console.log(extensionBox);

pi = null;

const uniqueKey = Symbol();

let bioGraphy = {
    name: 'Chuks Demmy',
    age: 24,
    state: 'Enugu State',
    work: 'Front-end Web Developer'
};

// console.log(bioGraphy.work);

let bestArtist = 'Davido';
console.log(typeof bestArtist);

bestArtist = 15;
console.log(typeof bestArtist);

bestArtist = true;
console.log(typeof bestArtist);

// bioGraphy.work = 'Web Developer';
// console.log(bioGraphy.work);

console.log(bioGraphy['state']);

bioGraphy['state'] = 'Lagos State';
console.log(bioGraphy['state']);


let birthDate = 'age';
console.log(bioGraphy[birthDate]);

let productColors = ['red', 'blue', 'yellow', 'orange', 'magenta'];

console.log(productColors.length);

function sayHi(name) {
    console.log('Hi! ' + name);
}

sayHi('Chuks Demmy');


function multiply(num1, num2) {
    const product = num1 * num2;
}

console.log(multiply(2,2));


