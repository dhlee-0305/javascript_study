
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


function foo(i){
    if(i<0)
        return;

    console.log('begin:'+i);
    foo(i -1);
    console.log('end:'+i);
}

foo(3);

function addSquares(a, b){
    function square(x){
        return x * x;
    }

    return square(a) + square(b);
}
console.log("addSquares(2, 3):"+addSquares(2, 3));

function outside(x){
    function inside(y){
        return x+y;
    }

    return inside;
}
fn_inside = outside(3);
console.log(fn_inside(5));
console.log(outside(3)(5));

function A(x){
    console.log("A:"+x);
    function B(y){
        console.log("B:"+(x+y));
        function C(z){
            console.log("C:"+(x+y+z));
        }
        C(3);
    }
    B(2);
}
A(1);

// 이름 충돌 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#name_conflicts
function outside2(){
    var x = 10;
    function inside2(x){
        return x;
    }
    return inside2;
}

console.log(outside2()(20));

// 클로저 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%ED%81%B4%EB%A1%9C%EC%A0%80
var pet = function(name){
    var getName = function(){
        return name;
    }
    return getName;
}

myPet = pet("Vivie");
console.log(myPet());

console.log("-------------------------------------");
var createPet = function(name){
    var sex;

    return{
        setName: function(newName){
            name = newName;
        },
        getName: function(){
            return name;
        },
        getSex: function(){
            return sex;
        },

        setSex: function(newSex){
            if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")){
                sex = newSex;
            }
        }
    }
}

var dog = createPet("우유");
console.log(dog.getName());

dog.setName("모카");
dog.setSex("female");
console.log(dog.getSex());
console.log(dog.getName());

var getCode = (function(){
    var secureCode = "0]Ealeh&2";

    return function(){
        return secureCode;
    };
})();

console.log(getCode());

// 인수에 객체 사용하기 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Functions#%EC%9D%B8%EC%88%98(arguments)_%EA%B0%9D%EC%B2%B4_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

