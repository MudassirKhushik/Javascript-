const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task
    // DB calls, cryptography, Network
    setTimeout(function(){
        console.log("Async Task 1");
        resolve();
    }, 1000);
})
promiseOne.then(function(){
    console.log("Promise 1 Completed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Promise 2 Completed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username : "Mudassir",
            email : "mudassir@gmail"
        });
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "Mudassir",
                email : "mudassir@gmail"
            })} else{
            reject("Error: Something went wrong");
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {console.log("The issue is either resolved or rejected");})

// Async Await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
        resolve({
            coursename : "Javascript",
            coursecode : "Mudassir9099"
        })} else{
                reject("Error: Something went wrong");
            }
    }, 1000);
})

async function ConsumePromiseFive(){
    try {
        const respose = await promiseFive;
        console.log(respose);
    } catch (error) {
        console.log(error);
    }
}
ConsumePromiseFive();