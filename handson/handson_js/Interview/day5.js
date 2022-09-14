function q1_show(){
    let e1 = document.getElementById('q1');
    e1.innerText = 'MERN Stack';
}

const element = document.getElementsByTagName('h1');
console.log(element[0])
setInterval(()=>{
    let date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    let e1 = document.getElementById('timer');
    e1.innerText = h+':'+m+':'+s ;
},1000);
document.querySelector('#q4_btn').addEventListener('click',()=>{
    document.querySelector('#q4').innerText = 'Welcome to Elevation Academy';
})

document.querySelector('#q5_btn').addEventListener('click',()=>{
    document.querySelector('#q5').innerText = '';
})

let a = [0,1,1,0,1,0,0,0,1];
let count = 0;
for (const i of a){
    if (i === 0){
        count++;
    }
}
console.log(a);

const b = [2 , 3, 64, 75, 14, 12];
let even_count=0;
for (const i of b){
    if (i%2===0){
        even_count++;
    }
}
console.log(even_count);
console.log(b.length - even_count);// odd count



const c = 'my name is satish.';
// we will be using regex (regular expression)

const d = c.match(/['a','e','i','o','u' ]/g);
console.log(d.length);

const e = {
    string: 'codilbvijb',
    array: [5,'fvi',66, 'kk']
}
const f = {
    string: 'sivkuik',
    array: [5,'fvi',66,'kk']
}

function compare_array(a,b){
    const a1 = a.array;
    const b1 = b.array;
    for (i=0;i<a1.length;i++){
        if (a1[i]!=b1[i]){
            return 'False'
        }
    }
    return 'True';
}
compare_array(e,f);