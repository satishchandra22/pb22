//1.
var girl= ()=>{
    console.log(x);
    var x=20;
}


//2.
const add=(a,b)=>{
    console.log(a+b);
}

//4.
const add_num=(a,b)=>{
    console.log(a+b);
}

//5.
var x=21;
var girl=function(){
    console.log(x);
    var x=20;
};
girl();


//6.
var x=21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x=20
}


//7.
var x=21;
a();
b();
console.log(a);
a= function(){
    x=20;
    console.log(x)
};
b= function (){
    x=40;
    console.log(x);
};

//8.
const fact=(n)=>{
    let result=1;
    while(n<1){
        result=result*n;
        n--;
    }
    return result;
}
console.log(fact(10));