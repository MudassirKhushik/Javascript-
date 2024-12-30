const date = function(str){
    document.querySelector("#date").innerText = `${str} - ${new Date().toLocaleTimeString()}`; 
}
let text;
document.querySelector('#start').addEventListener('click', function(){
    text = setInterval(date, 1000, "Hi Mudassir");
    console.log("Started");
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(text);
    console.log("Stopped");
})