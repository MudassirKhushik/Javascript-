// Reduce method 
const myArray = [1,2,3,4,5]
let total = myArray.reduce( function (acc, curr) { 
    return acc + curr
},0)
console.log(total);

total = myArray.reduce( (acc,curr) => acc + curr,0)
console.log(total);

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "PY course",
        price : 1999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
