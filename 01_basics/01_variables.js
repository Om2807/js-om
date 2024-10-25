const accountId = 144553443
let accountEmail = "Om@google.com"
var accountPassword = "123" 
accountCity = "mahesana"
let accountState;

// accountId = 2  //not allowd

accountEmail = "op@op.com"
accountPassword = "25597413"
accountCity = "visanagar"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and  functional scop
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

