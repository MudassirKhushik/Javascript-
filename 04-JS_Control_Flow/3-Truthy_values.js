const userEmail = "M@mudassir.ai"
if(userEmail){
    console.log("User Registered Successfully");
}
else{
    console.log("Register Error 404");
}

// falsy Values
// false, 0, -0, "", BigInt 0n, null, undefined, NaN

// Truthy Values
// true, 1, "AnyText", " ", 'false', "0", [], {}, function()={}

const name = []
if(name.length === 0){
    console.log("The Array is Empty");
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("The Object is Empty");
} 

// false == 0
// false == ''
// 0 == ''

// Nullish Coalesing Operator(??): used for null and undefined.
// If the value from database does't come as exoected then this used to provide the default value
let val1;
val1 = 5 ?? 15 //5
val1 = null ?? 10 //10
val1 = undefined ?? 20 //20
console.log(val1); 

// Terniary Operator ?true :false
let coffeeTemperature = 70
coffeeTemperature >= 70 ? console.log("The coffee is hot") : console.log("The coffee is drinkable");