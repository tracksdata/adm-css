'use strict';

/*
 * 
 * Java Script Data Types : 2 types
 * ---------------------------
 * 1. Primitive types
 * 2. Reference types
 * 
 * 
 * 1. Primitive types
 * --------------------
 * 1. number
 * 2. string
 * 3. boolean
 * 4. undefined
 * 
 * 2. Reference types
 * ----------------------
 * 1. Object
 *      -> arrays
 *      -> json
 *      -> object
 * 
 */

//--------------------------
// 1. number
//--------------------------

// ES-5

var n = 100;
console.log(n);
n = 100.23;
n = -98;

//--------------------------
// 2. string
//--------------------------

var age = 87;
var s1 = 'Praveen';
var s2 = "Praveen";

// string cancatination
var s3 = "Hello " + s1 + " you are " + age + " years old";
var s4 = 'Hello ' + s1 + ' you are ' + age + ' years old'; // recamend

// cancatination using back tick operator

var s5 = `Hello ${s1}, you are ${age} years old`;

// backtic operattor is for multiline statements

var s6 = "hello " + s1
    + " you are "
    + age
    + " year old";

var s7 = `
Hello 
${s1}
You are 
${age}
year old

`

var s8 = `
<div>
    <p>Hello ${s1} </p>
    <p>you age is ${age}</p>
    <p>You live in India</p>
</div>
`

//-------------------------------

//--------------------------
// 3. boolean
//--------------------------

var status = false;
var a = true;
var isSubmited = false;

var isClicked = true;

if (isSubmited) {
    console.log('.. yes submited');
} else {
    console.log('no.. yet to submit...');
}

var btn = document.querySelector('#b1');

b1.addEventListener('click', function () {
    isClicked = !isClicked;
    isClicked ? b1.style.color = 'red' : b1.style.color = 'blue';
})
isSubmited ? console.log('hello') : console.log('form not submited...');

//--------------------------------------------------------------------------


//--------------------------
// 4. undefined
//--------------------------

var studentName; // variable studentName gets created with a default value 'undefined'



//2. Reference types
//--------------------
/*
 * 
 * 1. Object : 2 types
 * ----------------------
 * 1. Object class
 * 2. literal style
 * 
 * 
 * 
 */


//1. Object class
//-------------------

var emp = new Object();

emp.id = 10;
emp.name = 'Praveen';
emp.salary = 8374834;

Object.preventExtensions(emp);
//emp.address='aaaa'; // ref Error

// 2. literal

var person = { // JSON : Java Script Object Notation 
    'id': 11,
    'name': 'James',
    'age': 87,
    'home address': 'Hyderabad'
}

//Object.preventExtensions(person);

person.email = 'abc@ab.com';


var names = ['Praveen', 'James', 'Ruth', 'Bucky Wall']; // array -> object type

// array of objects

var employees = [
    { 'id': 10, 'name': 'Praveen', 'salary': 939373 },
    { 'id': 11, 'name': 'James', 'salary': 94744 },
    { 'id': 12, 'name': 'Megana', 'salary': 49634 },
    { 'id': 13, 'name': 'Ruth', 'salary': 92739 },
    { 'id': 14, 'name': 'Swathi', 'salary': 23652735 }
]
















