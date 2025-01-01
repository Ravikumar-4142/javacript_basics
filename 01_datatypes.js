"use strict"; // This is a directive that switches the engine to the "modern" mode, changing the behavior of some built-in features. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
//alert("Hello, World!"); // it work on broser side not on nodejs 

// Data Types
// 1. Primitive Data Types

// 1.1 Number - It represents integer as well as floating-point numbers.
let num = 5;
console.log(num);
console.log(typeof num);
// 1.2 String - It is a sequence of characters enclosed in single or double quotes.
let str = "Hello World!";
console.log(str);
console.log(typeof str);
// 1.3 Boolean - It represents a logical entity and can have two values: true or false.
let bool = true;
console.log(bool);
console.log(typeof bool);
// 1.4 Undefined - It means that the value is not assigned to a variable.
let x;
console.log(x);
console.log(typeof x);
// 1.5 Null - It is a special value that represents "nothing", "empty" or "value unknown".
let y = null;
console.log(y);
console.log(typeof y);
// 1.6 Symbol - It is a unique and immutable data type and may be used as an identifier for object properties.
let sym = Symbol("symbol");
console.log(sym);
console.log(typeof sym);
// 1.7 BigInt - It is used to represent integers of arbitrary length.
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt);

// 2. Reference Data Types
// 2.1 Object - It is a collection of key-value pairs.
let obj = {
    name: "Ravi",
    age: 25
};
console.log(obj);
console.log(typeof obj);
// 2.2 Array - It is a collection of elements enclosed in square brackets.
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);
// 2.3 Function - It is a block of code that performs a specific task.
let func = function () {
    return "Hello World!";
};
console.log(func());
console.log(typeof func);
// 2.4 Date - It represents a date and time.
let date = new Date();
console.log(date);
console.log(typeof date);
// 2.5 RegExp - It represents a regular expression.
let regExp = /\w+/;
console.log(regExp);
console.log(typeof regExp);
// 2.6 Error - It represents an error.
let err = new Error("Error Message");
console.log(err);
console.log(typeof err);
// 2.7 Map - It represents a collection of key-value pairs.
let map = new Map();
map.set("name", "Ravi");
map.set("age", 25);
console.log(map);
console.log(typeof map);
// 2.8 Set - It represents a collection of unique values.
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);
console.log(typeof set);
// 2.9 WeakMap - It is similar to Map but allows only objects as keys and the key-value pairs are weakly held.
let weakMap = new WeakMap();
let key = {};
weakMap.set(key, "WeakMap");
console.log(weakMap);
console.log(typeof weakMap);
// 2.10 WeakSet - It is similar to Set but allows only objects and the values are weakly held.
let weakSet = new WeakSet();
let value = {
    name: "Ravi",
    age: 25
};
weakSet.add(value);
console.log(weakSet);

// 3. Special Data Types
// 3.1 NaN - It represents a "Not-a-Number" value.
let nan = NaN;
console.log(nan);
console.log(typeof nan);
// 3.2 Infinity - It represents a positive infinite value.
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);
// 3.3 -Infinity - It represents a negative infinite value.
let negInfinity = -Infinity;
console.log(negInfinity);

// 4. Checking Data Types
// 4.1 Using typeof operator
console.log(typeof 5); // number


