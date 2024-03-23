const score=100
console.log(score);

const balance=new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); // Numbers after decimal 

const anyNum=23.8966
console.log(anyNum.toPrecision(3)); // Roundoff 3 digits

const hundreds=1000000
console.log(hundreds.toLocaleString());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// +++++++++++++++++ Maths +++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // converts negative value to positive
console.log(Math.round(4.3));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(2, 3, 7, 6));
console.log(Math.max(2, 3, 7, 6));

console.log(Math.random()); // gives the value b/w 0 and 1
console.log((Math.random() * 10)+ 1);
console.log(Math.floor((Math.random() * 10)+ 1));

min = 10
max = 20

console.log(Math.floor((Math.random) * (max - min + 1) + min));
