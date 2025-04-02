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
const userName = prompt("Please enter your name:");
console.log(userName);

const number = prompt("Please enter a number:");
console.log(number);

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

const value = prompt("Введіть назву товару")toLowerCase();
let cost;

switch (value) {
    case "яблуко":
        cost = 10;
        alert(`${value} коштує ${cost} гривень`);
        break;
        case "вишня":
        cost = 50;
        alert(`${value} коштує ${cost} гривень`);
        break;
        case "грушка":
        cost = 45;
        alert(`${value} коштує ${cost} гривень`);
        break;
        case "кавун":
        cost = 70;
        alert(`${value} коштує ${cost} гривень`);
        break;
        case "полуниця":
        cost = 100;
        alert(`${value} коштує ${cost} гривень`);
        break;

        default: 
        alert("Товару ${value}, немає в наявності");
}
// alert(`${value} коштує ${cost} гривень`);