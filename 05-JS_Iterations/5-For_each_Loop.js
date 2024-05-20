// For-Each Loop
const Arr = ["Pakistan", "India", "Nepal", "Japan", "Bangladesh"]
// For Each Loop doesn't return any Value, so it can't be stored in any avriable 
// Arr.forEach( function (val) {
//     console.log(val);
// })

// Arr.forEach( (items) => {
//     console.log(items);
// })

// function printArr(vals){
//     console.log(vals);
// }
// Arr.forEach(printArr)

Arr.forEach( (items, index, arr) => {
    console.log(items , index, arr);
})

// Objects in an Array
const MyArr = [
    {
        Name : "Python",
        File : "py"
    },
    {
        Name : "JavaScript",
        File : "js"
    },
    {
        Name : "Ruby",
        File : "rb"
    }
]
MyArr.forEach( (items) => {
    console.log(items.Name);
})