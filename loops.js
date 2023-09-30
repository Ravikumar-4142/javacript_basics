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

const coding = [
    {
        languagename: "PHP",
        languagefilename: ".php"
    },
    {
        languagename: "JavaScript",
        languagefilename: ".js"
    },
    {
        languagename: "Python",
        languagefilename: ".py"
    }
]

coding.forEach((item) => { 
    console.log(item.languagename);
})