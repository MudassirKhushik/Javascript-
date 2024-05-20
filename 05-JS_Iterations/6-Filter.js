const myNums = [1,2,3,4,5,6,7,8,9,10]
// filter(). This is used to return and store the values in any variable.

// const newNums = myNums.filter( (nums) => nums > 4)

const newNums = myNums.filter( (nums) => {
    return nums > 4
})
console.log(newNums);

const evenNums = []
myNums.forEach( (nums) => {
    if(nums % 2 == 0){
        evenNums.push(nums)
    }
})
console.log(evenNums);
