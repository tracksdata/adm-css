
// de-structuring

/*
 * 2 types
 * --------
 * a. object destructor
 * b. array destructor
 */

// a. object destructor
//-------------------------

let person = {
    name: 'Praveen',
    age: 36,
    address: 'Hyderabad'
}

// copy name,age and address properties of a person object in a primitive / simple variaables

/*
let pname = person.name;
let page = person.age;
let paddress = person.address;
console.log(pname);
console.log(page);
console.log(paddress);

*/

// using de-structuring
//let {name}=person; // copy only name from person objectt 
//console.log(name);
//let {name,age}=person; // copy name and age from person objectt 
//console.log(name);
//console.log(age);

//let { name, age, address } = person;
//let { name: name, age: age, address: address } = person
//let { address, name, age } = person;

//console.log(name);
//console.log(age);
//console.log(address);


//----------------------------------
// b. array destructing
//----------------------------------

//let numbers = [10, 20, 30, 40, 50, 60, -70, 80];

//let n1=numbers[0];
//console.log(n1);
//let [n1] = numbers;
//console.log(n1); // 10

//let [n1, n2, n3, n4, n5, n6, , n8, n9 = 100] = numbers;



// usage of spread operators example

function validateForm() {

    function validateString() {
        console.log('.. validating string');
    }

    function validateDate() {
        console.log('.. validating date');
    }

    function validateEmail() {
        console.log(".. validating email");
    }

    return { validateString, validateDate, validateEmail }

}


//let validate = validateForm();
//validate.validateString();
//validate.validateDate();
//validate.validateEmail();

// using de-structuring

//let { validateString, validateEmail, validateDate } = validateForm();
//validateString();
//validateEmail();
//validateDate();

// ex2


/*
function display(obj) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.designation);
}
*/

// using de-structuring
function display({ name, age, designation }) {

    console.log(name);
    console.log(age);
    console.log(designation);
}

let emp = { name: 'Praveen', age: 76, designation: 'Trainer' };

display(emp);






