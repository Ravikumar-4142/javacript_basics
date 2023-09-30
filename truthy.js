const userEmail = "r@gmail.com"
// if (userEmail) {
//     console.log(`U got user email ${userEmail}`);
    
// } else {
//     console.log(`don't have user email`);
// }

// Falsy values
false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// Truthy values
// All true values not in false
// "0", 'false'," ", [], {},function(){}



// check array true
const users = [];
if (users.length === 0) {
    console.log(`Array is empty`);
}

// check object 
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
}

//  Nullish Coalescing operation (??) null and undefined
let val;
// val = 5 ?? 10
// val = null ?? 10
val = undefined ?? 115
console.log(val);


// ternary Operation
// condition ? true : false
const tea = 100
tea < 80 ? console.log("Tea Price less than 80") : console.log("Tea Price more than 80")
