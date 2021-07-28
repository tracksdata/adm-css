
let menu = ['Idle', 'Vada', 'Poori', 'Dosa'];

// using Symbol class

/*
let it=menu[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

// or

// for-of loop : 2 things
// a-> display array index content
// b-> dislay only array index

// a-> display array index content
//for (let item of menu) {
// console.log(item);
//}

// b-> dislay only array index

//for (let item in menu) {
//console.log(item + ' -> ' + menu[item]);
//}

let employees = [
    {
        "id": 1,
        "name": "Sigfrid",
        "email": "speotz0@wordpress.com",
        "gender": "Genderqueer"
    }, {
        "id": 2,
        "name": "Markos",
        "email": "mcastelluzzi1@stumbleupon.com",
        "gender": "Male"
    }, {
        "id": 3,
        "name": "Kale",
        "email": "kmoorhouse2@cbc.ca",
        "gender": "Polygender"
    }, {
        "id": 4,
        "name": "Cole",
        "email": "chayhoe3@bbb.org",
        "gender": "Non-binary"
    }, {
        "id": 5,
        "name": "Merrielle",
        "email": "mshellard4@opensource.org",
        "gender": "Genderqueer"
    }, {
        "id": 6,
        "name": "Gilli",
        "email": "gingleson5@devhub.com",
        "gender": "Genderfluid"
    }, {
        "id": 7,
        "name": "Ber",
        "email": "bnatt6@prnewswire.com",
        "gender": "Female"
    }, {
        "id": 8,
        "name": "Gal",
        "email": "gmalcolmson7@imageshack.us",
        "gender": "Agender"
    }, {
        "id": 9,
        "name": "Bell",
        "email": "bkennelly8@tmall.com",
        "gender": "Polygender"
    }, {
        "id": 10,
        "name": "Frazer",
        "email": "fstrethill9@csmonitor.com",
        "gender": "Female"
    }, {
        "id": 11,
        "name": "Riccardo",
        "email": "rpadricka@ft.com",
        "gender": "Agender"
    }, {
        "id": 12,
        "name": "Millisent",
        "email": "mnewsonb@europa.eu",
        "gender": "Bigender"
    }, {
        "id": 13,
        "name": "Craggie",
        "email": "cpaynec@cbsnews.com",
        "gender": "Genderfluid"
    }, {
        "id": 14,
        "name": "Lonnie",
        "email": "llamped@nsw.gov.au",
        "gender": "Non-binary"
    }, {
        "id": 15,
        "name": "Willi",
        "email": "winotte@cloudflare.com",
        "gender": "Female"
    }
]

//console.log(employees);

// using for of loop

for (let employee of employees) {

    let { id, name, email, gender } = employee;
    /*
     console.log(employee.id);
     console.log(employee.name);
     console.log(employee.email);
     console.log(employee.gender);
     */

     console.log(id);
     console.log(name);
     console.log(email);
     console.log(gender);
}








