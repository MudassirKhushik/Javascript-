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

const bookSeriesFromDB = [
    {
        title:"Book One", genre:"History", publish:2009, edition:2012
    },
    {
        title:"Book Two", genre:"Fiction", publish:1999, edition:2002
    },
    {
        title:"Book Three", genre:"Non-Fiction", publish:1993, edition:1999
    },
    {
        title:"Book Four", genre:"Science", publish:1990, edition:2001
    },
    {
        title:"Book Five", genre:"Geography", publish:1995, edition:2011
    },
    {
        title:"Book Six", genre:"History", publish:2000, edition:2012
    },
    {
        title:"Book Seven", genre:"Fiction", publish:2002, edition:2010
    },
    {
        title:"Book Eight", genre:"Non-Fuction", publish:2016, edition:2018
    },
    {
        title:"Book Nine", genre:"Science", publish:2020, edition:2022
    },
    {
        title:"Book Ten", genre:"Geography", publish:2005, edition:2010
    }
];

let userBooks = bookSeriesFromDB.filter( (book) => book.genre === "Science")

userBooks = bookSeriesFromDB.filter( (book) => {
    return book.publish >= 200 && book.genre === "History"
})
console.log(userBooks);