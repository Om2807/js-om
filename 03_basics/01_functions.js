

function saymayName(){
    console.log("o");
    console.log("m");
}

// saymayName()

// function addtwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addtwoNumbers(num1, num2){
    // let result = num1 + num2
    // // console.log("om");
    // return result
    return num1 + num2
}
const result = addtwoNumbers(3, 5)

// console.log("Result: ", result);

function loginusermessage(username = "sam"){
    // if(username === undefined){
    //    console.log( "please enter username");
    //    return
    // }

    if(!username){
       console.log( "please enter username");
       return
    }

    return`${username} just logged in`
}

// console.log(loginusermessage("om"))
// console.log(loginusermessage("om"))

//(...)use of rest or spread depending on its use.....
function calculateCartprice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartprice(200, 400, 500, 2000));
 
const user = {
    username: "om",
    prices: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
} 
// handleobject(user)
handleobject({
    username:"sam",
    price: 399
})

const mynewArray = [200, 400, 500, 600]

function returnsecondValue(getArray){
    return getArray[1]
}

// console.log(returnsecondValue(mynewArray));
console.log(returnsecondValue([200, 400, 500, 1000]));

