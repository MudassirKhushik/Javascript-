// var c=300

if (true) {
    let a=10
    const b=20
    var c=30    
    console.log(a);
    function add(num1,num2){
        sum=num1+num2
    }
}

// console.log(a); // These can't be accessd outside their scope 
// console.log(b);
// console.log(c); // This can be accessed and mostly causes errors 

function one(){
    const username="Mudassir"
    function Two(){
        const channel="YouTube Channel"
        console.log(username); // Inner function can access the attributes of outer ones
    }
    // console.log(channel); // can't be accessed outside the scope 
    Two()
}
one()
// The inner function can access the attributes of outer function but the outer one can't access the inner ones attributes. 

// Setting Scope in If-Else
if(true){
    const user1name="Mudassir Khushik"
    if(user1name === "Mudassir Khushik"){
        const course = " Learning Javascript"
        console.log(user1name + course);
    }
    // console.log(course); // Can't be accessed because of block scope
}
// console.log(user1name); // Can't be accessed because of block scope

// +++++++++++++++++++++++ Hoisting +++++++++++++++++++++++
console.log(addOne(5));
// The function which is not stored in any variable can be called before decleration
function addOne(num) {
    return num + 1    
} 

// console.log(addTwo(5));// The function which is stored in any variable, Can't be called before decleration
const addTwo = function(Num){
    return Num + 2
}
console.log(addTwo(5));