// document.getElementById('owl').onclick = function(){
//     alert('You Clicked on Owl')
// }

// type, timeStamp, defaultPrevented()
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, metaKey, shiftKey, keyCode

document.getElementById('me').addEventListener('click', function(e){
    alert('You Clicked on My picture')
}, false)

// Event propogation
// Event Bubbling(third parameter is false which is default) = Tracks from inner element to outer element
// Event Capturing(third parameter is true) = Tracks from outer element to inner element

document.getElementById('owl').addEventListener('click', function(e){
    console.log("You Clicked on Owl");
}, false)

document.getElementById('images').addEventListener('click', function(e){
    console.log("You Clicked inside the images");
    e.stopPropagation(); // Prevents the event from bubbling
}, false)

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault(); // Prevents the event from bubbling
    e.stopPropagation();
    console.log("You Clicked on Google");
}, false)

document.getElementById('images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        console.log(e.target.parentNode);
        let removeIt = e.target.parentNode;    
        removeIt.remove();
    }
    // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt);
})