// Today Work 

// let laptopName = 'Hawlett Packard';

// console.log(laptopName);

// let iphoneList = ['iphone X', 'iphone 11', 'iphone 14', 'iphone 17']

// let filterediphone = iphoneList.filter((element) => {
//    return element === 'iphone X';
// });

// console.log(filterediphone);

// let numberList = [18, 20, 16, 15, 21]

// let numberList1 = [16, 17, 14, 15, 19]

// let numberList2 = [20, 22, 26, 16, 20]

//  let filteredNumberList = numberList.filter((element) => {
//      return element >= 18;
//  });

//  console.log(filteredNumberList);

//   let filteredNumberList1 = numberList1.filter((element) => {
//     return element >= 18;
//   });

//  console.log(filteredNumberList1);



//  let filteredNumberList2 = numberList2.filter((element) => {
//      return element >= 18;
//  });

//  console.log(filteredNumberList2);



// let ball = [1, 2, 3, 4, 5]

// let newBall = ball.map((element) => {
//     console.log(element);
//     return null
// });

// console.log(newBall);

// let USD = [10, 20, 30, 40]

// let audDollars = USD.map((element) => {
//     // console.log(element);
//     return element * 1.5
// });

// console.log(audDollars);

// let usDollars = [100, 150, 35]

// let DollarsAustrian = usDollars.map((element) => {
//     return element * 1.5
// });

// console.log(DollarsAustrian);

// let Mylion = [12, 34, 29, 50]

// let yamShip = []

// for(let i = 0; i < Mylion.length; i++) {
// yamShip.push(Mylion[i] * 1.5);
// }

// console.log(yamShip);

// Objects

let users = [
    {
    email: 'example@gmail.com',
    password: 'test1234',
    userName: 'John Doe',
    discord: 'examplediscord',
    subscription: 'VIP+',
    lessonsCompleted: [1, 2, 3, 4, 5],
},
    {
    email: 'seunanthony56@gmail.com',
    password: 'Chukwudi@09',
    userName: 'Chuks Demmy',
    discord: 'Temmy Design',
    subscription: 'VIP+',
    lessonsCompleted: [1, 2, 3],
},
]
// console.log(user.discord);

// console.log(user.userName);

console.log(users[1].discord);

function signUp(user) {
    users.push(user);
}

signUp({
   email: 'chuksdm@gmail.com',
   password: 'Demmy@1234',
   userName: 'Anthony Chuks',
   discord: 'tee_design',
   subscription: 'VIP+',
   lessonsCompleted: [1, 2, 3]
}
);

console.log(users);

// DOM Manipulation



