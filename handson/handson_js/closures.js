//1.

   function Counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//2.

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? 1
  }
  console.log(count); // What is logged?  0
})();

//3.

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? 3,3,3
    }, 1000);
  }

// 4. Write a code to calculate area of a rectangle using inner function. 
// In this case outer function should accept parameter length and inner function 
// should accept parameter breadth.

const area=(length)=>{
    printArea=function(bredth){
        console.log(length*bredth)
    }
}

area(4);
printArea(5);

// 5.  Take a variable in outer function and create an inner function to increase 
// the counter every time it is called

const outer = () => {
    let counter = 0;
    inner = function () {
      return counter++;
    };
    return inner;
  };

const out = outer()
console.log(out()); 
console.log(out());


//6.

// Print Output

var a = 12;
(function () {
  alert(a);
})();

//7.

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

//8.

var globalVar = "xyz";
(function outerFunc(outerArg) {
  var outerVar = "a";

  (function innerFunc(innerArg) {
    var innerVar = "b";

    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "outerVar = " +
        outerVar +
        "\n" +
        "innerVar = " +
        innerVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
  })(456);
})(123);