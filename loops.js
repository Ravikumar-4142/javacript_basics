// iterations
// for loop
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`Number ${element} is best number`);
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of:  ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner lopp value:  ${j} and outer loop value ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }


/// Arrays Loops
let myArray = ['IronMan', 'Thor', 'Captain America', 'Black Widow', 'Howkey']
// // print all values
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(`Print values ${ element }`);
    
// }

// print all values in revese orders
// for (let index = myArray.length - 1; index >= 0; index--) {
//     const element = myArray[index];
//     console.log(`Print values reverse orders ${ element }`);
// }


// break and continue
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`Number ${element} is best number`);
//         break
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log(`Number ${element} is best number`);
//         continue
//     }
//     console.log(element);
// }



// ============ While Loop ============

let index = 0
// while (index <= 10) {
//     console.log(`Value of index: ${index} `);
//     index = index + 2
// }
let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value is: ${myArray[arr]} `);
//     arr = arr + 1;
// }


// =============== Do While Loop ==============
// let score = 1
// do {
//     console.log(`Value is: ${score} `);
//     score++
// } while (score <= 10);

//=================== For Of Loop =================
// for (const val of myArray) {
//     console.log(`Hero is: ${val} `);
// }

// const greetings = "Hello word!"
// for (const greet of greetings) {
//     console.log(`Each Char: ${greet} `);
// }

// ====================== Maps ======================
const   map = new Map()
map.set('IN',"India")
map.set('US',"United State Of America")
map.set('FR',"France")
map.set('NE', "Nepal")
map.set('IN', "India")

// console.log(map);
// for Of lopp
// for (const [key,val] of map) {
//     console.log(key,':-', val);
// }
// forin not iteratable
// for (const key in map) {
//     console.log(key,':-', val);
// }


const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
}
// for (const [key,val] of myObj) {
//     console.log(key,':-', val);
// } => Not iteratable code

//=================== For IN Loop =================
// for (const key in myObj) {
//     console.log(`${key} => ${myObj[key]}`);
// }
const programming = ['js', 'php', 'py', 'java', 'c', 'cpp']
// for (const key in programming) {
//     console.log(`${programminh[key]} `);
// }


// ======================== ForEach loop ==============
// synatax 1
// programming.forEach(function (val) {
//     console.log(`${element} `);
// })
// synatax 2
// programming.forEach(element =>{
//     console.log(`${element} `);
// });
// syntax 3
// function printme(item) {
//     console.log(`${item} `);
// }
// programming.forEach(printme);


//========== Some other intrsting ==================
// programming.forEach((item,index,arr) => {
//     console.log(item, index, arr);
// });

// const coding = [
//     {
//         languagename: "PHP",
//         languagefilename: ".php"
//     },
//     {
//         languagename: "JavaScript",
//         languagefilename: ".js"
//     },
//     {
//         languagename: "Python",
//         languagefilename: ".py"
//     }
// ]

// coding.forEach((item) => {
//     console.log(item.languagename);
// })




// other coding

// const values = programming.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);  // return undefined
/// ====== Filter =================== return with conditions
const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNumbers.filter((num) => num > 4)
// console.log(newNums);


// const newNums = myNumbers.filter((num) => {
//     return num > 4
// })
// console.log(newNums);

// const myNewNums = []
// myNumbers.forEach((num) => {
//     if (num > 4) {
//         myNewNums.push(num)
//     }
    
// })
// console.log(myNewNums)


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);


// ======== Map ===============

// const mynewmyNumbers = myNumbers.map( (num) => {return num +  10})
// console.log(mynewmyNumbers);
// ==================== Chaining methods ====================
// const mynewmyNumbers = myNumbers.map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter( (num) => num >= 10)
// console.log(mynewmyNumbers);

/// ============ Reduce() ===================

const arrayNum = [1, 2, 3]
// const myTotal = arrayNum.reduce(function (acc, cval) {
//     console.log(`acc : ${acc} cval: ${cval}`)
//     return acc + cval
// }, 0)

// const myTotal = arrayNum.reduce( (acc, cval) => acc + cval, 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemname: "JS Course",
        price: 599,
    },
    {
        itemname: "Python Course",
        price: 599,
    },
    {
        itemname: "JAVA Course",
        price: 1499,
    },
    {
        itemname: "Data Scientist",
        price: 12999,
    },
]

const shopingPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(shopingPay);
