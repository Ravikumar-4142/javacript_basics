/// Array

const myArray = [0, 1, 2, 3, 4]
const myHeroes = ["Capton", "Ironman", "Thor"]
// const myArray1 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(myArray)


// Arrya Method

// myArray.push(5)
// myArray.push(6)
// myArray.pop()
// myArray.unshift(6)
// myArray.shift(6)
// console.log(myArray.includes(9))
// console.log(myArray.indexOf(2))
// const newArr    = myArray.join() // joinand convert into string
// console.log(myArray)
// console.log(newArr)


/// Slice , Splice
console.log("A ", myArray)

const myArr1 = myArray.slice(1, 3)
console.log(myArr1)
console.log("B ", myArray)

const myArr2 = myArray.splice(1, 3)
console.log("C ", myArray)
console.log(myArr2)
