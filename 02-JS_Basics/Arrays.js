//Arrays

const myArr=[0, 1, 2, 3, 4, 5]
const students=["Uzair","Mudassir","Mahrus"]

const Arr=new Array(1, 2, 3, 4, 5)
console.log(Arr[0]);

// Array Methods
myArr.push(6) // Adds the element
myArr.pop() // Delets the last element
myArr.shift(15) // Adds the element on 0th index
myArr.shift() // Removes the element of 0th index

console.log(myArr);
console.log(myArr.includes(100)); // false(boolean value)
console.log(myArr.indexOf(50)); // The element it doesn't contain, It gives "-1"
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr); // It is an Array
console.log(newArr); // Same value but it became String

// Difference b/w Slice and Splice 