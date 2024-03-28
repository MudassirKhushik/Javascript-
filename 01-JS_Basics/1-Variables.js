const accontId = 122445
let accountEmail = "mudassir@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"

// Changing the values.
// accountId = 919199  // not allowed 
accountEmail = "Khushik@gmail.com"
accountPassword = "54321"
accountCity = "Jamshoro"
let accountState; //not assigned any value

/*Prefer not using the var 
because of issue in block scope and functional scope 
*/
console.table([accontId, accountEmail, accountPassword, accountCity, accountState])