
let age = 20
/*
let p1={
    age:10,
    /*
    sayAge:function(){
        let age=30;
        console.log(person.age); // 10
        console.log(age); // 30
        console.log(this.age); // 10
    }
    
} */

/*
let p1 = { name: 'Praveen', age: 100, sayName: sayName }
let p2 = { name: 'james', age: 34,sayName:sayName }
*/

let p1 = { name: 'Praveen', age: 100 }
let p2 = { name: 'james', age: 34 }


function sayName() {
    console.log('name is ' + this.name);
}
function sayAge() {
    console.log('age is ' + this.age);
}

//p1.sayName();
//p2.sayName();


//sayName.call(p1,"");
//sayName.bind(p1,[]);
//sayName.apply(p1);
//sayName.apply(p2);


/* 
Note:
-> try to read about call , bind and apply functions in java script
*/









