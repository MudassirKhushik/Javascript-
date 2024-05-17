// For In Loop is Used for objects as well as Arrays
// It gives us the keys(only)
const myObj = {
    py : "Python",
    cpp : "C++",
    java : "Java"
}
for (const keys in myObj) {
    console.log(`${keys} shortcut for ${myObj[keys]}`);   
}

const myArray = ["py", "cpp", "java", "rb", "js"]
for (const key in myArray) {
    console.log(key);
}