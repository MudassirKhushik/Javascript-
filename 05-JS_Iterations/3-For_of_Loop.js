// For of Loop
// ["","",""]
// [{},{},{}]

let myArr = [1,2,3,4,5]
for (const nums of myArr) {
    console.log(nums);
}

let fullName = "Mudassir Khsuhik"
for (const name of fullName) {
    console.log(name);
}

// Maps
// Prints the keys and values in a particular order and holds distinct elements(no repetition)

const map = new Map()
map.set("PKR" , "Paksitan Rupees")
map.set("USD" , "United States Dollar")
map.set("KD" , "Kuwait Dinar")
map.set("PKR" , "Pakistan Rupees")

// console.log(map); // The map is printed
for (const [keys , values] of map) {
    console.log(keys , "=" , values);   
}
// for of loop prints the values in array, but `[var1 , var2]` returns the values(no Array)

// For of Loop is not valid for objects
// const myObj = {
//     py : "Python",
//     cpp : "C++",
//     java : "Java"
// }
// for (const [keys , values] of myObj) {
//     console.log(keys , "=" , values);   
// }