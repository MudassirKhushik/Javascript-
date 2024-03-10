// Primitive
// 7 Types : Number, String, BigInt, Boolean, null, undefined, symbol

const score = 100
const scoreValue = 100.32
let isLoggedIn = false
let UserEmail; // let UserEmail = undefined
let Temperature = null

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId); // false

const BigInt = 2849814691743;

// Reference (Non-primitive)
// Arrays Objects Functions

const students = ["Mudassir", "Uzair", "Mahrus"];
let myobj = {
    name:"Mudassir",
    age:19,
}
const myfunction = function(){
    console.log("Hello Javascript");
}

// -----------------------------------------------------------

// Stack vs Heap Memory
// Stack(primitive) Pass by vale(copy of object is provided)

let Name1 = "Mudassir"
let Name2 = Name1;
Name1 = "Uzair"

console.log(Name1);
console.log(Name2);


// Heap(non-primitive) Pass by reference(refernce/original object is provided)

let UserDetails = {
    name:"Mudassir",
    Email:"mudassir@google.com",
    Password:"abcxyz123",
}

let TempDetails = UserDetails
UserDetails.name = "Uzair"

console.log(UserDetails.name);
console.log(TempDetails.name);
