function MyName(){
    console.log("M");
    console.log("U");
    console.log("D");
    console.log("A");
    console.log("S");
    console.log("S");
    console.log("I");
    console.log("R");
}

MyName()

function add(num1, num2){
    console.log(num1+num2);
}
const result=add(2, 5)
console.log(result); // undefined(because there is no any return type)

function subtract(number1, number2){
    let answer=number1-number2;
    return answer
    // return number1-number2
    console.log("Mudassir"); // nothing is printed after return
}

console.log(subtract(15, 5));

function UserLoginMessage(username = "User"){
    return `${username} just logged in`
}
console.log(UserLoginMessage("Mudassir"));

function CalculateItems(...num1){ // rest Operator(used to add undefined arguments in an Array)
    return num1
}
CalculateItems(200, 300, 450, 8000)

const user = {
    username:"Mudassir",
    pice:299
}