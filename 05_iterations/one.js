// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

// console.log(element);
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArr1 = ["flash", "spiderman", "hulk", "ironman", "shaktiman"]
// console.log(myArr1.length);

for (let index = 0; index < myArr1.length; index++) {
    const element = myArr1[index];
    // console.log(element);
    
}

// let myArr = ["flash", "spiderman", "hulk", "ironman", "shaktiman"]
// console.log(myArr.length);

// for (let index = 0; index <= myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 Detected");
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
// console.log("finish");

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 Detected");
        continue
    }
    console.log(`value of i is ${index}`);
    
}
console.log("finish");
