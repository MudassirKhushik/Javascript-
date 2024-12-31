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