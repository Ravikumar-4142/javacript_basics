// Singleton

// const js_user = new Object()
// js_user.id = "hello_123"
// js_user.name = "Ravi"
// js_user.islogedin = false
// console.log(js_user)

const other_user = {
    email: "some@email.com",
    fullname: {
        first_name: "Ravi",
        last_name: "kumar"
    }
}
// console.log(other_user.fullname.first_name)


// operations on objects
const obj1 = { 0: "a", 1: "b", 2: "c", 3: "d" }
const obj2 = { 4: "e", 5: "f", 6: "g", 6: "h" }
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1,obj2) // merge object
const obj3 = {...obj1, ...obj2} // merge object 2
// console.log(obj3)


const new_users =
    [
        {
            id: 1,
            name: "Ravi",
            email: "ravi@gmail.com"
        },
        {
            id: 2,
            name: "Ravi kumar",
            email: "kumarravi@gmail.com"
        },
         
        {
            id: 3,
            name: "hello Ravi",
            email: "helloravi@gmail.com"
        }
        
        
    ]

console.log(new_users[1].email)

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

console.log(Object.keys(js_user)) // get all keys from objects into array
console.log(Object.values(js_user)) // get all values from objects into array
console.log(Object.entries(js_user)) // get all objects into array

console.log(js_user.hasOwnProperty('lastlogin')) // is key exixted
