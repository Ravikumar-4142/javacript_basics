// Singleton

// Object literals


const mysyb = Symbol("key1")
const js_user = {
    name: "Ravi",
    "full name": "Ravi Kumar",
    [mysyb]: "mykey1",
    age: 25,
    email: 'ravi@google.com',
    islogedin: false,
    lastlogin: ['Monday','Sunday']
}

// console.log(js_user.name) /// access object key data method 1
// console.log(js_user["name"]) /// access object key data method 2

// Why need method 2
// console.log(js_user["full name"])
// console.log(js_user[mysyb])

//  manupulate aoject
js_user.email   = "kumar@gmail.com"
// console.log(js_user)

// freez object
// Object.freeze(js_user)
js_user.email   = "hellokumar@gmail.com" /// we can't change email
// console.log(js_user)


// add key
js_user.greeting = function () {
    console.log("Hello  Jas user")
}

js_user.greeting2 = function () {
    console.log(`Hello  Jas user ${this.name}`)
}
console.log(js_user.greeting())
console.log(js_user.greeting2())
