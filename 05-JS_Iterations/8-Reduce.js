// Reduce method 
const myArray = [1,2,3,4,5]
const total = myArray.reduce( function (acc, curr) { 
    return acc + curr
},0)
console.log(total);