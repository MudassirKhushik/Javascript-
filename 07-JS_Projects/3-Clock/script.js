const myId = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
    const date = new Date();
    // console.log(date.toLocaleTimeString()); It runs in the console
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)