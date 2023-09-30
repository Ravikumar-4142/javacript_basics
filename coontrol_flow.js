/// Control Flow

if (true) {
    // run 
}

if (false) {
    // Not run
}

// const isUserlogedIn = true
// if (isUserlogedIn) {
//     return 'ok'
// }



// Condotion check  <,>,<=,=>,==,!=,===,!==

// if (2 === '2') {
//    console.log(true);
// }

if (2 != 3) {
   console.log('Exceutue');
}
const temppreture = 45
if (temppreture < 50) {
   console.log('Temppreture less than 50');
} else {
    console.log(`Temppreture is : ${temppreture}`);
}


//  Short hand 
const balance = 1000

if (balance > 500) console.log("Test"); // we can write one line code n this


// // Multiple condtion
if (balance < 500) {
    console.log(`balance is : ${balance}`);
} else if (balance < 750) {
    console.log(`balance is : ${balance}`);
} else if (balance < 850) {
    console.log(`balance is : ${balance}`);
} else {
    console.log(`balance is : ${balance}`);
}