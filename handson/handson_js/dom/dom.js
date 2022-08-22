let element1=document.getElementById('text');
console.log(element1);

let element2=document.getElementsByTagName('h1');
console.log(element2[0]);

let element3=document.getElementsByClassName('box');
console.log(element3[0]);

console.log(element2[1]);
element2[1].innerText='Hello World';

function change(){
    let element1=document.getElementsByClassName('container');
    element1[0].style.flexDirection='column';
}

element2[2].style.backgroundColor='tomatto';
element2[2].style.color='red';
element2[2].id='heading';

function changeText(){
    element2[3].innerText='Welcome to Elevation academy';
}

let element4 = document.getElementById('timer');
let element5 = document.createElement('p');
element4.appendChild(element5);

function time(){
    const date = new Date();
    const hours = ("0" + date.getHours()).slice(-2);
    const mins = ("0" + date.getMinutes()).slice(-2);
    const secs = ("0" + date.getSeconds()).slice(-2);
    element5.innerText=hours+':'+mins+':'+secs ;
    
    setTimeout(
        ()=>{time()},1000
    )
}
time()

function print(){
    let element6=document.getElementById('slector');
    let slected=element6.options[element6.selectedIndex].text;
    let element7=document.getElementById('print');
    element7.innerText='selected year is'+slected;
}

