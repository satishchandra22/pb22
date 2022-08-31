//1.
const parent={
    name: 'parent',
    age : 57,
    details: function(){
        console.log(`${this.name}'s age is ${this.age}`)
    }
}

const child={
    height: 6,
    name: 'child'
}

child.__proto__=parent;
child.details();

//2.prototype chaining

const grand_child={
    name: 'grand child',
    weight: 50,
}
grand_child.__proto__=child;
grand_child.details();
// details() is a function of prototype of prototype. js search for property name in 
// prototype chain untill its found.
//3.
Array.prototype.sum = function(){
    let result=0;
    for (let i=0;i < this.length; i++){
        result+=this[i];
    }
    return result;
}

let a = [5,8,6,8,44,66]
let b = [6,5,12,89,4,22]
console.log(a.sum(),b.sum());


// 4.
function Allprops(obj){
    let props = [];
    for (const i in obj){
        props.push(i)
    }
    console.log(props)
}

Allprops(grand_child);