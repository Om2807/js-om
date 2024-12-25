//this current contex ko refer karta he
const user = {
    username : "om",
    price : 200,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);  
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "om"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "om"
//     console.log(this.username);
// }

const chai = () => {
    let username = "om"
    console.log(this);
}

// chai()

//curly braces me return likhna padega
// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) =>  (num1 + num2)  //perenthesis me return nahi likhna padega


const addtwo = (num1, num2) =>  ({username: "om"})


console.log(addtwo(3,4));

// const myArray =[2,5,6,7,8]

// myArray.forEach()