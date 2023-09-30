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
// let myArray = ['IronMan', 'Thor', 'Captain America', 'Black Widow', 'Howkey']
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

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log(`Number ${element} is best number`);
        continue
    }
    console.log(element);
}