let myDate = new Date()
console.log(myDate); // 2024-03-23T08:38:41.563Z
console.log(myDate.toString()); // Sat Mar 23 2024 08:38:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString); // [Function: toISOString]
console.log(myDate.toDateString()); // Sat Mar 23 2024
console.log(myDate.toLocaleString()); // 3/23/2024, 8:38:41 AM
console.log(myDate.toLocaleDateString()); // 3/23/2024
console.log(myDate.toLocaleTimeString()); // 8:38:41 AM
console.log(myDate.toTimeString()); // 08:38:41 GMT+0000 (Coordinated Universal Time)
console.log(typeof myDate); 

// let newDate = new Date(2024, 0, 15) // Mon Jan 15 2024 05:03:00 GMT+0000 (Coordinated Universal Time)
// let newDate = new Date(2024, 0, 15, 5, 3) // Mon Jan 15 2024 05:03:00 GMT+0000 (Coordinated Universal Time)
let newDate = new Date("01-15-2024")
console.log(newDate.toLocaleString()); // 1/15/2024, 12:00:00 AM

let myTimestamp=Date.now()
console.log(myTimestamp);
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));

let TodayDate=new Date()
console.log(TodayDate);
console.log(TodayDate.getMonth() +1); // It starts from 0, that's why 1 is added to it.
console.log(TodayDate.getDay());
TodayDate.toLocaleString('default',{
    weekday:"long",
    hour:"2-digit"
})