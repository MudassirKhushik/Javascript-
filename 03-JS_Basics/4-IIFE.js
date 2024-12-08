// Immediately Invoked Function Expression (IIFE)
// IIFE Function is used to reduce the polution by global scope variables and this is executed immediately

//Syntax -> ()()
(function display(){
    // named IIFE
    console.log("1 - DB Connected");
})();

//Before writing the second IIFE, must put the semicolon so that one execution should stop and and other IIFE should be executed. 
(() => {
    // Arrow function IIFE
    console.log("2 - DB Connected");
})();

((name) => {
    // Argument Arrow function IIFE
    console.log(`Hi, ${name}, How are you!`);
})("Mudassir");
