// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 10, 29)
// let myCreatedDate = new Date(2024, 10, 29, 5, 3)
// let myCreatedDate = new Date("2024-10-29")
let myCreatedDate = new Date("10-29-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

//`${newDate.getday()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
   
})
console.log(newDate);
