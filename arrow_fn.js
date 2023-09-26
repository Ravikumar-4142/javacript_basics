const user = {
    username: "Ravi",
    price: 250,

    welcomeMsg: function () {
        // console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "Hello Ravi"
// user.welcomeMsg()

// console.log(this)

// function coffee() {
//     const  username = "Ravi"
//     console.log(this.username)
// }

// coffee()

// Declare function ising arrow function

// const coffee = function () {
//     const  username = "Ravi"
//     console.log(this.username)
// }

// coffee()

const coffee = () => {
    const  username = "Ravi"
    console.log(this)
}
coffee()


// Disscuss Arrow function
// Explicit retun
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// Implicit return
const addTwo = (num1, num2) => (num1 + num2) // num1 + num2 also
// const addTwo = (num1, num2) => { return num1 + num2 }

console.log(addTwo(10,50))

