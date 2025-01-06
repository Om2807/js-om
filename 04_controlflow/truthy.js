const userEmail = []

if (userEmail) {
    console.log("got user email");  
} else{
    console.log("dont have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 10 ?? null
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);


// terniary operator

// condition ? true : flase

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")
