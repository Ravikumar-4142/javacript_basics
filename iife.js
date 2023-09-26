// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log('DB Comnnected');
})();

// ({}) = function defination, () = Call function


((name) => {
     // UNamed IIFE
    console.log(`DB Comnnected two ${name}`);
})("Hello Ravi");


// Need to use semicoloumn for use 2 iife
