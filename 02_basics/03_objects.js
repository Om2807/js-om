// singleton

//Object.create  // constructor method through

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Om",
    "Full name": "Prajapati om",
    mySym: "mykey1",
    [mySym]: "mykey1",
    age: 20,
    location: "mehsana",
    email: "om@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym]);.

jsUser.emial = "om@chategpt.com"
// Object.freeze(jsUser)
jsUser.emial = "om@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js users");
}

jsUser.greeting2 = function(){
    console.log(`hello js users,${this.name}`);//string backtics(string interpulation) //same object refrence use "this" to show properties inside object.
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
