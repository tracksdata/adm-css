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

/*

Createing DOM Elements
--------------------------
1. createElement() - create a new element
2. setAttribute() - set any needed attributes, such as id, class etc
3. createTextNode() - create any needed content
4. appendChild() - attach the new text node / element to specifiled element
    insertBefore()
    replaceChild()

*/

const b1 = document.getElementById('b1');

// create input element and append it to div whose id is 'd1
function createNewDOMElement() {
    const element = document.createElement('input');
    element.setAttribute('type', 'text');
    element.setAttribute('value', 'Sample Skill name')
    document.querySelector('#d1').appendChild(element);
}

b1.addEventListener('click', function () {
    createNewDOMElement();
});

document.getElementById('b2').addEventListener('click', function () {

    // create new Div element
    const e1 = document.createElement('div');
    const e2 = document.createElement('input');
    const e3 = document.createElement('lable');

    e1.setAttribute('class', 'c1');
    e2.setAttribute('type', 'text')
    let lableText = document.createTextNode("Skill Name");
    e3.setAttribute('class', 'c2');
    e3.appendChild(lableText);

    // append newly creatted div to dom body at bottom
    document.body.appendChild(e1);
    e1.appendChild(e2);
    e1.insertBefore(e3, e1.firstChild)
    // e1.appendChild(e3);
})

// Generate Dynamic Table from the above defined JSON eployees data

document.getElementById('b3').addEventListener('click', function () {

    // create a div
    let tableDiv = document.createElement('div');
    tableDiv.setAttribute('class', 'empTable');
    tableDiv.setAttribute('id', 'emptableDiv');
    // Craete table
    let tableElement = document.createElement('table');
    tableElement.setAttribute('border', 1);
    // create row for the table header
    let headerRow = document.createElement('tr');
    // create table headers 
    let id = document.createElement('th');
    let name = document.createElement('th');
    let email = document.createElement('th');
    let gender = document.createElement('th');

    let idText = document.createTextNode("Employee ID");
    id.appendChild(idText);

    let nameText = document.createTextNode("Employee Name");
    name.appendChild(nameText);

    let emailText = document.createTextNode("Email Address");
    email.appendChild(emailText);

    let genderText = document.createTextNode("Gender");
    gender.appendChild(genderText);


    // append newly created div to the document body
    document.body.appendChild(tableDiv);
    // append table to the div
    tableDiv.appendChild(tableElement);
    // Attach Header row to the table
    tableElement.appendChild(headerRow);

    // attach/append above created header to the header row
    headerRow.appendChild(id);
    headerRow.appendChild(name);
    headerRow.appendChild(email);
    headerRow.appendChild(gender);


    // Create Table Body

    for (let emp of employees) {
        let tableBodyRow = document.createElement("tr");

        let idTd = document.createElement("td");
        let idData = document.createTextNode(`${emp.id}`)
        idTd.appendChild(idData);

        let nameTd = document.createElement("td");
        let nameData = document.createTextNode(`${emp.name}`)
        nameTd.appendChild(nameData);

        let emailTd = document.createElement("td");
        let emailData = document.createTextNode(`${emp.email}`)
        emailTd.appendChild(emailData);

        let genderTd = document.createElement("td");
        let genderData = document.createTextNode(`${emp.gender}`)
        genderTd.appendChild(genderData);

        tableElement.appendChild(tableBodyRow);
        tableBodyRow.appendChild(idTd);
        tableBodyRow.appendChild(nameTd);
        tableBodyRow.appendChild(emailTd);
        tableBodyRow.appendChild(genderTd);

    }

})



