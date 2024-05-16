for(let i = 0; i<=10; i++){
    console.log(i);
}

for (let i = 0; i <=10; i++) {
    const element = i
    console.log(i);
    if(i==5){
        console.log("The best Number 5 is printed");
    }
}

for(let i=0; i<=10; i++){
    for(let j=0; j<=2; j++){
        console.log(`Inner Loop is ${j} and Outer Loop is ${i}`);
    }
}

// Tables till 10
for(let i=1; i<=10; i++){
    console.log("Outer Loop is" + i);
    for(let j=1; j<=10; j++){
        console.log(i + "*" + j + "=" + i*j);
    }
}

// For Loop on Array
const MyArr = ["Mudassir", "Uzair", "Mahrus"]
for(let arr=0; arr<MyArr.length; arr++){
    console.log(MyArr[arr]);
}

// Break and continue Statement
for(let i = 0; i <=10; i++) {
    console.log(i);
    if(i==5){
        break;
        // It stops the iteration
    }
}
for(let i = 0; i <=10; i++) {
    if(i==5){
        continue;
        // It skips the current statement and continues the iteration
    }
    console.log(i);
}