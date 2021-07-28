
// functions

/*   Types of Function : 2 types
* ------------------------
*   1. named functions
*   2. anonymous functions
*/

/**
 * imp note: 
 * ----------
 * => by default, java script runtime has oe global object : window
 * 
 * => each function call also creates new-scope,
 *    which is child of iin which scope that function declared / created
 */

// Parent and child functions

function sayName() { // sayName is scope name
    console.log(">>>> Hello I am Praveen");
}

//sayName();

// closers

function f1() { // scope is f1 << f1 is child of global scope - window
    console.log(">>> f1 function");
    function f2() { // scope is f2 <<< f2 is child of f1 scope
        console.log(">>> f2 function");
    }
    f2();

} // f1 context / scope is gettting closed

//f1();

// why closers?
function doTeach() {
    console.log(">>>> Trainer is teaching java script...");

    function doLearn() {
        console.log(">>> Associates are learning java script...");
    }
    return doLearn;
    //doTeach scope ends here...
}

//doTeach();
//doTeach();
//doTeach();
/*
var learn=doTeach();
learn();
learn();
learn();
*/

function operations() {

    console.log(">>>>> operations Started");

    function sum() {
        console.log(">>> sum");
    }

    function div() {
        console.log(">>> div");
    }

    function sub() {
        console.log(">>> sub");
    }
    // if more than one function needs to be returned, then use return type as object
    return { 'f1': sum, div, sub };

    // operations ends here...
}

//var ops = operations();
//ops.f1();
//ops.div();
//ops.sub();

var v = 12;
function f1() {
    console.log(v); // ?   undefined
    var v = 13;
}

//f1();

var v = 12;
function f1() { // <<< f1 context
    function f2() {// f2 is child of f1 context
        console.log(v); // undefined
    }
    f2();
    var v = 13;

    // f1 ends here
}

//f1();

var v = 12;
var v = 13;

//console.log(v);

var v = 12;

if (true) {
    var v = 13;
}
//console.log(v); // ?? 13

// problems / limitations of 'var' keyword
/*
    1. variable get hoist
    2. can re-declare same vareiable within scope
    3. no block scope

    What is the solutions?
    -> use 'let' and 'const' keywords with block scope

*/

//console.log(a);
//var a=10;

//console.log(a); // errorr
//let a=10;

//let v=12;
//let v=13; // error

let x = 12;
if (true) {
    let x = 13; // block scope
}

//console.log(x);

//-------------------------------

const person = {
    name: 'Praveen'
}
//console.log(person);
//person=null; // error
person.name = 'james'; // properties are muttable
//console.log(person);

function sum() { // sum is scope name in  the function context
    console.log("sum is being executed...");
    let len = arguments.length;
    let i = 0;
    let result = 0;
    while (i < len) {
        result = result + arguments[i];
        i++;
    }
    return result;
}

//let res=sum(10,20,30);
//console.log(res); // 60

// can we overwrite functions in java script? No

function getFood() { // getFood is the scope name : scope name is unique
    return "No Food";
}

function getFood(pay) { // getFood is scope name : 
    //....
    return 'Biryani';
}

function getFood(pay, extra) { // // getFood is scope name : 

    if (arguments.length === 0) {
        return "No Food"
    }
    if (arguments.length === 1) {
        return "Biryani"
    }
    if (arguments.length === 2) {
        return "Biryani " + "Soft-Drink";
    }


}

console.log(getFood()); // No Food 
console.log(getFood(100)); // Biryani
console.log(getFood(34, 76)); //Biryani Soft-Drink






























