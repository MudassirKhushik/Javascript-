const name="Mudassir"
const repoCount=50

// console.log("Total Repositories" + name + repoCount);
console.log(`Hello my name is ${name} and my repositories are ${repoCount}`);

const gameName=new String('Mudassir')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0, 4) // Starting point to one less than ending point.
// substring method ignores the negative numbers and starts from 0.  
console.log(newString);

const anotherString=gameName.slice(-8, 3) // Negavitive Numbers can be included
console.log(anotherString);

const newStringOne="    Mudassir    "
console.log(newStringOne);
console.log(newStringOne.trim()); // Ths method ignores the blank spaces before and sfter the text.

const url="https://mudassirkhushik.com/Mudassir%20Khushik"
console.log(url.replace("%20", "-"));
console.log(url.includes("GhulamHussain")); // false

const DeptName="Department of software Engineering"
console.log(DeptName.split(' ')); // It will form an Array of each element after space.
