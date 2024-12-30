// setTimeout(function(){
//     console.log("I am learning Javascript");
// }, 2000)

const myfun = function(){
    console.log("I am learning Javascript");
}

setTimeout(myfun, 2000);

const changeText = function(){
    document.querySelector("h1").innerHTML = "Here is the best Javascript series";   
}

const stop = setTimeout(changeText, 5000);

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(stop);
    console.log("Stopped");
})