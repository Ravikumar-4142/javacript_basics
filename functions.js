/// create once and use multiple time 
function sayHello() {
    console.log("Hello Ravi")
}
// sayHello();

// function addTwonummbers(num1, num2) {
//     console.log(num1 + num2);
// }
function addTwonummbers(num1, num2) {
    // let result = num1 + num2 
            // OR write 
    return num1 + num2 
}
const result = addTwonummbers(3, 8)
// console.log("result : ", result)


function loginUserMsg(username) {
    if (username === undefined) {
        console.log('Please enter username')
        return false
    }
    return `${username} just logedin!`
}

// console.log(loginUserMsg('Hello Ravi'))

function calculatePrice(...num1) {
    return num1
}

// console.log(calculatePrice(10,50,60))

const user = {
    username: "Hello Ravi",
    price: 250,
}

function handleObject(anyobject) {
    console.log(`User Name is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username: "Hello Ravi",
    price: 250,
}) // both are same


// Array
const myArray   = [120,220,230]
function handleArray(getArray) {
    return getArray[2]
}

console.log(handleArray(myArray))

