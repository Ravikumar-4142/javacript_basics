/// create once and use multiple time 
function sayHello() {
    console.log("Hello Ravi")
}
sayHello();

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

console.log(loginUserMsg('Hello Ravi'))