// spread operattor (es6)

function display(n1, n2, n3, n4) {
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
    // console.log(arguments);
}

//let x = 10;
//let y = 20;
//let z = 30;

//display(x, y, z);

let numbers = [10, 20, 30, 41];
//display(numbers);
//display(numbers[0],numbers[1],numbers[2],numbers[3]); // manual spreading
//display(...numbers); // spreading

// Ex1
let arr1 = [1, 2, 3]
let arr2 = [7, 8, 9]

let arr3 = [...arr1, 4, 5, 6, ...arr2];

//console.log(arr3);

let o1 = {
    x: 10,
    y: 20
}

let o2 = {
    z: 30,
    x: 1
}

let o3 = { ...o2, ...o1 }
// or
let o4 = Object.assign({}, o2, o1)

//console.log(o3);
//o3 = { ...o3, o1,o2 };
//console.log(o3);

//console.log(o3);
//console.log(o4);

// rest vs spread operator

function func(a,b,c,...rest){ // rest parameter alwsy last parameter in the function call
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
}


let data = [10, 20, 30, 40, 50, 60];

//func(...data);

//-----------------------------