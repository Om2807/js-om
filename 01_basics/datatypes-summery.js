// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const unotherId = Symbol('123')

console.log(id === unotherId)


// const bigNumber = 23165456476456465478864n



// const score:number = 100 //type Script

//refrence type (non primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "om",
    age: 20,
}


const myfunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros);

/* https://262.ecma-international.org/5.1/#sec-11.4.3*/


//++++++++++++++++++++++++++++++++++++++
//Memory type

//Stack(Primitive), Heap(Non-Primitive)

let myfullname = "Om Prajapati"

let unothername = myfullname
unothername = "omoza"

console.log(myfullname);
console.log(unothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "om@google.com"

console.log(userone.email);
console.log(usertwo.email);