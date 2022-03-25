
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections


let myList = [, 'home', 'school'];
console.log(myList.length);

let wisenArray = Array.of(9.3);
console.log(wisenArray);

//배열에 값 저장 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections#%EB%B0%B0%EC%97%B4%EC%97%90_%EA%B0%92_%EC%A0%80%EC%9E%A5
var emp = [];
emp[0] = 'Casey Jones';
emp[1] = 'Phil Lesh';
emp[2] = 'August West';

console.log(emp);

var arr = [];
arr[3.4] = 'Oranges';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
console.log(arr);

var myArray = ['Wind', 'Rain', 'Fire'];
console.log(myArray[1]);
console.log(myArray['length']);

var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31

var animal = ['Dusty', 'Misty', 'Twiggy'];
console.log(animal.length);
animal.length = 2;
console.log(animal.length);
console.log(animal);

console.log('for ---------------------');
var colors = ['red', 'green', 'blue'];
for(var i=0; i<colors.length; i++){
    console.log(i+":"+colors[i]);
}

console.log('forEach ---------------------');
colors.forEach(function(color){
    console.log(color);
});

console.log('forEach => ---------------------');
colors.forEach(color => console.log(color));

var array = ['first', 'second', , 'fourth'];
array.forEach(function(element){
    console.log(element);
})

if(array[2] === undefined){
    console.log('array[2] is undefined');
}

//배열 객체의 메서드 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Indexed_collections#%EB%B0%B0%EC%97%B4_%EA%B0%9D%EC%B2%B4%EC%9D%98_%EB%A9%94%EC%84%9C%EB%93%9C


var myArray2 = new Array('1', '2', '3');
myArray2 = myArray2.concat('a', 'b', 'c');
console.log(myArray2);

var myArray3 = new Array('Wind', 'Rain', 'Fire');
var list3 = myArray3.join('-');
console.log(list3);

var myArray4 = new Array('1', '2');
console.log(myArray4.push('3', '4'));
console.log(myArray4);

console.log('pop---------------------');
var myArray5 = new Array('1', '2', '3');
var list5 = myArray5.pop();
console.log(myArray5);
console.log(list5);


console.log('shift---------------------');
var myArray6 = new Array('1', '2', '3');
var list6 = myArray6.shift();
console.log(myArray6);
console.log(list6);

console.log('unshift---------------------');
var myArray7 = new Array('1', '2', '3');
var list7 = myArray7.unshift('4', '5');
console.log(myArray7);
console.log(list7);

console.log('slice--------------------------------');
var myArray8 = new Array('a', 'b', 'c', 'd', 'e', 'f');
console.log(myArray8.slice(1, 4));
console.log(myArray8);

console.log('splice--------------------------------');
var myArray9 = new Array('a', 'b', 'c', 'd', 'e', 'f');
console.log(myArray9.splice(1, 4, '가', '나', '다'));
console.log(myArray9);

var s_forEach = ['a', 'b', 'c'];
s_forEach.forEach(function(element){
    console.log(element);
});

var s_map = ['a', 'b', 'c', 'd', 'e'];
var s_map_result = s_map.map(function(item){
    return item.toUpperCase();
});
console.log(s_map_result);

var s_filter = ['a', 10, 'b', 20, 'c', 30];
var s_filter_result = s_filter.filter(function(item){
    return typeof item == 'number';
});
console.log(s_filter_result);

function isNumber(value){
    return typeof value == 'number';
};
var myArray10 = [1, 2, 3];
console.log(myArray10.every(isNumber));

var myArray11 = [1, '2', '3'];
console.log(myArray11.some(isNumber));
