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
