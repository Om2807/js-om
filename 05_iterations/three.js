// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello wolrd!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);   
} 

const greetings1 = "hello wolrd!"
for (const greet1 of greetings) {
    if (greet1 ==" ") {
        // console.log("space Detected");
        continue
    }
    // console.log(`each char is ${greet1}`);   
} 


// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':-', value);
}

const myObject = {
    'Game1': "NFS",
    'game2': "PUBG",
    'game3': "FF"
}

// for (const [key, value] of myObject) {
//     console.log(key,'->',value);
// }