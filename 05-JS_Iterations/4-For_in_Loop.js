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
    // console.log(key); // It will only give keys
    console.log(myArray[key]);
}

// Maps
// Prints the keys and values in a particular order and holds distinct elements(no repetition).
// const map = new Map()
// map.set("PKR" , "Paksitan Rupees")
// map.set("USD" , "United States Dollar")
// map.set("KD" , "Kuwait Dinar")
// map.set("PKR" , "Pakistan Rupees")
// for (const key in map){
//     console.log(key);
// }
// The map is not iterable