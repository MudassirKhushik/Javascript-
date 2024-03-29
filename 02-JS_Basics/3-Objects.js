// singleton
// object.create

// Object Literals
const mySym = Symbol("Key1")

const JSuser = {
    name: "Mudassir",
    "full name": "Mudassir Khushik",
    [mySym]:"key1", //Symbol can be put in object
    age: 19,
    location: "Jamshoro",
    email: "Khushik@gmail.com",
    isLoggedIn: false,
    LoginDays: ["Monday","Wednesday","Friday"]
} 
console.log(JSuser.name);
console.log(JSuser["email"]);
console.log(JSuser["full name"]);
console.log(JSuser[mySym]);