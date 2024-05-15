// Immediately Invoked Function Expression (IIFE)
// IIFE Function is used to reduce the polution by global scope variables and this is executed immediately

//Syntax -> ()()
(function display(){
    // named IIFE
    console.log("1 - DB Connected");
})();

(() => {
    // Arrow function IIFE
    console.log("2 - DB Conected");
})();

((name) => {
    // Argument Arrow function IIFE
    console.log(`Hi, ${name}, How are you!`);
})("Mudassir");