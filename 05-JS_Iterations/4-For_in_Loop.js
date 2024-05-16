// For In Loop is Used for objects as well as Arrays
// It can give us the keys and values both
const myObj = {
    py : "Python",
    cpp : "C++",
    java : "Java"
}
for (const keys in myObj) {
    console.log(`${keys} shortcut for ${myObj[keys]}`);   
}