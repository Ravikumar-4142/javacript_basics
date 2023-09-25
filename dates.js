// Dates
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 8, 25)
// let myCreatedDate = new Date(2023, 8, 25, 5,3)
let myCreatedDate = new Date("2023-08-25")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// jget ms
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// Convert into second
// console.log(Math.floor( Date.now()/1000))


let newDate = new Date()

console.log(newDate.getMonth() + 1) // this will return month index for corrent month + 1
console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}))