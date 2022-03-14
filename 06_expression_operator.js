//반환값과 체이닝
var x = 0, y=10;
const z = (x = y);

console.log(z);
console.log(x = y);
console.log("x:"+x+", y:"+y);

//구조 분해 할당
var foo = ['one', 'two', 'three'];
var one = foo[0];
var two = foo[1];
var three = foo[2];

console.log("one:"+one+", two:"+two+", three:"+three);

var [one1, two1, three1] = foo;
console.log("one1:" + one1 + ", two1:" + two1 + ", three1:" + three1);

console.log(~9);

var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for(var i=0, j=9; i<= j; i++, j--){
    console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
}

delete x[8];
console.log(x);
console.log(x.length);


var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

console.log(typeof myFun);     // "function" 반환
console.log(typeof shape);     // "string" 반환
console.log(typeof size);      // "number" 반환
console.log(typeof foo);       // "object" 반환
console.log(typeof today);     // "object" 반환
console.log(typeof dontExist); // "undefined" 반환
console.log(typeof true);
console.log(typeof null);

// in 연산자
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees);
console.log(6 in trees);
console.log("bay" in trees);

console.log("PI" in Math);

var myString = new String("coral");
console.log("length" in myString);

var myCar = { make:"hyundai", model:"grandure", year:2019};
console.log("make" in myCar);


function validate(obj, lowval, hival){
    if( (obj.value < lowval) || (obj.value > hival)){
        console.log("Invalid Value:" + obj.value);
    }else{
        console.log("Valid Value:"+obj.value);
    }
}
var v1 = {value:0, lenth:0};
v1.value = 10;
validate(v1, 5, 20);
v1.value = 30;
validate(v1, 5, 20);
