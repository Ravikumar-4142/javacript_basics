 var c = 30
let a = 100
if (true) {
    let a = 10
    const b = 20
//    console.log('INNER ', a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// for (let i = 0; i < Array.length; i++) {
//     const element = array[i];
// }

// Nested scope
function one() {
    const username = "Hello Ravi"
    function two() {
        const website = "HelloRavi"
        console.log(username)
    }
    // console.log(website)

    // two()
}

// one()

// if (true) {
//     const username = "Hello Ravi"
//     if (username === "Hello Ravi") {
//         const website = "HelloRavi"
//         console.log(username + website)
//     }
//     // console.log(website)


// }
// console.log(username)

// +++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++
console.log(addOne(5))
function addOne(num) {
    return num + 1
}


// console.log(addtwo(10)) // can't access this function before declation
const addtwo = function (num) {
    return num + 2
}

console.log(addtwo(10))
