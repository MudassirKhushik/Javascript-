// Singleton Object 
// const tinderUser = new Object{}

// Object Literals
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Ahmed"
tinderUser.email="mudassir@gmail.com"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname:"Mudassir",
            lastname:"Khushik"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={5:"e", 6:"f"}

// const obj4={obj1, obj2, obj3}
const obj4 = Object.assign({}, obj1, obj2, obj3) 
// Here the empty object works as a target and other objects work as a source. 
// All the sources are stored in the target(an empty or new object).
console.log(obj4);
// Spread method to print the objects.
const obj={...obj1,...obj2}
console.log(obj);

// Data from Database 
const Users=[
    {
        id:"1001",
        name:"Mudassir",
        Roll_no:"23sw074"
    },
    {
        id:"1002",
        name:"Uzair",
        Roll_no:"23sw053"
    },
    {
        id:"1003",
        name:"Mahrus",
        Roll_no:"23sw080"
    }
]

console.log(Users[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));