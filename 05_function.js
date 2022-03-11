
function myFunc(theObject){
    theObject.make = "Hyundai";
}

var myCar = {make:"honda", mode:"accord", year:1998};

var x, y;

console.log(myCar.make);

myFunc(myCar);
console.log(myCar.make);

var square = function(number){return number * number};
console.log(square(5));

var factorial = function fac(n){return n<2 ? 1 : n*fac(n-1)};
console.log(factorial(5));

function map(f, a){
    var result = [];
    var i;

    for(i=0; i!=a.length; i++){
        result[i] = f(a[i]);
    }

    return result;
}

var f = function(x){
    return x*x*x;
}

var numbers = [0, 1, 2, 5, 10];
var cube = map(f, numbers);
console.log(cube);

console.log(square1);
console.log(square1(5));

function square1(n){
    return n*n;
}

function factorial(n){
    if ((n == 0) || (n == 1))
      return 1;
    else
      return (n * factorial(n - 1));
}

console.log(factorial(5));  

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%ED%95%A8%EC%88%98%EC%9D%98_%EB%B2%94%EC%9C%84

var num1 = 20, num2 = 3, name = "Chamahk";

function multiply(){
    return num1 * num2;
}

console.log(multiply());

function getScore(){
    var num1 = 2,
        num2 = 3;

        function add(){
            return name + " scored "+(num1 + num2);
        }

        return add();
}
console.log(getScore());