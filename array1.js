const marvel_Heroes = ["Capton", "Ironman", "Thor"]
const dc_Heroes = ["Batman", "Wonder Women", "Sazam"]

// marvel_Heroes.push(dc_Heroes) // push array as a value

// console.log(marvel_Heroes[3][0]) // access values in pushed


// const all_heroes    = marvel_Heroes.concat(dc_Heroes) // merge two array

// console.log(all_heroes)


// const all_heroes = [...marvel_Heroes, ...dc_Heroes] // spred two arrays

// console.log(all_heroes)

// const another_array = [1,2,3,4,5,[6,7,8,[9,10]]]

// const real_another_array = another_array.flat(Infinity)  // merge all array of array into an single array
// console.log(another_array)
// console.log(real_another_array)

// Is Array

console.log(Array.isArray("Ravi")) // Return false
console.log(Array.isArray(marvel_Heroes)) // Return true


console.log(Array.from("Ravi")) // make array from value
console.log(Array.from({ name: "Ravi" })) // tihs returm empty array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3))



// task in array complete the array by number done
const arr = [1, 3, 5, 7, 9];
let newarr = [];
console.log(arr.length, arr[arr.length - 1])

for (let index =  arr[0] ; index <=  arr[arr.length - 1]; index++) {
    newarr.push(index)
    
}
console.log(newarr)

