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