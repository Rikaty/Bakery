//let user = {};
    //user.name: "Niko",
    //console.log(user);
    //user.age: 30;
    //console.log(user);

//const message = "JavaScript is awesome!";
//const isConfirm = confirm(" Please confirm reservation")
//c
// const userName = prompt('Please enter your name:');
// console.log(userName);onsole.log(isConfirm);
// const userName = prompt("Please enter your name:");
// console.log(userName);

// const number = prompt("Please enter a number:");
// console.log(number);

//let value;

// value = false;
// console.log(typeof value);

// const newValue = String(value);
// console.log(typeof newValue);

// const min = prompt("Введіть хвилину");

// if (min >=o && min <=14) {
//     console.log("першп чверть")
// } else if ( min >=15 && min<=29) { 
//     console.log("Друга чверть")
// } else if ( min >= 30 && min <=44) {
//     console.log("Третя чверть")
// } else if ( min >=45 && min <=59){
//     console.log("Четверта чверть");
// } 

// const value = prompt("Введіть назву товару");
// let cost;

// switch (value) {
//     case "яблуко":
//         cost = 10;
//         alert(`${value} коштує ${cost} гривень`);
//         break;
//         case "вишня":
//         cost = 50;
//         alert(`${value} коштує ${cost} гривень`);
//         break;
//         case "грушка":
//         cost = 45;
//         alert(`${value} коштує ${cost} гривень`);
//         break;
//         case "кавун":
//         cost = 70;
//         alert(`${value} коштує ${cost} гривень`);
//         break;
//         case "полуниця":
//         cost = 100;
//         alert(`${value} коштує ${cost} гривень`);
//         break;

//         default: 
//         alert("Товару ${value}, немає в наявності");
// }
// alert(`${value} коштує ${cost} гривень`);

// let summ = 0;

// while(true) {
//     let value = +prompt("Введіть число");
//     if (!value) break;

//     summ += value;
// }

// console.log("Summ", summ);

// for (let i =0; i<10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }

// let arr = ["Apple", "Orange", "Banana"];

// // console.log(arr[2]);

// arr[2] = "Lemon";

// arr[3] = "Cherry";

// // console.log(arr.length);

// // arr2 = [1, "hello", {key: "" }]

// console.log(arr);

// arr.push("Tomato");

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.shift();

// console.log(arr);

// arr.unshift("Tomato");

// console.log(arr);

// for (let i =0; i < arr/length; i++) {
//     console.log(arr[i]);
// }

// for ( item of arr){
//     console.log(item);
// }

// for ( let key in arr){
//     console.log(arr[key]);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(matrix[1][2]);

// 5 == 5

// let a = 5;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr2);


// let arr = ["a", "b", "c", "d", "e"];

// arr.splice(2, 1);

// console.log(arr);


// let a = [1, 2, 3];
// let b = [4, 5, 6];
// console.log(a + b);


// let a = [1, 2, 3];

// console.log(arr.concat(a));


// console.log(arr.indexOf("c", 1))

// console.log(arr.includes("c"));


// const fruts = [
//     { id: 0, name: "Apple" },
//     { id: 1, name: "Tomato" },
//     { id: 2, name: "Cherry" },
//     { id: 3, name: "Orange" },
// ];

// console.log(fruts.find((item) => item.id === 3));
// console.log(fruts.filter((item) => item.id < 2));
// let result = fruts.map(item => item.name.length);
// console.log(result);
// let names = "Оля, Юля, Аня, Пєтя";

// let arr = names.split(", ");

// console.log(arr);

// let newString =arr.join(", ");

// console.log(newString);

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item)=> summ+item);


// let arr = [23, 45, 30];

// let summ = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(summ);


// function showMessage (name, city){
//     console.log("Hello, my name is " + name + " I'm from " + city);
// }

// showMessage("Katie,", "Zhytomyr");
// showMessage("Ola,", "Lviv");



// const username = 'Ann';

// const sayHi = function () {
//    let message = "Helloooo, my name is ";
//     console.log(message + username);
// };

// sayHi();


// function  sum (a,b) {
//     return a + b;
// }

// let result = sum(7, 8);

// console.log(result);


// const testFunk= function(a,b){
//     console.log("a :", a);
//     console.log("b :", b);

//     return;
// };

// testFunk(5, 8);


const a = function () {
    console.log("function a");
};

const b = function () {
    console.log("function b");
};

const c = function () {
    console.log("function c");
};