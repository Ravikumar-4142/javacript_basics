// ====================== Number =======================
const score = 500
console.log(score)

const balance = new Number(500)
console.log(balance)

console.log(balance.toString().length) // convert into string
console.log(balance.toFixed(2)) // convert into decimal pont into last

const otherNumber = 200.5656
console.log(otherNumber.toPrecision(4))

const thousant = 10000
console.log(thousant.toLocaleString('en-IN'))

//=================== MAths =============================
console.log(Math)
// console.log(Math.abs(4)) /// get absolute value
// console.log(Math.abs(-4)) /// get absolute value
// console.log(Math.round(4.5))// get apper value
// console.log(Math.ceil(4.5))// get apper value
// console.log(Math.floor(4.5)) // get lowest value


console.log(Math.random()) // always gives number b/w 0 and 1
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1) + min))
