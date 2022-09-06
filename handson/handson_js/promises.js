// 1. Write one example explaining how you can write a callback function ?

function my_fun(a,call_back){
    call_back(a);
}

const fun = (a)=>{
    console.log(a);
}

my_fun('this is call back function',fun);

//  in the above example call back function is passed to my_fun function.

//2. "Write callback function to print numbers from 1 to 7, in which 1 should be printed 
// after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.

let production = () =>{console.log("Numbers");
   setTimeout(()=>{console.log("1")//prints after 1 sec
       setTimeout(()=>{console.log("2")//prints after 2 secs
          setTimeout(()=>{console.log("3")//prints after 3 secs
              setTimeout(()=>{console.log("4")//prints after 4 secs
                   setTimeout(()=>{console.log("5")//prints after 5 secs
                       setTimeout(()=>{console.log("6")//prints after 6 secs
                           setTimeout(()=>{console.log("7")//prints after 7 secs
                           },7000)//sets timeout interval as 7 secs
                        },6000)//sets timeout interval as 6 secs
                    },5000)//sets timeout interval as 5 secs
                },4000)//sets timeout interval as 4 secs
            },3000)//sets timeout interval as 3 secs
        },2000)//sets timeout interval as 2 secs
    },1000)//sets timeout interval as 1 sec
};
production()



// 3. "Write promise function to print numbers from 1 to 7, in which 1 should be printed 
// after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

let printNumber = ( time, num ) => {
    return new Promise( ( resolve, reject )=>{
        if( num ){setTimeout(()=>{resolve( num() )}, time)}
        else{reject( console.log("No number") )}
    })
}
printNumber( 0, ()=>console.log("Numbers"))//prints Numbers at 0thsec.
.then(()=>{return printNumber(1000,()=>console.log('1'))//prints 1after 1 secs
  }).then(()=>{return printNumber(2000,()=>console.log('2'))//prints 2after 2 secs and so for others
      }).then(()=>{return printNumber(3000,()=>console.log('3'))
          }).then(()=>{return printNumber(4000,()=>console.log('4'))
              }).then(()=>{return printNumber(5000,()=>console.log('5'))
                   }).then(()=>{return printNumber(6000,()=>console.log('6'))
                       }).then(()=>{return printNumber(7000,()=>console.log('7'))})


// 4. Create a promise function accepting a argument, if yes is passed to the function then it 
// should go to resolved state and print Promise Resolved, and if nothing is passed then it should 
// go to reject state and catch the error and print Promise Rejected 

let my_function = (arg) =>{
   return new Promise((resolve,reject)=>{
    if (arg==='yes'){
        resolve(console.log('Promise resolved'));
    } else{
        reject(console.log('Promise rejuected'));
    }

   })
}

my_function('yes').then(()=>{return my_function('yes')})
.catch(()=>{return my_function('no')});

// 5. Create examples to explain callback function
//  call back function is a function which is paased as argument to another function

function ex1(call_back1,call_back2){
    call_back1();
    call_back2();
}
const f1 = ()=>{
    console.log('This is call back function 1')
}
const f2 = ()=>{
    console.log('This is call back function 2')
}

ex1(f1,f2);

// 6.Create examples to explain callback hell function
// call back hell is when one call back function calling another call back function.

setTimeout(()=>{setTimeout(()=>{console.log('inner function')},1000);
console.log('Outer function')},2000);

//7. Create examples to explain promises function

//Promises - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage
// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to
// unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not
// able to do so fetches us with an error message.
// // It have three stages.
// // 1. Pending 2. Resolved(fulfilled) 3. Rejected.

const getId = new Promise((resolve, reject) => {
    setTimeout(() => {
        let id = [1, 2, 3, 4, 5];
        resolve(id);
        reject('Error in fetching the details'); //either of resolve or reject is executed on the basis of data received.If received then resolve is called otherwise reject is called. Resolve hits the .then() method and the reject hits the .catch method()
    }, 2000);}
);


    
const getEmpDetails = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout((data) => {
            let empDetails = {
                fName: 'Ravi',
                lName: 'Patel',
                age: 24,
            };
            resolve(`The id of employee is ${data} and the name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is ${empDetails.age}`);
        },2000,data);
    });
};


getId
.then((id) => {
    console.log('The id is', id);
    getEmpDetails(id[2]).then((data) => {
        console.log('the data is', data);
    })
    .catch((err) => {console.log(err);});
})
.catch((err) => {
    console.log(err);
})
.finally(()=>{
    console.log("End of promise chaining");
})


//8. Create examples to explain async await function

//--> Async/Await - They are used to handle promises more efficiently. The word async before a function
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
// to return a promise instead of a value.
// // Await is used to wait for the result that is to be returned from the promise. So, we use await
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
// API calls.
// // Await is always used with the keyword async.

async function tryingPromises(){
    console.log("I am inside the function using async/await");
    const response = await fetch("https://api.github.com/users");
    console.log("before the response is fetched");
    const users = await response.json();
    console.log("Users resolved");
    return users;
}
console.log("Before calling the function");
let data = tryingPromises();
console.log("After calling the function");
console.log("data received",data);
data.then((res)=>{console.log(res);})
data.catch((err)=>{ console.log(err); })

//9. Create examples to explain promise.all function
// The Promise.all() method takes an iterable of promises as an input, and returns 
// a single Promise that resolves to an array of the results of the input promises. 
// This returned promise will fulfill when all of the input's promises have fulfilled, 
// or if the input iterable contains no promises. It rejects immediately upon any of the input 
// promises rejecting or non-promises throwing an error, and will reject with this first rejection 
// message / error.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100,'my promises');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});