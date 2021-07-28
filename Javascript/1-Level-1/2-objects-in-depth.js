// Objects

// JSON

/*
var emp = {
    'id': 1024,
    'name': 'Praveen',
    'age': 87
}
*/

/*
var emp = {
    'id': 1024,
    'name': 'Praveen',
    'age': 87,
    'addrress': 'Hyderabad'
}
*/

// Json keys with Object
/*
var emp = {
    'id': 1024,
    'name': 'Praveen',
    'age': 87,
    'address': {
        'hno': '10-10/1',
        'street': 'Street1,MG Road',
        'city': 'Hyderabad',
        'land_mark': 'Near Black Car',
        'pincode': 500001,

    }
}
*/

// display name
//console.log(emp.name);
// display city name in address
//console.log(emp.address.city);


// JSON keys with Array
/*
var emp = {
    'id': 1024,
    'name': 'Praveen',
    'age': 87,
    'address': {
        'hno': '10-10/1',
        'street': 'Street1,MG Road',
        'city': 'Hyderabad',
        'land_mark': 'Near Black Car',
        'pincode': 500001,

    },
    'skills':['Java','python','Java Script','React JS','Node JS']
}
*/

// JSON keys with Array of Obejects

var emp = {
    'id': 1024,
    'name': 'Praveen',
    'age': 87,
    'address': [
        {
            'type': 'Present',
            'hno': '10-10/1',
            'street': 'Street1,MG Road',
            'city': 'Hyderabad',
            'land_mark': 'Near Black Car',
            'pincode': 500001
        },
        {
            'type': 'Permanent',
            'hno': '1-A/1',
            'street': 'Street2,KJ Road',
            'city': 'Pune',
            'land_mark': 'Near Red Car',
            'pincode': 900001
        }
    ],
    'skills': ['Java', 'python', 'Java Script', 'React JS', 'Node JS']
}

/*
for(var addr of emp.address){
    //console.log(addr);
    if(addr.type==='Permanent'){
        console.log(addr);
    }
}
*/

// JSON keys with nestted Obejcts

var flight = {
    'flightNumber': 'JK-3463',
    'from': 'Goa',
    'to': 'Pune',
    'flightInfo': {
        'id': '1022',
        'type': 'boing',
        'seat_capacity': 300,
        'airline-info': {
            'airrline-id': 10,
            'airline-name': 'JK',
            'logo-url': 'image.com/1.png'
        }
    }

}

// display airline name:
//console.log(flight.flightInfo["airline-info"]["airline-name"]);
//console.log(flight.flightInfo["airline-info"]["airline-name"]); // '-' is a special symbol


