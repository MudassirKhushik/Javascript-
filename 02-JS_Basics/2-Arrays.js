const school_std=["Ali","Ahmed","Abdullah"]
const uni_std=["Mahrus","Uzair","Mudassir"]

// uni_std.push(school_std)
// console.log(uni_std); // Array in Array

// const all_std=uni_std.concat(school_std)
// console.log(all_std); // All Elements in one Array

// const all_new_std=[...uni_std, ...school_std]
// '...' is a spread Operator and it helps in combining more than two arrays.
// console.log(all_new_std); // Spreads every element

const nested_array=[1, 2, 3, [4,5,6], 7, [1,2[3,4]]]
const new_nested_array=nested_array.flat(Infinity) // Gives all the elements in one array 
console.log(new_nested_array);

console.log(Array.isArray("Mudassir")); // False
console.log(Array.from("Mudassir")); // Converts into Array
console.log(Array.from({name:"ALI"})); // Provides empty Array because we have to tell him first, either convert "Key" or "Value" in Array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));
