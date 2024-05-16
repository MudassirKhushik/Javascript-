// If Statement
if(true){
    console.log("The statement will be executed");
}

// If-Else
if(false){
    console.log("It will not be printed");
}
else{
    console.log("If all the conditions fail, this will be executed in that case");
}

// If-Else-if
const temperature = 80
if(temperature <= 20){
    console.log("The coffee is cold");
}
else if(temperature <= 50){
    console.log("The coffee is normal");
}
else if(temperature <= 80){
    console.log("The coffee is hot");
}
else{
    console.log("The coffee is drinkable");
}

// &&(and) and ||(or) operator
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if(LoggedInFromGoogle && LoggedInFromEmail){
    console.log("User Can't Log in with both");
}
else if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log("Login Successfully");
}
