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


/// Swith case
const month = 3
switch (month) {
    case 1:
        console.log(`Jan`);
        break;
    case 2:
        console.log(`Fab`);
        break;
    case 3:
        console.log(`Mar`);
        break;
    case 4:
        console.log(`Apr`);
        break;
    case 5:
        console.log(`May`);
        break;
    case 6:
        console.log(`Jun`);
        break;
    case 7:
        console.log(`Jul`);
        break;
    case 8:
        console.log(`Aug`);
        break;
    case 9:
        console.log(`Sep`);
        break;
    case 10:
        console.log(`Oct`);
        break;
    case 11:
        console.log(`Nov`);
        break;
    case 12:
        console.log(`Dec`);
        break;

    default:
        console.log(`Not Month`);
        break;
}