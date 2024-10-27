const name = "Om"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count ${repoCount}`);
 
const gameName =  new String('ompraj-ap-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.lastIndexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

const unotherString = gameName.slice(-8, 4)
console.log(unotherString);

const newStringOne = "  omoza    "
console.log(newStringOne);
console.log(newStringOne.trim());
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim */ /*visit for more info for strings*/

const url = "https://om.com/om%20prajapati"

console.log(url.replace('%20', '-'))

console.log(url.includes('om'))
console.log(url.includes('akhil'))

console.log(gameName.split('-'));