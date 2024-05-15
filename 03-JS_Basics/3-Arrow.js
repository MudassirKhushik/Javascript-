const user = {
    username : "Mudassir",
    course : "JavaScript",
    WelcomeMessage : function(){
        console.log(`${this.username} , Welcome to our Website`);
        console.log(this);
        // Here `this` refers to the current context present. It will display whole object
    } 
}

user.WelcomeMessage()
user.username = "Sam"
user.WelcomeMessage()

console.log(this);
// Here `this` refers to the context in global scope. It will print an empty object because we are in Node right now.
// The global Object in console is `window object`.

// This in Functions
// function one(){
//     const user1name = "Khsuhik"
//     console.log(this);
//     // Here this gives many values
//     console.log(this.user1name); // undefined because `this` is not used in functions 
// }
// one()

// const one = function(){
//     const user1name = "Khsuhik"
//     console.log(this);
//     // Here this gives many values
//     console.log(this.user1name); // undefined because `this` is not used in functions 
  
// } 
// one()

// Arrow Function
const one = () => {
//     const user1name = "Khsuhik"
//     console.log(this);
//     // Here this gives many values
//     console.log(this.user1name); // undefined because `this` is not used in functions 
    const userName = "Khsuhik"
    console.log(this);    
} 
one()

// const addTwoNums = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return 
const addTwoNums = (num1, num2) => (num1 + num2)
addTwoNums(3, 4)

const display = () => ({username : "Mudassir"})
console.log(display());