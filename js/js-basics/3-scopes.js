"use strict"

/**
 * --------------------------
 * Scope/Execution context
 * --------------------------
 * 
 *  memory /statck-frame which contains args and local variiables, 
 *  to executet peace of instuctions
 * 
 * 2 phases
 * ----------
 * 
 * phase-1: creation / push 
 *  => All the varriables declared with keyword 'var' wil be hoisted (lifted up) to the
 *     top of context with a default value 'undefined'
 * 
 * phase-2: execution / pop
 *  => instuctions executets in sequencial order
 * 
 * imp note: 
 * ----------
 * => by default, java script runtime has oe global object : window
 * 
 * => each function call also creates new-scope,
 *    which is child of iin which scope that function declared / created
 * 
 *   Types of Function : 2 types
 * ------------------------
 *   1. named functions
 *   2. anonymous functions
 * 
 * 
 * 
 */

// window is global object 
var v = 12; // <<- file scope
function f1() { // <<- f1 scope
    var v = 13;
    console.log(v); // ? 13
}

//f1();

//1. named functions  // phase 1
//-------------------

function display() { // named functtions
    console.log('.. hello');
}

//2. anonymous functions : phase 2
//------------------------

var display = function () { // anonymous
    console.log('.. hello i am displying');
}

//display();

//sayHello();

function sayHello() { // named
    console.log('Hello.. how are you ');
}


//sayAge();
var sayAge=function(){ // sequencial execution
    console.log(' You are 20 years old');
}
//sayAge();















