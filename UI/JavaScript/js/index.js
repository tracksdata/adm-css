console.log('..index.js is loadewd....');

//let btn1 = document.getElementById('b1');
let btn1=document.querySelector('#b1');
let btn2=document.querySelector('.c1');
let btn3=document.querySelector('.c2');

console.log(btn2);
console.log(btn3);


let d1 = document.getElementById('d1');
let s1=document.getElementById('s1');
let d2=document.getElementById('d2');
let d3=document.getElementById('d3');
console.log(s1);

btn2.addEventListener('click', ()=>alert('btn2 clicked...'))
//btn3.addEventListener('mouseout', ()=>document.write('New data'))



let readData=(data)=>d3.innerHTML=data.value;
/*
function test(data){
   // console.log(data.value);
   d3.innerHTML=data.value;
}
*/

/*
s1.addEventListener('keyup',function(){
    //console.log(s1.value);
    d2.innerHTML=s1.value;
})
*/
s1.addEventListener('keyup',()=>d2.innerHTML=s1.value);


btn1.addEventListener('click', function () {
    console.log(">>>> Btn clicked... ");
    d1.innerHTML = "Data Submited..."
})

btn1.addEventListener('mouseover', function () {

    btn1.style.backgroundColor = 'green';
    console.log(">>> mouse event....");
})

btn1.addEventListener('mouseout', function () {
    btn1.style.backgroundColor = 'silver';
    console.log(">>> mouse event....");
})

