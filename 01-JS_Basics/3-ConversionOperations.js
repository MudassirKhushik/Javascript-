let score = 33
console.log(typeof score) // number

let Score = "33"
console.log(typeof(Score)) // String

let ValueInNumber = Number(Score) // String to Number
console.log(ValueInNumber);

let _score = "33abc"
let value = Number(_score)
console.log(typeof value); // String
console.log(value); // NaN

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN 
// true => 1
// false => 0

let isLoggedIn = 1
let boolean = Boolean(isLoggedIn)
console.log(boolean); // true

let LoggedIn = ""
let bool = Boolean(LoggedIn)
console.log(bool); // false

let Logged = "mudassir"
let Bool = Boolean(Logged)
console.log(Bool); // true

// 1 => true
// 0 => false
// "" => false
// "anytext" => true

let anyNum = 55
let StringNum = String(anyNum)
console.log(StringNum); // 55
console.log(typeof StringNum); // String